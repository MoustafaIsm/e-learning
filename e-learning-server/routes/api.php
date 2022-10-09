<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;

Route::group(["middleware" => "auth:api"], function(){

    Route::prefix('admin')->group(function () {
        Route::group(["middleware" => ['admin']], function(){
            
            Route::prefix('user')->group(function () {
                Route::get('/get_users/{type}', [AdminController::class, 'getUsers']);
                Route::get('/get_user/{id}', [AdminController::class, 'getUser']);
                Route::post('/add_user', [AdminController::class, 'addUser']);
                Route::delete('/delete_user/{id}', [AdminController::class, 'deleteUser']);
            });
            Route::prefix('course')->group(function () {
                Route::get('/get_courses', [AdminController::class, 'getCourses']);
                Route::put('/update_course/{course_id}/{instructor_id}', [AdminController::class, 'updateCourse']);
                Route::post('/add_course', [AdminController::class, 'addCourse']);
            });
            
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
