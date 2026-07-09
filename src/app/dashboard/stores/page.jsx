"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getAllStores, updateStoreStatus } from "@/services/storeService";

export default function StoresPage() {
    const [stores, setStores] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStores = async () => {
            try {
                const response = await getAllStores();

                if (response.success) {
                    setStores(response.data);
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchStores();
    }, []);

    if (loading) {
        return <div>Loading Stores...</div>;
    }

    const handleStatus = async (store) => {
        try {
            const newStatus =
                store.status === "ACTIVE"
                    ? "INACTIVE"
                    : "ACTIVE";

            const response = await updateStoreStatus(
                store._id,
                newStatus
            );

            if (response.success) {
                alert("Status Updated");

                setStores((prev) =>
                    prev.map((item) =>
                        item._id === store._id
                            ? { ...item, status: newStatus }
                            : item
                    )
                );
            }
        } catch (error) {
            console.error(error);
            alert("Failed to update status");
        }
    };

    return (
        <div>
            <div className="flex justify-between mb-6">
                <h1 className="text-3xl font-bold">
                    Stores
                </h1>

                {/* <button className="bg-blue-600 text-white px-4 py-2 rounded"> */}
                <Link
                    href="/dashboard/stores/add"
                    className="border-cyan-200/10 bg-[#081852]  text-white px-4 py-2 rounded
                    transition hover:bg-[#0D2A74]"
                >
                    Add Store
                </Link>
                {/* </button> */}
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="w-full">
                    <thead className="bg-slate-100">
                        <tr>
                            <th className="p-3 text-left">Store Name</th>
                            <th className="p-3 text-left">Phone</th>
                            <th className="p-3 text-left">Email</th>
                            <th className="p-3 text-left">GST</th>
                            <th className="p-3 text-left">Status</th>
                            <th className="p-3 text-left">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {stores.map((store) => (
                            <tr key={store._id}>
                                <td className="p-3">
                                    {store.storeName}
                                </td>

                                <td className="p-3">
                                    {store.phone}
                                </td>

                                <td className="p-3">
                                    {store.email}
                                </td>

                                <td className="p-3">
                                    {store.gstNumber}
                                </td>

                                <td className="p-3">

                                    <button
                                        onClick={() => handleStatus(store)}
                                        className={`px-3 py-1 rounded-full text-sm font-medium ${store.status === "ACTIVE"
                                            ? "bg-green-100 text-green-700 hover:bg-green-300"
                                            : "bg-red-100 text-red-700 hover:bg-red-400"
                                            }`}
                                    >
                                        {store.status === "ACTIVE" ? "Active" : "Inactive"}
                                    </button>

                                </td>

                                <td className="p-3">
                                    <Link
                                        href={`/dashboard/stores/edit/${store._id}`}
                                        className="border-cyan-200/10 bg-[#081852] text-white px-3 py-3 rounded transition hover:bg-[#0D2A74]"
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