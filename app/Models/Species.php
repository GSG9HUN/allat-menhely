<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Species extends Model
{
    use HasFactory;

    protected $table = 'species';

    protected $fillable = [
        'name'
    ];

    protected $primaryKey = 'id';

    public $timestamps = null;

    private function category(): BelongsTo
    {
        return $this->belongsTo('App\Models\Category', 'species_id', 'id');
    }


}
