import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Index({ auth, fragrances, canManage, filters }) {
    const { data, setData, get, reset } = useForm({
        search: filters.search || '',
        min_price: filters.min_price || '',
        max_price: filters.max_price || '',
    });

    // Handle search and filter submission
    const handleSearch = (e) => {
        e.preventDefault();
        get(route('fragrances.index'), { preserveState: true });
    };

    // Reset Filters Button
    const handleReset = () => {
        reset({ search: '', min_price: '', max_price: '' }); // Explicitly clear all fields
        get(route('fragrances.index'), { replace: true }); // Fetch the unfiltered results
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Fragrances</h2>}
        >
            <Head title="Fragrances" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* Add New Button */}
                    <div className="mb-4">
                        {canManage && (
                            <Link
                                href={route('fragrances.create')}
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                            >
                                Add New Fragrance
                            </Link>
                        )}
                    </div>

                    {/* Filters Section */}
                    <div className="mb-6 p-4 bg-white rounded-lg shadow-md">
                        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div>
                                <label htmlFor="search" className="block text-sm font-medium text-gray-700">
                                    Search
                                </label>
                                <input
                                    type="text"
                                    id="search"
                                    value={data.search}
                                    onChange={(e) => setData('search', e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                    placeholder="Search by name or brand"
                                />
                            </div>

                            <div>
                                <label htmlFor="min_price" className="block text-sm font-medium text-gray-700">
                                    Min Price (£)
                                </label>
                                <input
                                    type="number"
                                    id="min_price"
                                    value={data.min_price}
                                    onChange={(e) => setData('min_price', e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                    placeholder="Min price"
                                />
                            </div>

                            <div>
                                <label htmlFor="max_price" className="block text-sm font-medium text-gray-700">
                                    Max Price (£)
                                </label>
                                <input
                                    type="number"
                                    id="max_price"
                                    value={data.max_price}
                                    onChange={(e) => setData('max_price', e.target.value)}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                    placeholder="Max price"
                                />
                            </div>

                            <div className="flex items-end gap-2">
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                                >
                                    Apply Filters
                                </button>
                                <button
                                    type="button"
                                    onClick={handleReset}
                                    className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                                >
                                    Reset Filters
                                </button>
                            </div>
                        </form>

                        {/* Results Summary */}
                        <div className="mt-4 text-gray-700">
                            {fragrances.data.length > 0 ? (
                                <p>
                                    Showing {fragrances.data.length} of {fragrances.total} results.
                                </p>
                            ) : (
                                <p>No results found. Try adjusting your filters.</p>
                            )}
                        </div>
                    </div>

                    {/* Fragrances Grid */}
                    <div className="bg-white overflow-hidden shadow-sm rounded-lg">
                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {fragrances.data.map((fragrance) => (
                                    <div key={fragrance.id} className="bg-white overflow-hidden shadow-sm rounded-lg">
                                        <div className="p-6">
                                            <h3 className="text-lg font-semibold mb-2">{fragrance.name}</h3>
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
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Pagination */}
                    <div className="mt-6 flex justify-center">
                        {fragrances.links.map((link, index) => (
                            <button
                                key={index}
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (link.url) get(link.url);
                                }}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                                className={`px-3 py-1 mx-1 border rounded ${
                                    link.active ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
                                }`}
                                disabled={!link.url}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
