import React, { useState, useEffect } from "react";
import { Link } from '@inertiajs/react';
import { Card, CardHeader, CardContent, CardTitle } from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";

const PublicFragranceList = () => {
    const [fragrances, setFragrances] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchFragrances();
    }, []);

    const fetchFragrances = async () => {
        try {
            const response = await fetch('/fragrances/public');
            const data = await response.json();
            setFragrances(data);
        } catch (error) {
            console.error('Error fetching fragrances:', error);
        }
    };

    const filteredFragrances = fragrances.filter(fragrance =>
        fragrance.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        fragrance.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        fragrance.scent_type.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="mb-6">
                    <Input
                        type="text"
                        placeholder="Search fragrances..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="max-w-md"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredFragrances.map((fragrance) => (
                        <Card key={fragrance.id}>
                            <CardHeader>
                                <CardTitle>{fragrance.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 mb-2">Brand: {fragrance.brand}</p>
                                <p className="text-gray-600 mb-2">Type: {fragrance.scent_type}</p>
                                <p className="font-bold">£{fragrance.price}</p>
                                <Link
                                    href={route('fragrances.public.show', fragrance.id)}
                                    className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
                                >
                                    View Details →
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PublicFragranceList;