import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Index({ auth, fragrances, canManage }) {
    console.log('Index component initializing', { auth, fragrances, canManage });
    
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Fragrances</h2>}
        >
            <Head title="Fragrances" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {canManage && (
                        <div className="mb-4">
                            <Link
                                href={route('fragrances.create')}
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                            >
                                Add New Fragrance
                            </Link>
                        </div>
                    )}

                    <div className="bg-white overflow-hidden shadow-sm rounded-lg">
                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {fragrances.map((fragrance) => (
                                    <div key={fragrance.id} className="bg-white overflow-hidden shadow-sm rounded-lg">
                                        <div className="p-6">
                                            <h3 className="text-lg font-semibold mb-2">{fragrance.name}</h3>
                                            <div className="space-y-2">
                                                <p className="text-gray-600">Brand: {fragrance.brand}</p>
                                                <p className="text-gray-600">Type: {fragrance.scent_type}</p>
                                                <p className="font-bold">£{fragrance.price}</p>
                                                <div className="pt-4 flex justify-between items-center">
                                                    <Link
                                                        href={`/fragrances/${fragrance.id}`}
                                                        className="text-blue-600 hover:text-blue-800"
                                                    >
                                                        View Details
                                                    </Link>
                                                    {canManage && (
                                                        <Link
                                                            href={`/fragrances/${fragrance.id}/edit`}
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
                </div>
            </div>
        </AuthenticatedLayout>
    );
}