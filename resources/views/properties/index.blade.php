<x-layout title="List the properties">
    <h1>Here's a list of properties</h1>
    @foreach($properties as $property)
        <p>
            <a href="/properties/{{$property->id}}">
                {{$property->type}} in {{$property->city}}
            </a>
        </p>

    @endforeach
</x-layout>
