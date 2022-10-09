<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller {

    public function login(Request $request) {

        $credentials = $request->only('email', 'password');

        // Check if user in database
        $token = Auth::attempt($credentials);
        if (!$token) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized',
            ], 401);
        }

        $user = Auth::user();
        $user->token = $token;
        return response()->json([
                'status' => 'success',
                'user' => $user,
            ]);
    }

    public function register(Request $request) {
        
        try {
            // Add user to the database
            $user = new User;
            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = Hash::make($request->password);
            $user->date_of_birth = $request->date_of_birth;
            $user->profile_picture_url = 'NA';
            $user->role_id = $request->role_id;
            $user->save();
            // Login user
            $token = Auth::login($user);
            $user->token = $token;
            return response()->json([
                'status' => 'success',
                'message' => 'User created successfully',
                'user' => $user,
            ]);
        } catch (\Illuminate\Database\QueryException $exception) {
            return response()->json([
                'status' => 'error',
                'message' => $exception->errorInfo[2],
            ], 401);
        }
    }

    public function notAuth() {
        return "You are unauthorized.";
    }

}

