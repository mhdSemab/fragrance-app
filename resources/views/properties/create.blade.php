<x-layout title="Add new property">
    <h1>Add a new property</h1>

    <form method="POST" action="/properties">
        @csrf
        <div>
            <label for="type">Type:</label>
            <input type="text" id="type" name="type" placeholder="Enter the property type" required />
        </div>
        <div>
            <label for="description">Description:</label>
            <textarea id="description" name="description" placeholder="Enter a description" required></textarea>
        </div>
        <div>
            <label for="address">Address:</label>
            <textarea id="address" name="address" placeholder="Enter the address" required></textarea>
        </div>
        <div>
            <label for="city">City:</label>
            <input type="text" id="city" name="city" placeholder="Enter the city" required />
        </div>
        <div>
            <label for="rooms">Rooms:</label>
            <input type="number" id="rooms" name="rooms" placeholder="Enter the number of rooms" required />
        </div>
        <div>
            <label for="listing_status">Listing Status:</label>
            <select id="listing_status" name="listing_status" required>
                <option value="available">Available</option>
                <option value="pending">Pending</option>
                <option value="sold">Sold</option>
                <option value="rented">Rented</option>
            </select>
        </div>
        <div>
            <label for="price">Price:</label>
            <input type="number" id="price" name="price" placeholder="Enter the price" step="0.01" required />
        </div>
        <div>
            <button type="submit">Save the property</button>
        </div>
    </form>
</x-layout>
