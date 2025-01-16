import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { Card, CardHeader, CardContent, CardTitle } from '@/Components/ui/card';

export default function Dashboard({ auth, fragrances }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Seller Dashboard</h2>}
        >
            <Head title="Seller Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* Quick Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>My Fragrances</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-3xl font-bold">{fragrances.length}</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Quick Actions */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Manage My Fragrances</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <p className="text-gray-600">Add, edit, or remove your fragrances from the system.</p>
                                <div className="space-x-4">
                                    <Link 
                                        href={route('fragrances.create')}
                                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                    >
                                        Add New Fragrance
                                    </Link>
                                    <Link 
                                        href={route('seller.fragrances')}
                                        className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                                    >
                                        View My Fragrances
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Recent Fragrances */}
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-4">Recent Fragrances</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {fragrances.slice(0, 3).map((fragrance) => (
                                <Card key={fragrance.id}>
                                    <CardHeader>
                                        <CardTitle>{fragrance.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 mb-2">Brand: {fragrance.brand}</p>
                                        <p className="text-gray-600 mb-2">Type: {fragrance.scent_type}</p>
                                        <p className="font-bold mb-4">£{fragrance.price}</p>
                                        <Link
                                            href={route('fragrances.edit', fragrance.id)}
                                            className="text-blue-600 hover:text-blue-800"
                                        >
                                            Edit →
                                        </Link>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}