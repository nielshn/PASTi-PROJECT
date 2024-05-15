<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->boolean('certificate');
            $table->string('thumbnail')->nullable();
            $table->enum('type', ['free', 'premium']);
            $table->enum('status', ['draft', 'published']);
            $table->integer('price')->default(0)->nullable();
            $table->enum('level', ['all-level', 'beginner', 'intermediate', 'advance']);
            $table->longText('description')->nullable();
            $table->foreignId('mentor_id')->constrained('mentors')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courses');
    }
};
