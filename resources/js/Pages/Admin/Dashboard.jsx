import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { Card, CardHeader, CardContent, CardTitle } from '@/Components/ui/card';

export default function Dashboard({ auth, fragrancesCount, sellersCount }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Admin Dashboard</h2>}
        >
            <Head title="Admin Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* Quick Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Total Fragrances</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-3xl font-bold">{fragrancesCount}</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Total Sellers</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-3xl font-bold">{sellersCount}</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Manage Fragrances</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <p className="text-gray-600">Add, edit, or remove fragrances from the system.</p>
                                    <div className="space-x-4">
                                        <Link 
                                            href={route('fragrances.create')}
                                            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                        >
                                            Add New Fragrance
                                        </Link>
                                        <Link 
                                            href={route('admin.fragrances')}
                                            className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                                        >
                                            View All Fragrances
                                        </Link>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Manage Users</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">View and manage user accounts and roles.</p>
                                <div className="mt-4">
                                    <Link 
                                        href="#"
                                        className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                                    >
                                        View Users
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}