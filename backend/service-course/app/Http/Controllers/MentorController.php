<?php

namespace App\Http\Controllers;

use App\Http\Requests\MentorRequest;
use App\Models\Mentor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MentorController extends Controller
{
    public function index()
    {
        $mentors = Mentor::all();

        return response()->json([
            'status' => 'success',
            'data' => $mentors
        ], 200);
    }


    public function store(MentorRequest $request)
    {
        $validatedData = $request->validated();

        $existingEmail = Mentor::where('email', $validatedData['email'])->first();
        if ($existingEmail) {
            return response()->json([
                'status' => 'error',
                'message' => 'The email has already been taken.'
            ], 400);
        }


        $mentor = Mentor::create($validatedData);

        return response()->json([
            'status' => 'success',
            'data' => $mentor
        ], 201);
    }

    public function show($id)
    {
        $mentor = Mentor::find($id);

        if (!$mentor) {
            return response()->json([
                'status' => 'error',
                'message' => 'Mentor not found'
            ], 404);
        }
        return response()->json([
            'status' => 'success',
            'data' => $mentor
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $rules = [
            'name' => 'string',
            'profile' => 'url',
            'email' => 'email',
            'profession' => 'string'
        ];

        $data = $request->all();

        $validator = Validator::make($data, $rules);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors()
            ], 400);
        }

        $mentor = Mentor::find($id);
        if (!$mentor) {
            return response()->json([
                'status' => 'error',
                'message' => 'Mentor not found'
            ], 404);
        }
        $mentor->update($data);

        return response()->json([
            'status' => 'success',
            'data' => $mentor
        ], 200);
    }

    public function destroy($id)
    {
        $mentor = Mentor::find($id);
        if (!$mentor) {
            return response()->json([
                'status' => 'error',
                'message' => 'Mentor not found'
            ], 404);
        }

        $mentor->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Mentor deleted successfully'
        ], 200);
    }
}
