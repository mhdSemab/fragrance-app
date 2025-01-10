import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Admin Dashboard</h2>}
        >
            <Head title="Admin Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h3 className="text-lg font-medium mb-4">Quick Actions</h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-blue-100 p-6 rounded-lg">
                                    <h4 className="font-semibold">Properties</h4>
                                    <p className="text-sm text-gray-600">Manage property listings</p>
                                    <a href="#" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
                                        View Properties →
                                    </a>
                                </div>

                                <div className="bg-green-100 p-6 rounded-lg">
                                    <h4 className="font-semibold">Users</h4>
                                    <p className="text-sm text-gray-600">Manage user accounts</p>
                                    <a href="#" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
                                        View Users →
                                    </a>
                                </div>

                                <div className="bg-purple-100 p-6 rounded-lg">
                                    <h4 className="font-semibold">Settings</h4>
                                    <p className="text-sm text-gray-600">Configure system settings</p>
                                    <a href="#" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
                                        View Settings →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}