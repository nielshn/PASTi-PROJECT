<?php

namespace App\Http\Controllers;

use App\Models\Chapter;
use App\Models\Lesson;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LessonController extends Controller
{
    public function index(Request $request)
    {
        $lessons = Lesson::query();

        $this->filterByChapter($request, $lessons);

        return response()->json([
            'status' => 'success',
            'data' => $lessons->get()
        ], 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'video' => 'required|string',
            'chapter_id' => 'required|integer|exists:chapters,id'
        ]);

        if ($this->validatorFails($validator)) {
            return $this->validationErrorResponse($validator);
        }

        $lesson = Lesson::create($validator->validated());

        return response()->json([
            'status' => 'success',
            'data' => $lesson
        ], 201);
    }

    public function show($id)
    {
        $lesson = Lesson::find($id);

        if (!$lesson) {
            return $this->lessonNotFoundResponse();
        }

        return response()->json([
            'status' => 'success',
            'data' => $lesson
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'string',
            'video' => 'string',
            'chapter_id' => 'integer|exists:chapters,id'
        ]);

        if ($this->validatorFails($validator)) {
            return $this->validationErrorResponse($validator);
        }

        $lesson = Lesson::find($id);

        if (!$lesson) {
            return $this->lessonNotFoundResponse();
        }

        $lesson->update($validator->validated());

        return response()->json([
            'status' => 'success',
            'data' => $lesson
        ], 200);
    }

    public function destroy($id)
    {
        $lesson = Lesson::find($id);

        if (!$lesson) {
            return $this->lessonNotFoundResponse();
        }

        $lesson->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Lesson deleted successfully'
        ], 200);
    }

    private function filterByChapter(Request $request, $lessons)
    {
        $chapterId = $request->query('chapter_id');

        if ($chapterId) {
            $lessons->where('chapter_id', $chapterId);
        }
    }

    private function validatorFails($validator)
    {
        return $validator->fails();
    }

    private function validationErrorResponse($validator)
    {
        return response()->json([
            'status' => 'error',
            'message' => $validator->errors()
        ], 400);
    }

    private function lessonNotFoundResponse()
    {
        return response()->json([
            'status' => 'error',
            'message' => 'Lesson not found'
        ], 404);
    }
}
