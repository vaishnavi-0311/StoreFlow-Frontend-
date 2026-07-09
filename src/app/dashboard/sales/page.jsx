"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { getAllSales } from "@/services/saleService";

export default function SalesPage() {

    const [sales, setSales] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {


        const fetchSales = async () => {

            try {

                const response = await getAllSales();

                if (response.success) {
                    setSales(response.data);
                }

            } catch (error) {

                console.error(error);
                alert("Failed to fetch sales");

            } finally {

                setLoading(false);

            }

        };

        fetchSales();
    }, []);

    if (loading) {

        return (
            <div className="text-center py-10">
                Loading Sales...
            </div>
        );

    }

    return (

        <div>

            {/* Header */}

            <div className="flex justify-between items-center mb-6">

                <h1 className="text-3xl font-bold">
                    Sales
                </h1>

                <Link
                    href="/dashboard/sales/add"
                    className="border-cyan-200/10 bg-[#081852] transition hover:bg-[#0D2A74] text-white px-4 py-2 rounded-lg "
                >
                    Add Sale
                </Link>

            </div>

            {/* Table */}

            <div className="bg-white rounded-lg shadow overflow-hidden">

                <table className="w-full">

                    <thead className="bg-slate-100">

                        <tr>

                            <th className="p-3 text-left">
                                Invoice
                            </th>

                            <th className="p-3 text-left">
                                Customer
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

                        {sales.map((sale) => (

                            <tr
                                key={sale._id}
                                className="border-b"
                            >

                                <td className="p-3">
                                    {sale.invoiceNumber}
                                </td>

                                <td className="p-3">
                                    {sale.customerId?.name}
                                </td>

                                <td className="p-3">
                                    {sale.storeId?.storeName}
                                </td>

                                <td className="p-3">
                                    ₹{sale.totalAmount}
                                </td>

                                <td className="p-3">
                                    {sale.createdBy?.name}
                                </td>

                                <td className="p-3">
                                    {new Date(
                                        sale.createdAt
                                    ).toLocaleDateString()}
                                </td>

                                <td className="p-3">

                                    <Link
                                        href={`/dashboard/sales/${sale._id}`}
                                        className="border-cyan-200/10 bg-[#081852] transition hover:bg-[#0D2A74] text-white px-3 py-2 rounded-lg"
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