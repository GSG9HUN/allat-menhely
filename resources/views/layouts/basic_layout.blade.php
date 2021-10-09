<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body>
<div class="header">
    @include('layouts.header.header')
</div>
<div class="content">
    @yield('content')
</div>
<div class="footer">
    @include('layouts.footer.footer')
</div>
<script src="{{asset('js/app.js')}}"></script>
</body>
</html>
