import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardHeader, CardContent, CardTitle } from "@/Components/ui/card";
import { Alert } from "@/Components/ui/alert";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function FragranceDetail({ auth, fragrance }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Fragrance Details</h2>}
        >
            <Head title={`${fragrance.name} Details`} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>{fragrance.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-4">
                                <div>
                                    <h4 className="font-semibold mb-2">Brand</h4>
                                    <p className="text-gray-600">{fragrance.brand}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Scent Type</h4>
                                    <p className="text-gray-600">{fragrance.scent_type}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Description</h4>
                                    <p className="text-gray-600">{fragrance.description}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Price</h4>
                                    <p className="text-gray-600">£{fragrance.price}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}