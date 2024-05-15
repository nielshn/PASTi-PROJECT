<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\ImageCourse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ImageCourseController extends Controller
{
    public function store(Request $request)
    {
        $rules = [
            'image' => 'required|url',
            'course_id' => 'required|integer',
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
        $course = Course::find($courseId);
        if (!$course) {
            return response()->json([
                'status' => 'error',
                'message' => 'Course not found'
            ], 404);
        }

        $imageCourse = ImageCourse::create($data);
        return response()->json([
            'status' => 'success',
            'data' => $imageCourse
        ], 201);
    }

    public function destroy(string $id)
    {
        $courseImage = Course::find($id);
        if (!$courseImage) {
            return response()->json([
                'status' => 'error',
                'message' => 'Course not found'
            ], 404);
        }

        $courseImage->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Course image deleted'
        ], 200);
    }
}
