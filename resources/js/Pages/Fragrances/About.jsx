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
                                <h3 className="text-2xl font-bold mb-4">Welcome to My Fragrance App</h3>
                                <p className="text-gray-600 mb-4">
                                    <strong>Fragrance App made by Muhammad Semab.</strong>
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}