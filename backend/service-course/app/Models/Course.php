<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;
    protected $table = 'courses';

    protected $casts = [
        'created_at' => 'datetime:Y-m-d H:m:s',
        'updated_at' => 'datetime:Y-m-d H:m:s',
    ];

    protected $fillable = [
        'name',
        'certificate',
        'thumbnail',
        'type',
        'status',
        'price',
        'level',
        'description',
        'mentor_id',
    ];


    // get data from other models
    public function mentor()
    {
        return $this->belongsTo(Mentor::class, 'mentor_id');
    }

    public function chapters()
    {
        return $this->hasMany(Chapter::class, 'course_id')->orderBy('id', 'ASC');
    }

    public function images()
    {
        return $this->hasMany(ImageCourse::class, 'course_id')->orderBy('id', 'DESC');
    }
}
