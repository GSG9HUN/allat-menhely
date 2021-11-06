<?php

namespace App\Http\Controllers;

use App\Models\Species;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SpeciesController extends Controller
{
    public function index(): JsonResponse
    {

        $result = Species::query()->with('category')->get();

        return response()->json(['species'=>$result]);
    }

    public function create()
    {

    }

    public function store(Request $request)
    {

    }

    public function show($id)
    {

    }

    public function edit($id)
    {

    }

    public function update(Request $request, $id)
    {

    }

    public function destroy($id)
    {

    }
}
