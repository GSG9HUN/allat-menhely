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
        return response()->json(['invitations' => $result]);
    }

    /**
     * @throws \Illuminate\Validation\ValidationException
     */
    function store(Request $request)
    {

        $this->validate($request,
            ['email' => 'required']
        );

        $invitation = new Invitation();
        $invitation->email = $request['email'];
        $invitation->generateInvitationToken();
        $saved = $invitation->save();

        if($saved){
            return response()->json([$invitation]);
        }else{
            return response()->json(['error']);
        }



    }

    function destroy(Request $request)
    {

    }
}
