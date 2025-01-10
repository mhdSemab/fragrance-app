import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function About({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">About Us</h2>}
        >
            <Head title="About Us" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm rounded-lg">
                        <div className="p-6">
                            <section className="mb-8">
                                <h3 className="text-2xl font-bold mb-4">Welcome to My Property Management System</h3>
                                <p className="text-gray-600 mb-4">
                                    This is my propery management system made with the use of React, Laravel, Tailwind demonstrating my knowledge of Authentication and Authorisation with Laravel.
                                </p>
                            </section>


                            <section className="mb-8">
                                <h4 className="text-xl font-semibold mb-3">Contact Information</h4>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <p className="mb-2"><strong>Email:</strong> faizanlatiff@propertymanagement.com</p>
                                    <p className="mb-2"><strong>Phone:</strong> 0711111111111</p>
                                    <p className="mb-2"><strong>Address:</strong> 123 Huddersfield University, Huddersfield</p>
                                    <p><strong>Business Hours:</strong> Monday to Friday, 9:00 AM - 5:00 PM</p>
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}