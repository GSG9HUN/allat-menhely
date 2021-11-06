<?php

namespace App\Http\Controllers;

use App\Models\County;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CountyController extends Controller
{

    public function index(): JsonResponse
    {
        $result= County::query()->get();

        return response()->json(['counties'=>$result]);
    }


    public function create()
    {

    }

    public function store(Request $request)
    {

    }

    public function show(County $county)
    {

    }

    public function edit(County $county)
    {

    }

    public function update(Request $request, County $county)
    {

    }


    public function destroy(County $county)
    {

    }
}
