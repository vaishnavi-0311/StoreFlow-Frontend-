"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { getAllPurchases } from "@/services/purchaseService";

export default function PurchasesPage() {

    const [purchases, setPurchases] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchPurchases = async () => {

            try {

                const response = await getAllPurchases();

                if (response.success) {
                    setPurchases(response.data);
                }

            } catch (error) {

                console.error(error);
                alert("Failed to fetch purchases");

            } finally {

                setLoading(false);

            }

        };
        fetchPurchases();
    }, []);

    if (loading) {

        return (
            <div className="text-center py-10">
                Loading Purchases...
            </div>
        );

    }

    return (

        <div>

            {/* Header */}

            <div className="flex justify-between items-center mb-6">

                <h1 className="text-3xl font-bold">
                    Purchases
                </h1>

                <Link
                    href="/dashboard/purchases/add"
                    className="border-cyan-200/10 bg-[#081852] transition hover:bg-[#0D2A74] text-white px-4 py-2 rounded-lg "
                >
                    Add Purchase
                </Link>

            </div>

            {/* Table */}

            <div className="bg-white rounded-lg shadow overflow-hidden">

                <table className="w-full">

                    <thead className="bg-slate-100">

                        <tr>

                            <th className="p-3 text-left">
                                Supplier
                            </th>

                            <th className="p-3 text-left">
                                Store
                            </th>

                            <th className="p-3 text-left">
                                Total Amount
                            </th>

                            <th className="p-3 text-left">
                                Created By
                            </th>

                            <th className="p-3 text-left">
                                Date
                            </th>

                            <th className="p-3 text-left">
                                Action
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {purchases.map((purchase) => (

                            <tr
                                key={purchase._id}
                                className="border-b"
                            >

                                <td className="p-3">
                                    {purchase.supplierId?.name}
                                </td>

                                <td className="p-3">
                                    {purchase.storeId?.storeName}
                                </td>

                                <td className="p-3">
                                    ₹{purchase.totalAmount}
                                </td>

                                <td className="p-3">
                                    {purchase.createdBy?.name}
                                </td>

                                <td className="p-3">
                                    {new Date(
                                        purchase.createdAt
                                    ).toLocaleDateString()}
                                </td>

                                <td className="p-3">

                                    <Link
                                        href={`/dashboard/purchases/${purchase._id}`}
                                        className="border-cyan-200/10 bg-[#081852] transition hover:bg-[#0D2A74] text-white px-3 py-2 rounded-lg "
                                    >
                                        View
                                    </Link>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

}