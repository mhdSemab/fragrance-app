import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Show({ auth, property }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Property Details</h2>}
        >
            <Head title="Property Details" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm rounded-lg">
                        <div className="p-6">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold mb-2">{property.type}</h3>
                                <p className="text-gray-600">{property.address}, {property.city}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <h4 className="font-semibold text-gray-700 mb-2">Property Details</h4>
                                    <div className="bg-gray-50 p-4 rounded-md">
                                        <p className="mb-2">
                                            <span className="font-medium">Price:</span>{' '}
                                            ${property.price.toLocaleString()}
                                        </p>
                                        <p className="mb-2">
                                            <span className="font-medium">Rooms:</span>{' '}
                                            {property.rooms}
                                        </p>
                                        <p className="mb-2">
                                            <span className="font-medium">Status:</span>{' '}
                                            <span className={`px-2 py-1 rounded text-sm ${
                                                property.listing_status === 'available' ? 'bg-green-100 text-green-800' :
                                                property.listing_status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                                'bg-red-100 text-red-800'
                                            }`}>
                                                {property.listing_status.charAt(0).toUpperCase() + property.listing_status.slice(1)}
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-700 mb-2">Description</h4>
                                    <div className="bg-gray-50 p-4 rounded-md">
                                        <p className="text-gray-600">{property.description}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end space-x-4">
                                <Link
                                    href={route('properties.edit', property.id)}
                                    className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                                >
                                    Edit Property
                                </Link>
                                <Link
                                    href={route('properties.index')}
                                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                                >
                                    Back to Properties
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}