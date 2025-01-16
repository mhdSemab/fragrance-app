import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Create({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        brand: '',
        scent_type: '',
        description: '',
        price: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('fragrances.store'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Add New Fragrance</h2>}
        >
            <Head title="Create Fragrance" />

            <div className="py-12">
                <div className="max-w-2xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm rounded-lg">
                        <form onSubmit={submit} className="p-6">
                            <div className="mb-4">
                                <InputLabel htmlFor="name" value="Name" />
                                <TextInput
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    className="mt-1 block w-full"
                                    onChange={e => setData('name', e.target.value)}
                                    required
                                />
                                <InputError message={errors.name} className="mt-2" />
                            </div>

                            <div className="mb-4">
                                <InputLabel htmlFor="brand" value="Brand" />
                                <TextInput
                                    id="brand"
                                    type="text"
                                    name="brand"
                                    value={data.brand}
                                    className="mt-1 block w-full"
                                    onChange={e => setData('brand', e.target.value)}
                                    required
                                />
                                <InputError message={errors.brand} className="mt-2" />
                            </div>

                            <div className="mb-4">
                                <InputLabel htmlFor="scent_type" value="Scent Type" />
                                <TextInput
                                    id="scent_type"
                                    type="text"
                                    name="scent_type"
                                    value={data.scent_type}
                                    className="mt-1 block w-full"
                                    onChange={e => setData('scent_type', e.target.value)}
                                    required
                                />
                                <InputError message={errors.scent_type} className="mt-2" />
                            </div>

                            <div className="mb-4">
                                <InputLabel htmlFor="description" value="Description" />
                                <textarea
                                    id="description"
                                    name="description"
                                    value={data.description}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                    rows="4"
                                    onChange={e => setData('description', e.target.value)}
                                    required
                                />
                                <InputError message={errors.description} className="mt-2" />
                            </div>

                            <div className="mb-4">
                                <InputLabel htmlFor="price" value="Price (£)" />
                                <TextInput
                                    id="price"
                                    type="number"
                                    name="price"
                                    value={data.price}
                                    className="mt-1 block w-full"
                                    step="0.01"
                                    onChange={e => setData('price', e.target.value)}
                                    required
                                />
                                <InputError message={errors.price} className="mt-2" />
                            </div>

                            <div className="flex items-center justify-end mt-4">
                                <Link
                                    href={route('fragrances.index')}
                                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 mr-2"
                                >
                                    Cancel
                                </Link>
                                <PrimaryButton className="ml-4" disabled={processing}>
                                    Create Fragrance
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}