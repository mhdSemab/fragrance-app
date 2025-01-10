import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import DangerButton from '@/Components/DangerButton';

export default function Edit({ auth, property }) {
    const { data, setData, patch, delete: destroy, processing, errors } = useForm({
        type: property.type,
        description: property.description,
        address: property.address,
        city: property.city,
        rooms: property.rooms,
        listing_status: property.listing_status,
        price: property.price,
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route('properties.update', property.id));
    };

    const handleDelete = () => {
        if (confirm('Are you sure you want to delete this property? This action cannot be undone.')) {
            destroy(route('properties.destroy', property.id));
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Property</h2>}
        >
            <Head title="Edit Property" />

            <div className="py-12">
                <div className="max-w-2xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm rounded-lg">
                        <form onSubmit={submit} className="p-6">
                            <div className="mb-4">
                                <InputLabel htmlFor="type" value="Property Type" />
                                <TextInput
                                    id="type"
                                    type="text"
                                    name="type"
                                    value={data.type}
                                    className="mt-1 block w-full"
                                    onChange={e => setData('type', e.target.value)}
                                />
                                <InputError message={errors.type} className="mt-2" />
                            </div>

                            <div className="mb-4">
                                <InputLabel htmlFor="description" value="Description" />
                                <textarea
                                    id="description"
                                    name="description"
                                    value={data.description}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                    rows="4"
                                    onChange={e => setData('description', e.target.value)}
                                />
                                <InputError message={errors.description} className="mt-2" />
                            </div>

                            <div className="mb-4">
                                <InputLabel htmlFor="address" value="Address" />
                                <TextInput
                                    id="address"
                                    type="text"
                                    name="address"
                                    value={data.address}
                                    className="mt-1 block w-full"
                                    onChange={e => setData('address', e.target.value)}
                                />
                                <InputError message={errors.address} className="mt-2" />
                            </div>

                            <div className="mb-4">
                                <InputLabel htmlFor="city" value="City" />
                                <TextInput
                                    id="city"
                                    type="text"
                                    name="city"
                                    value={data.city}
                                    className="mt-1 block w-full"
                                    onChange={e => setData('city', e.target.value)}
                                />
                                <InputError message={errors.city} className="mt-2" />
                            </div>

                            <div className="mb-4">
                                <InputLabel htmlFor="rooms" value="Number of Rooms" />
                                <TextInput
                                    id="rooms"
                                    type="number"
                                    name="rooms"
                                    value={data.rooms}
                                    className="mt-1 block w-full"
                                    min="1"
                                    onChange={e => setData('rooms', e.target.value)}
                                />
                                <InputError message={errors.rooms} className="mt-2" />
                            </div>

                            <div className="mb-4">
                                <InputLabel htmlFor="listing_status" value="Listing Status" />
                                <select
                                    id="listing_status"
                                    name="listing_status"
                                    value={data.listing_status}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                    onChange={e => setData('listing_status', e.target.value)}
                                >
                                    <option value="available">Available</option>
                                    <option value="pending">Pending</option>
                                    <option value="sold">Sold</option>
                                </select>
                                <InputError message={errors.listing_status} className="mt-2" />
                            </div>

                            <div className="mb-4">
                                <InputLabel htmlFor="price" value="Price" />
                                <TextInput
                                    id="price"
                                    type="number"
                                    name="price"
                                    value={data.price}
                                    className="mt-1 block w-full"
                                    min="0"
                                    step="0.01"
                                    onChange={e => setData('price', e.target.value)}
                                />
                                <InputError message={errors.price} className="mt-2" />
                            </div>

                            <div className="flex items-center justify-between mt-6">
                                <DangerButton type="button" onClick={handleDelete}>
                                    Delete Property
                                </DangerButton>
                                <div className="flex items-center space-x-4">
                                    <Link
                                        href={route('properties.index')}
                                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                                    >
                                        Cancel
                                    </Link>
                                    <PrimaryButton className="ml-4" disabled={processing}>
                                        Update Property
                                    </PrimaryButton>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}