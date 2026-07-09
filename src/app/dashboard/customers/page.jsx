"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { getAllCustomers } from "@/services/customerService";

export default function CustomersPage() {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchCustomers = async () => {
            try {
                const response = await getAllCustomers();

                if (response.success) {
                    setCustomers(response.data);
                }
            } catch (error) {
                console.error(error);
                alert("Failed to fetch customers");
            } finally {
                setLoading(false);
            }
        };

        fetchCustomers();
    }, []);

    if (loading) {
        return (
            <div className="text-center py-10">
                Loading Customers...
            </div>
        );
    }

    return (
        <div>

            {/* Header */}

            <div className="flex justify-between items-center mb-6">

                <h1 className="text-3xl font-bold">
                    Customers
                </h1>

                <Link
                    href="/dashboard/customers/add"
                    className="border-cyan-200/10 bg-[#081852] transition hover:bg-[#0D2A74] text-white px-4 py-2 rounded-lg "
                >
                    Add Customer
                </Link>

            </div>

            {/* Table */}

            <div className="bg-white rounded-lg shadow overflow-hidden">

                <table className="w-full">

                    <thead className="bg-slate-100">

                        <tr>
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3 text-left">Phone</th>
                            <th className="p-3 text-left">Email</th>
                            <th className="p-3 text-left">Store</th>
                            <th className="p-3 text-left">Total Purchase</th>
                            <th className="p-3 text-left">Loyalty Points</th>
                            <th className="p-3 text-left">Action</th>
                        </tr>

                    </thead>

                    <tbody>

                        {customers.map((customer) => (

                            <tr
                                key={customer._id}
                                className="border-b"
                            >

                                <td className="p-3">
                                    {customer.name}
                                </td>

                                <td className="p-3">
                                    {customer.phone}
                                </td>

                                <td className="p-3">
                                    {customer.email || "-"}
                                </td>

                                <td className="p-3">
                                    {customer.storeId?.storeName}
                                </td>

                                <td className="p-3">
                                    ₹{customer.totalPurchase}
                                </td>

                                <td className="p-3">
                                    {customer.loyaltyPoints}
                                </td>

                                <td className="p-3">

                                    <Link
                                        href={`/dashboard/customers/edit/${customer._id}`}
                                        className="border-cyan-200/10 bg-[#081852] transition hover:bg-[#0D2A74] text-white px-3 py-2 rounded-lg "
                                    >
                                        Edit
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