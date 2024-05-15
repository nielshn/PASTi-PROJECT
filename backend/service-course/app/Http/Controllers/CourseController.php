<?php

namespace App\Http\Controllers;

use App\Http\Requests\CourseRequest;
use App\Models\Chapter;
use App\Models\Course;
use App\Models\Mentor;
use App\Models\MyCourse;
use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CourseController extends Controller
{

    public function index(Request $request)
    {
        $courses = Course::query();

        $q = $request->query('q');
        $status = $request->query('status');

        $courses->when($q, function ($query) use ($q) {
            return $query->whereRaw("name LIKE '%" . strtolower($q) . "%'");
        });

        $courses->when($status, function ($query) use ($status) {
            return $query->where('status', '=', $status);
        });
        return response()->json([
            'status' => 'success',
            'data' => $courses->paginate(10)
        ], 200);
    }


    public function store(CourseRequest $request)
    {
        $validateData = $request->validated();
        $validator = Validator::make($validateData, $request->rules());

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors()
            ], 400);
        }

        $mentorId = $validateData['mentor_id'];
        $mentor = Mentor::find($mentorId);
        if (!$mentor) {
            return response()->json([
                'status' => 'error',
                'message' => 'Mentor not found'
            ], 404);
        }

        $course = Course::create($validateData);
        return response()->json([
            'status' => 'success',
            'data' => $course
        ], 201);
    }


    public function show(string $id)
    {
        $course = Course::with('chapters.lessons')
            ->with('mentor')
            ->with('images')
            ->find($id);

        if (!$course) {
            return response()->json([
                'status' => 'error',
                'message' => 'Course not found'
            ], 404);
        }

        // fetching reviews where course_id is exist
        $reviews = Review::where('course_id', '=', $id)->get()->toArray();
        if (count($reviews) > 0) {
            $userIds = array_column($reviews, 'user_id');
            $users = getUserByIds($userIds);

            // if service user down
            if ($users['status'] === 'error') {
                // review user can't fetching
                $reviews = [];
            } else {
                foreach ($reviews as $key => $review) {
                    $userIndex = array_search($review['user_id'], array_column($users['data'], 'id'));
                    $reviews[$key]['users'] = $users['data'][$userIndex];
                }
            }
        }

        $totalStudent = MyCourse::where('course_id', '=', $id)->count();
        $totalVideos = Chapter::where('course_id', '=', $id)->withCount('lessons')->get()->toArray();
        $finalTotalVideos = array_sum(array_column($totalVideos, 'lessons_count'));

        $course['reviews'] = $reviews;
        $course['totalVideos'] = $finalTotalVideos;
        $course['totalStudent'] = $totalStudent;

        return response()->json([
            'status' => 'success',
            'data' => $course
        ], 200);
    }


    public function update(Request $request, $id)
    {
        $rules = [
            'name' => 'string',
            'certificate' => 'boolean',
            'thumbnail' => 'string|url',
            'type' => 'in:free,premium',
            'status' => 'in:draft,published',
            'price' => 'integer',
            'level' => 'in:all-level,beginner,intermediate,advance',
            'mentor_id' => 'integer',
            'description' => 'string',
        ];

        $data = $request->all();

        $validator = Validator::make($data, $rules);
        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors()
            ], 400);
        }

        $course = Course::find($id);
        if (!$course) {
            return response()->json([
                'status' => 'error',
                'message' => 'Course not found'
            ], 404);
        }

        // Check if mentor exists
        if ($request->has('mentor_id')) {
            $mentor = Mentor::find($request->mentor_id);
            if (!$mentor) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Mentor not found'
                ], 404);
            }
        }

        $course->update($request->all());

        return response()->json([
            'status' => 'success',
            'data' => $course
        ], 200);
    }


    public function destroy(string $id)
    {
        $course = Course::find($id);
        if (!$course) {
            return response()->json([
                'status' => 'error',
                'message' => 'Course not found'
            ], 404);
        }

        $course->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Course deleted'
        ], 200);
    }
}
