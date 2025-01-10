<x-layout title="Edit a Property">
    <h1>Edit the details for {{$property->type}} in {{$property->city}}</h1>
    <form action="{{ route('properties.update', $property->id) }}" method="POST">
        @csrf
        @method('PATCH')
        <!--A hidden field contains the id number of the film -->
        <input type="hidden" name="id" value="{{$property->id}}">

        <div>
            <label for="type">Type:</label>
            <input type="text" id="type" name="type" value="{{$property->type}}"/>
        </div>

        <div>
            <label for="description">Description:</label>
            <textarea id="description" name="description" placeholder="Enter a description" required>{{$property->description}}</textarea>
        </div>

        <div>
            <label for="address">Address:</label>
            <textarea id="address" name="address" placeholder="Enter the address" required>{{$property->address}}</textarea>
        </div>
        <div>
            <label for="city">City:</label>
            <input type="text" id="city" name="city" placeholder="Enter the city" required value="{{$property->city}}" required/>
        </div>
        <div>
            <label for="rooms">Rooms:</label>
            <input type="number" id="rooms" name="rooms" placeholder="Enter the number of rooms" required value="{{$property->rooms}}" required/>
        </div>
        <div>
            <label for="listing_status">Listing Status:</label>
            <select id="listing_status" name="listing_status" required>
                <option value="available" {{ $property->listing_status == 'available' ? 'selected' : '' }}>Available</option>
                <option value="pending" {{ $property->listing_status == 'pending' ? 'selected' : '' }}>Pending</option>
                <option value="sold" {{ $property->listing_status == 'sold' ? 'selected' : '' }}>Sold</option>
                <option value="rented" {{ $property->listing_status == 'rented' ? 'selected' : '' }}>Rented</option>
            </select>
        </div>
        <div>
            <label for="price">Price:</label>
            <input type="number" id="price" name="price" placeholder="Enter the price" value="{{$property->price}}" step="0.01" required />
        </div>
        <div>
            <button type="submit">Save Changes</button>
        </div>
    </form>
</x-layout>
