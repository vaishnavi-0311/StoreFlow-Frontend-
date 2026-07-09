"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { getAllSuppliers } from "@/services/supplierService";

export default function SuppliersPage() {
    const [suppliers, setSuppliers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchSuppliers = async () => {
            try {
                const response = await getAllSuppliers();

                if (response.success) {
                    setSuppliers(response.data);
                }
            } catch (error) {
                console.error(error);
                alert("Failed to fetch suppliers");
            } finally {
                setLoading(false);
            }
        };

        fetchSuppliers();
    }, []);

    if (loading) {
        return (
            <div className="text-center py-10">
                Loading Suppliers...
            </div>
        );
    }

    return (
        <div>

            {/* Header */}

            <div className="flex justify-between items-center mb-6">

                <h1 className="text-3xl font-bold">
                    Suppliers
                </h1>

                <Link
                    href="/dashboard/suppliers/add"
                    className="border-cyan-200/10 bg-[#081852] transition hover:bg-[#0D2A74] text-white px-4 py-2 rounded-lg"
                >
                    Add Supplier
                </Link>

            </div>

            {/* Table */}

            <div className="bg-white rounded-lg shadow overflow-hidden">

                <table className="w-full">

                    <thead className="bg-slate-100">

                        <tr>

                            <th className="p-3 text-left">
                                Name
                            </th>

                            <th className="p-3 text-left">
                                Phone
                            </th>

                            <th className="p-3 text-left">
                                Email
                            </th>

                            <th className="p-3 text-left">
                                Address
                            </th>

                            <th className="p-3 text-left">
                                Store
                            </th>

                            <th className="p-3 text-left">
                                Created By
                            </th>

                            <th className="p-3 text-left">
                                Actions
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {suppliers.map((supplier) => (

                            <tr
                                key={supplier._id}
                                className="border-b"
                            >

                                <td className="p-3">
                                    {supplier.name}
                                </td>

                                <td className="p-3">
                                    {supplier.phone}
                                </td>

                                <td className="p-3">
                                    {supplier.email || "-"}
                                </td>

                                <td className="p-3">
                                    {supplier.address || "-"}
                                </td>

                                <td className="p-3">
                                    {supplier.storeId?.storeName}
                                </td>

                                <td className="p-3">
                                    {supplier.createdBy?.name || "-"}
                                </td>

                                <td className="p-3">

                                    <Link
                                        href={`/dashboard/suppliers/edit/${supplier._id}`}
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