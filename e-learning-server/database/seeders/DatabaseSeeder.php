<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder {

    public function run() {
        DB::table('users')->insert([
            'name' => Str::random(10),
            'email' => Str::random(10).'@gmail.com',
            'password' => Hash::make('password'),
            'date_of_birth' => date('d-m-y'),
            'profile_picture_url' => 'NA',
            'role_id' => rand(1,3)
        ]);

        DB::table('courses')->insert([
            'code' => Str::random(8),
            'name' => Str::random(10),
            'credits' => rand(1, 10),
            'assigned_to' => -1,
        ]);

        DB::table('enrolls')->insert([
            'course_id' => Str::random(8),
            'student_id' => Str::random(8)
        ]);

        DB::table('assignments')->insert([
            'course_id' => Str::random(8),
            'instructor_id' => Str::random(8),
            'requirments' => Str::random(50),
            'deadline' =>date('d-m-y'),
        ]);

        DB::table('announcements')->insert([
            'course_id' => Str::random(8),
            'instructor_id' => Str::random(8),
            'announcement' => Str::random(50),
        ]);

        DB::table('assignment_submits')->insert([
            'assignment_id' => Str::random(8),
            'student_id' => Str::random(8),
            'file_url' => "NA",
        ]);

    }
}
