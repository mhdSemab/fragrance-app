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
                                <h3 className="text-2xl font-bold mb-4">Welcome to Our Fragrance Collection</h3>
                                <p className="text-gray-600 mb-4">
                                    Discover our curated collection of luxury fragrances. Our platform connects 
                                    fragrance enthusiasts with their perfect scents, offering detailed information 
                                    and expert descriptions.
                                </p>
                            </section>

                            <section className="mb-8">
                                <h4 className="text-xl font-semibold mb-3">Our Services</h4>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h5 className="font-bold mb-2">Premium Selection</h5>
                                        <p className="text-gray-600">
                                            Browse through our collection of high-end and niche fragrances.
                                        </p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h5 className="font-bold mb-2">Expert Curation</h5>
                                        <p className="text-gray-600">
                                            Each fragrance is carefully selected and described by our experts.
                                        </p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h5 className="font-bold mb-2">Community</h5>
                                        <p className="text-gray-600">
                                            Connect with other fragrance enthusiasts and share your experiences.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h4 className="text-xl font-semibold mb-3">Contact Information</h4>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <p className="mb-2"><strong>Email:</strong> contact@fragranceguide.com</p>
                                    <p className="mb-2"><strong>Location:</strong> Manchester, UK</p>
                                    <p><strong>Hours:</strong> Monday to Friday, 9:00 AM - 5:00 PM</p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}