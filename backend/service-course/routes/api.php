<?php

use App\Http\Controllers\ChapterController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\ImageCourseController;
use App\Http\Controllers\LessonController;
use App\Http\Controllers\MentorController;
use App\Http\Controllers\MyCourseController;
use App\Http\Controllers\ReviewController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::apiResource('mentors', MentorController::class);
Route::apiResource('courses', CourseController::class);
Route::apiResource('chapters', ChapterController::class);
Route::apiResource('lessons', LessonController::class);

Route::post('image-courses', [ImageCourseController::class, 'store']);
Route::delete('image-courses/{id}', [ImageCourseController::class, 'destroy']);

Route::get('my-courses', [MyCourseController::class, 'index']);
Route::post('my-courses', [MyCourseController::class, 'create']);
Route::post('my-courses/premium',[MyCourseController::class, 'createPremiumAccess']);

Route::post('reviews', [ReviewController::class, 'create']);
Route::put('reviews/{id}', [ReviewController::class, 'update']);
Route::delete('reviews/{id}', [ReviewController::class, 'destroy']);
