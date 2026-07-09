"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { getAllInventoryLogs } from "@/services/inventoryService";

export default function InventoryPage() {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchLogs = async () => {
            try {
                const response = await getAllInventoryLogs();

                if (response.success) {
                    setLogs(response.data);
                }
            } catch (error) {
                console.error(error);
                alert("Failed to fetch inventory logs");
            } finally {
                setLoading(false);
            }
        };

        fetchLogs();
    }, []);

    if (loading) {
        return (
            <div className="text-center py-10">
                Loading Inventory...
            </div>
        );
    }

    return (
        <div>

            <div className="flex justify-between items-center mb-6">

                <h1 className="text-3xl font-bold">
                    Inventory Logs
                </h1>

                <Link
                    href="/dashboard/inventory/adjust"
                    className="border-cyan-200/10 bg-[#081852] transition hover:bg-[#0D2A74] text-white px-4 py-2 rounded-lg"
                >
                    Adjust Stock
                </Link>

            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">

                <table className="w-full">

                    <thead className="bg-slate-100">

                        <tr>

                            <th className="p-3 text-left">
                                Product
                            </th>

                            <th className="p-3 text-left">
                                SKU
                            </th>

                            <th className="p-3 text-left">
                                Old Stock
                            </th>

                            <th className="p-3 text-left">
                                New Stock
                            </th>

                            <th className="p-3 text-left">
                                Reason
                            </th>

                            <th className="p-3 text-left">
                                Updated By
                            </th>

                            <th className="p-3 text-left">
                                Date
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {logs.map((log) => (

                            <tr
                                key={log._id}
                                className="border-b"
                            >

                                <td className="p-3">
                                    {log.productId?.name}
                                </td>

                                <td className="p-3">
                                    {log.productId?.sku}
                                </td>

                                <td className="p-3">
                                    {log.oldStock}
                                </td>

                                <td className="p-3">
                                    {log.newStock}
                                </td>

                                <td className="p-3">
                                    {log.reason}
                                </td>

                                <td className="p-3">
                                    {log.updatedBy?.name}
                                </td>

                                <td className="p-3">
                                    {new Date(
                                        log.createdAt
                                    ).toLocaleDateString()}
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}