<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\user;
use App\Models\Course;

class AdminController extends Controller {

    public function getUsers($type) {
        if ($type == 'students') {
            $students = User::where('role_id', '=', 3)->get();

            return response()->json([
                'status' => 'success',
                'message' => 'Got students successfully',
                'students' => $students,
            ]);
        }
        $instructors = User::where('role_id', '=', 2)->get();

        return response()->json([
            'status' => 'success',
            'message' => 'Got instructors successfully',
            'instructors' => $instructors,
        ]);

    }

    public function getCourses() {
        $courses = Course::all();

        return response()->json([
            'status' => 'success',
            'message' => 'Got courses successfully',
            'courses' => $courses,
        ]);
    }

    public function getUser($id) {
        $user = User::where('_id', $id)->get();

        return response()->json([
            'status' => 'success',
            'message' => 'Got user successfully',
            'user' => $user,
        ]);
    }

    public function addUser (Request $request) {
        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->date_of_birth = $request->date_of_birth;
        $user->profile_picture_url = 'NA';
        $user->role_id = $request->role_id;
        $user->save();

        return response()->json([
            'status' => 'success',
            'message' => 'User created successfully',
            'user' => $user,
        ]);
    }

    public function deleteUser ($id) {
        $delete = User::where('_id', $id)->delete();

        if ($delete) {
            return response()->json([
                'status' => 'success'
            ]);
        }
        return response()->json([
            'status' => 'failed'
        ], 401);
    }
    
}
