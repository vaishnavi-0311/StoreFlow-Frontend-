"use client";

import { useState } from "react";
import { createStore } from "@/services/storeService";
import { useRouter } from "next/navigation";


export default function AddStorePage() {

    const router = useRouter();

    const [formData, setFormData] = useState({
        storeName: "",
        address: "",
        phone: "",
        email: "",
        gstNumber: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const response = await createStore(formData);

            if (response.success) {
                alert("Store Created Successfully");

                router.push("/dashboard/stores");
            }
        } catch (error) {
            console.error(error);

            alert(
                error?.response?.data?.message ||
                "Failed to create store"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">
                Add Store
            </h1>

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
                <div className="grid grid-cols-2 gap-4">

                    <input
                        placeholder="Store Name"
                        value={formData.storeName}
                        onChange={handleChange}
                        className="border p-3 rounded"
                    />

                    <input
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border p-3 rounded"
                    />

                    <input
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border p-3 rounded"
                    />

                    <input
                        placeholder="GST Number"
                        value={formData.gstNumber}
                        onChange={handleChange}
                        className="border p-3 rounded"
                    />

                </div>

                <textarea
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="border p-3 rounded w-full mt-4"
                />

                <button
                    className="border-cyan-200/10 bg-[#081852] transition hover:bg-[#0D2A74] text-white px-5 py-2 rounded mt-4"
                >
                    Create Store
                </button>
            </form>
        </div>
    );
}