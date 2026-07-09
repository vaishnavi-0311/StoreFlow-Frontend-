"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

import { getStoreById, updateStore } from "@/services/storeService";

// edit store

export default function EditStorePage() {

    const router = useRouter();

    const params = useParams();

    const storeId = params.id;


    const [formData, setFormData] = useState({
        storeName: "",
        address: "",
        phone: "",
        email: "",
        gstNumber: "",
    });

    const [loading, setLoading] = useState(true);

    // handle input chnge 

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // fetch store  details

    useEffect(() => {
        const fetchStore = async () => {
            try {
                const response = await getStoreById(storeId);

                if (response.success) {
                    setFormData({
                        storeName: response.data.storeName,
                        address: response.data.address,
                        phone: response.data.phone,
                        email: response.data.email,
                        gstNumber: response.data.gstNumber,
                    });
                }
            } catch (error) {
                console.error(error);
                alert("Failed to load store.");
            } finally {
                setLoading(false);
            }
        };

        if (storeId) {
            fetchStore();
        }
    }, [storeId]);


    // handle submit update store

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await updateStore(
                storeId,
                formData
            );

            if (response.success) {
                alert("Store Updated Successfully");

                router.push("/dashboard/stores");
            }
        } catch (error) {
            console.error(error);

            alert(
                error.response?.data?.message ||
                "Failed to update store"
            );
        }
    };

    if (loading) {
        return (
            <div className="text-center py-10">
                Loading Store...
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold">
                    Edit Store
                </h1>

                <p className="text-gray-500 mt-2">
                    Update store information
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg shadow p-6"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div>
                        <label className="block mb-2 font-medium">
                            Store Name
                        </label>

                        <input
                            type="text"
                            name="storeName"
                            value={formData.storeName}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                            placeholder="Enter Store Name"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Phone Number
                        </label>

                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                            placeholder="Enter Phone Number"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                            placeholder="Enter Email"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            GST Number
                        </label>

                        <input
                            type="text"
                            name="gstNumber"
                            value={formData.gstNumber}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                            placeholder="Enter GST Number"
                            required
                        />
                    </div>

                </div>

                <div className="mt-6">
                    <label className="block mb-2 font-medium">
                        Address
                    </label>

                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        rows="4"
                        className="w-full border rounded-lg p-3"
                        placeholder="Enter Address"
                        required
                    />
                </div>

                <div className="flex gap-4 mt-8">

                    <button
                        type="submit"
                        className= "border-cyan-200/10 bg-[#081852] transition hover:bg-[#0D2A74] text-white px-6 py-3 rounded-lg "
                    >
                        Update Store
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            router.push("/dashboard/stores")
                        }
                        className="bg-gray-300 px-6 py-3 rounded-lg hover:bg-gray-400"
                    >
                        Cancel
                    </button>

                </div>
            </form>
        </div>
    );
}

