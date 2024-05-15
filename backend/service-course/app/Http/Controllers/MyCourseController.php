<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\MyCourse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class MyCourseController extends Controller
{
    public function index(Request $request)
    {
        $myCourses = MyCourse::query()->with('course');

        $userId = $request->query('user_id');
        $myCourses->when($userId, function ($query) use ($userId) {
            return $query->where('user_id', '=', $userId);
        });
        return response()->json([
            'status' => 'success',
            'data' => $myCourses->get()
        ], 200);
    }
    public function create(Request $request)
    {
        $rules = [
            'course_id' => 'required|integer',
            'user_id' => 'required|integer',
        ];

        $data = $request->all();

        $validator = Validator::make($data, $rules);
        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors()
            ], 400);
        }

        $courseId = $request->input('course_id');
        $userId = $request->input('user_id');

        // Check if the course is already in the user's list
        $isExistMyCourse = MyCourse::where('course_id', $courseId)
            ->where('user_id', $userId)
            ->exists();

        if ($isExistMyCourse) {
            return response()->json([
                'status' => 'error',
                'message' => 'This course is already in your list'
            ], 409);
        }

        $course = Course::find($courseId);
        if (!$course) {
            return response()->json([
                'status' => 'error',
                'message' => 'Course not found'
            ], 404);
        }

        $user = getUser($userId);

        if ($user['status'] === 'error') {
            return response()->json([
                'status' => $user['status'],
                'message' => $user['message']
            ], $user['http_code']);
        }

        if ($course->type === 'premium') {
            if ($course->price === 0) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Price can\'t be 0'
                ], 405);
            }

            $order = postOrder([
                'user' => $user['data'],
                'course' => $course->toArray()
            ]);

            if ($order['status'] === 'error') {
                return response()->json([
                    'status' => $order['status'],
                    'message' => $order['message']
                ], $order['http_code']);
            }

            return response()->json([
                'status' => $order['status'],
                'data' => $order['data']
            ], 201);
        } else {
            $myCourse = MyCourse::create($data);
            return response()->json([
                'status' => 'success',
                'data' => $myCourse
            ], 201);
        }
    }


    public function createPremiumAccess(Request $request)
    {
        $data = $request->all();

        // Pastikan tidak ada entri duplikat sebelum membuat entri baru
        $existingEntry = MyCourse::where('user_id', $data['user_id'])
            ->where('course_id', $data['course_id'])
            ->first();
        if ($existingEntry) {
            return response()->json([
                'status' => 'error',
                'message' => 'This course is already in your list'
            ], 409);
        }

        // Buat entri baru jika tidak ada yang duplikat
        $myCourse = MyCourse::create($data);

        return response()->json([
            'status' => 'success',
            'data' => $myCourse
        ]);
    }
}
