import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Index({ auth, properties, can }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Properties</h2>}
        >
            <Head title="Properties" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {can.create_property && (
                        <div className="mb-4">
                            <Link
                                href={route('properties.create')}
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                            >
                                Add New Property
                            </Link>
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {properties.map((property) => (
                            <div key={property.id} className="bg-white overflow-hidden shadow-sm rounded-lg">
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold mb-2">{property.type}</h3>
                                    <p className="text-gray-600 mb-2">{property.address}, {property.city}</p>
                                    <p className="text-gray-800 font-bold mb-2">${property.price.toLocaleString()}</p>
                                    <div className="flex justify-between items-center">
                                        <span className={`px-2 py-1 rounded text-sm ${
                                            property.listing_status === 'available' ? 'bg-green-100 text-green-800' :
                                            property.listing_status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-red-100 text-red-800'
                                        }`}>
                                            {property.listing_status.charAt(0).toUpperCase() + property.listing_status.slice(1)}
                                        </span>
                                        <div className="space-x-2">
                                            <Link
                                                href={route('properties.show', property.id)}
                                                className="text-blue-600 hover:text-blue-800"
                                            >
                                                View
                                            </Link>
                                            {can.edit_property && (
                                                <Link
                                                    href={route('properties.edit', property.id)}
                                                    className="text-gray-600 hover:text-gray-800"
                                                >
                                                    Edit
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}