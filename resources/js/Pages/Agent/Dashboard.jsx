import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function AgentDashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Agent Dashboard</h2>}
        >
            <Head title="Agent Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h3 className="text-lg font-medium mb-4">Property Management</h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-blue-100 p-6 rounded-lg">
                                    <h4 className="font-semibold">My Properties</h4>
                                    <p className="text-sm text-gray-600">View and manage your property listings</p>
                                    <a href="/agent/properties" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
                                        Manage Properties →
                                    </a>
                                </div>

                                <div className="bg-green-100 p-6 rounded-lg">
                                    <h4 className="font-semibold">Add New Property</h4>
                                    <p className="text-sm text-gray-600">Create a new property listing</p>
                                    <a href="/agent/properties/create" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
                                        Add Property →
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