"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import { getSaleById } from "@/services/saleService";

export default function SaleDetailsPage() {

    const params = useParams();
    const router = useRouter();

    const saleId = params.id;

    const [sale, setSale] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchSale = async () => {

            try {

                const response = await getSaleById(saleId);

                if (response.success) {
                    setSale(response.data);
                }

            } catch (error) {

                console.error(error);
                alert("Failed to load sale");

            } finally {

                setLoading(false);

            }

        };

        if (saleId) {
            fetchSale();
        }

    }, [saleId]);

    if (loading) {
        return (
            <div className="text-center py-10">
                Loading Sale...
            </div>
        );
    }

    if (!sale) {
        return (
            <div className="text-center py-10">
                Sale not found
            </div>
        );
    }

    return (

        <div className="max-w-6xl mx-auto">

            <div className="flex justify-between items-center mb-8">

                <h1 className="text-3xl font-bold">
                    Sale Details
                </h1>

                <button
                    onClick={() => router.push("/dashboard/sales")}
                    className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
                >
                    Back
                </button>

            </div>

            <div className="bg-white rounded-lg shadow p-6">

                {/* Sale Information */}

                <div className="grid grid-cols-2 gap-8 mb-8">

                    <div>

                        <p>
                            <strong>Invoice :</strong>{" "}
                            {sale.invoiceNumber}
                        </p>

                        <p>
                            <strong>Customer :</strong>{" "}
                            {sale.customerId?.name}
                        </p>

                        <p>
                            <strong>Phone :</strong>{" "}
                            {sale.customerId?.phone}
                        </p>

                        <p>
                            <strong>Email :</strong>{" "}
                            {sale.customerId?.email}
                        </p>

                    </div>

                    <div>

                        <p>
                            <strong>Store :</strong>{" "}
                            {sale.storeId?.storeName}
                        </p>

                        <p>
                            <strong>Created By :</strong>{" "}
                            {sale.createdBy?.name}
                        </p>

                        <p>
                            <strong>Date :</strong>{" "}
                            {new Date(
                                sale.createdAt
                            ).toLocaleDateString()}
                        </p>

                    </div>

                </div>

                {/* Items */}

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

                        {sale.items.map((item, index) => (

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

                        Total Amount : ₹{sale.totalAmount}

                    </h2>

                </div>

            </div>

        </div>

    );

}