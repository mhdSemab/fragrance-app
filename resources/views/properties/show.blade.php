<x-layout title="Show the details for a property">
    <h1>{{$property->type}}</h1>
    <p>City: {{$property->city}}</p>
    <p>Address: {{$property->address}}</p>
    <p>Description: {{$property->description}}</p>
    <p>Rooms: {{$property->rooms}}</p>
    <p>Listing Status: {{$property->listing_status}}</p>
    <p>Price: ${{$property->price}}</p>

    <a href='/properties/{{$property->id}}/edit'>
        <button>Edit</button>
    </a>

    <form method='POST' action='{{ route('properties.destroy', $property->id) }}'>
        @csrf
        @method('DELETE')
        <input type="hidden" name="id" value="{{$property->id}}">
        <button type='submit'>Delete</button>
    </form>
</x-layout>


