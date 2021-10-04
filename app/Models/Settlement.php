<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Settlement extends Model
{
    use HasFactory;

    protected $table = 'settlement';

    protected $fillable = [
        'name'
    ];

    protected $primaryKey = 'id';

    public $timestamps = null;

    private function shelter(): BelongsTo
    {
        return $this->belongsTo('App\Models\Shelter', 'settlement_id', 'id');
    }
}
