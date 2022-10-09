<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;

Route::group(["middleware" => "auth:api"], function(){

    Route::prefix('admin')->group(function () {
        Route::group(["middleware" => ['admin']], function(){
            Route::get('/get_students', [AdminController::class, 'getStudents']);
            Route::get('/get_instructors', [AdminController::class, 'getInstructors']);
            Route::get('/get_courses', [AdminController::class, 'getCourses']);
            Route::get('/get_user/{id}', [AdminController::class, 'getUser']);
        });
    });

    Route::prefix('instructor')->group(function () {

    });

    Route::prefix('student')->group(function () {

    });

});

Route::prefix('auth')->group(function () {
    
    Route::post("/login", [AuthController::class, "login"]);
    Route::post("/register", [AuthController::class, "register"]);
    Route::get("/not_auth", [AuthController::class, 'notAuth'])->name('not-auth');

});
