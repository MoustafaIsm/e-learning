<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\user;

class AdminController extends Controller {

    public function getStudents() {
        $students = User::where('role_id', '=', 3)->get();

        return response()->json([
            'status' => 'success',
            'message' => 'Got students successfully',
            'students' => $students,
        ]);
    }

    public function getInstructors() {
        $instructors = User::where('role_id', '=', 2)->get();

        return response()->json([
            'status' => 'success',
            'message' => 'Got instructors successfully',
            'instructors' => $instructors,
        ]);
    }
    
}
