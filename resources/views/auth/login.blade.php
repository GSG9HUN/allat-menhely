@extends('layouts.basic_layout')

@section('content')

    <div id="{{\Request::route()->getName()}}">
    </div>
@endsection
