<!DOCTYPE html>
<html>
<head>
    <title>{{$title}}</title>
    <meta http-equiv="content-type" content="text/html;charset=utf-8" />
    <link href="{{asset('css/style.css')}}" type="text/css" rel="stylesheet" />
</head>
<body>
<nav>
    <ul>
        <li><a href="/properties">Home</a></li>
        <li><a href="/properties/create">Add new film</a></li>
        <li><a href="/properties/about">About</a></li>
    </ul>
</nav>
{{$slot}}
</body>
</html>
