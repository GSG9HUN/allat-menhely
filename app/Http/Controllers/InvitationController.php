<?php

namespace App\Http\Controllers;

use App\Models\Invitation;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class InvitationController extends Controller
{
    function index(): JsonResponse
    {
        $result = Invitation::query()->get();
        return response()->json(['invitations'=>$result]);
    }

    function store(Request $request){

    }

    function destroy(Request $request){

    }
}
