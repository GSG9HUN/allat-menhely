@extends('view_blades.layouts.basic_layout')
@section('content')
    <div id="{{\Request::route()->getName()}}">
        <article id="work">
            <h2 class="major">Menhelyek</h2>
            <span class="image main"><img src="{{asset('../images/pic02.jpg')}}" alt=""/></span>
            <p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac.
                Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin
                mauris nec lorem luctus ultrices.</p>
            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed
                nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet
                massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus
                et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
        </article>
    </div>

@endsection
