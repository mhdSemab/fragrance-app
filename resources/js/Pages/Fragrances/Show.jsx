import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Show({ auth, fragrance }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Fragrance Details</h2>}
        >
            <Head title="Fragrance Details" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm rounded-lg">
                        <div className="p-6">
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold mb-2">{fragrance.name}</h3>
                                <p className="text-gray-600">By {fragrance.brand}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <h4 className="font-semibold text-gray-700 mb-2">Details</h4>
                                    <div className="bg-gray-50 p-4 rounded-md">
                                        <p className="mb-2">
                                            <span className="font-medium">Price:</span>{' '}
                                            £{fragrance.price}
                                        </p>
                                        <p className="mb-2">
                                            <span className="font-medium">Scent Type:</span>{' '}
                                            {fragrance.scent_type}
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-700 mb-2">Description</h4>
                                    <div className="bg-gray-50 p-4 rounded-md">
                                        <p className="text-gray-600">{fragrance.description}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end space-x-4">
                                <Link
                                    href={route('fragrances.edit', fragrance.id)}
                                    className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                                >
                                    Edit Fragrance
                                </Link>
                                <Link
                                    href={route('fragrances.index')}
                                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                                >
                                    Back to Fragrances
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}