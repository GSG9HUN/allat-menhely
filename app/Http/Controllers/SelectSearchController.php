<?php

namespace App\Http\Controllers;

use App\Models\County;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SelectSearchController extends Controller
{
    function getCountyOptions(): JsonResponse
    {
       $options = County::query()->select('name as label','id as value')->orderBy('id')->get();

       return response()->json(['countyOptions'=>$options]);
    }
}
