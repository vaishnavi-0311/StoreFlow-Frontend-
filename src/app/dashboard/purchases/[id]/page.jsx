"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import { getPurchaseById } from "@/services/purchaseService";

export default function PurchaseDetailsPage() {

    const params = useParams();
    const router = useRouter();

    const purchaseId = params.id;

    const [purchase, setPurchase] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchPurchase = async () => {

            try {

                const response = await getPurchaseById(purchaseId);

                if (response.success) {
                    setPurchase(response.data);
                }

            } catch (error) {

                console.error(error);
                alert("Failed to load purchase");

            } finally {

                setLoading(false);

            }

        };

        if (purchaseId) {
            fetchPurchase();
        }

    }, [purchaseId]);

    if (loading) {
        return (
            <div className="text-center py-10">
                Loading Purchase...
            </div>
        );
    }

    if (!purchase) {
        return (
            <div className="text-center py-10">
                Purchase not found.
            </div>
        );
    }

    return (

        <div className="max-w-6xl mx-auto">

            <div className="flex justify-between items-center mb-8">

                <h1 className="text-3xl font-bold">
                    Purchase Details
                </h1>

                <button
                    onClick={() => router.push("/dashboard/purchases")}
                    className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
                >
                    Back
                </button>

            </div>

            <div className="bg-white rounded-lg shadow p-6">

                <div className="grid grid-cols-2 gap-6 mb-8">

                    <div>

                        <p>
                            <strong>Supplier:</strong>{" "}
                            {purchase.supplierId?.name}
                        </p>

                        <p>
                            <strong>Phone:</strong>{" "}
                            {purchase.supplierId?.phone}
                        </p>

                        <p>
                            <strong>Email:</strong>{" "}
                            {purchase.supplierId?.email}
                        </p>

                    </div>

                    <div>

                        <p>
                            <strong>Store:</strong>{" "}
                            {purchase.storeId?.storeName}
                        </p>

                        <p>
                            <strong>Created By:</strong>{" "}
                            {purchase.createdBy?.name}
                        </p>

                        <p>
                            <strong>Date:</strong>{" "}
                            {new Date(
                                purchase.createdAt
                            ).toLocaleDateString()}
                        </p>

                    </div>

                </div>

                <table className="w-full border">

                    <thead className="bg-slate-100">

                        <tr>

                            <th className="p-3 text-left">
                                Product
                            </th>

                            <th className="p-3 text-left">
                                SKU
                            </th>

                            <th className="p-3 text-left">
                                Qty
                            </th>

                            <th className="p-3 text-left">
                                Price
                            </th>

                            <th className="p-3 text-left">
                                Total
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {purchase.items.map((item, index) => (

                            <tr
                                key={index}
                                className="border-t"
                            >

                                <td className="p-3">
                                    {item.productId?.name}
                                </td>

                                <td className="p-3">
                                    {item.productId?.sku}
                                </td>

                                <td className="p-3">
                                    {item.qty}
                                </td>

                                <td className="p-3">
                                    ₹{item.price}
                                </td>

                                <td className="p-3">
                                    ₹{item.qty * item.price}
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

                <div className="text-right mt-8">

                    <h2 className="text-2xl font-bold">

                        Total Amount : ₹{purchase.totalAmount}

                    </h2>

                </div>

            </div>

        </div>

    );

}