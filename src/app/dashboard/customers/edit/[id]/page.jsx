"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

import {
    getCustomerById,
    updateCustomer,
} from "@/services/customerService";

import { getAllStores } from "@/services/storeService";

export default function EditCustomerPage() {

    const router = useRouter();
    const params = useParams();

    const customerId = params.id;

    const [loading, setLoading] = useState(true);
    const [stores, setStores] = useState([]);

    const [formData, setFormData] = useState({
        storeId: "",
        name: "",
        phone: "",
        email: "",
        address: "",
    });

    // Fetch Customer

    useEffect(() => {

        const fetchCustomer = async () => {

            try {

                const response = await getCustomerById(customerId);

                if (response.success) {

                    setFormData({
                        storeId: response.data.storeId?._id || "",
                        name: response.data.name,
                        phone: response.data.phone,
                        email: response.data.email,
                        address: response.data.address,
                    });

                }

            } catch (error) {

                console.error(error);
                alert("Failed to load customer");

            } finally {

                setLoading(false);

            }

        };

        if (customerId) {
            fetchCustomer();
        }

    }, [customerId]);

    // Fetch Stores

    useEffect(() => {

        const fetchStores = async () => {

            try {

                const response = await getAllStores();

                if (response.success) {
                    setStores(response.data);
                }

            } catch (error) {

                console.error(error);

            }

        };

        fetchStores();

    }, []);

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await updateCustomer(
                customerId,
                formData
            );

            if (response.success) {

                alert("Customer Updated Successfully");

                router.push("/dashboard/customers");

            }

        } catch (error) {

            console.error(error);

            alert(
                error.response?.data?.message ||
                "Failed to update customer"
            );

        }

    };

    if (loading) {

        return (
            <div className="text-center py-10">
                Loading Customer...
            </div>
        );

    }

    return (

        <div className="max-w-4xl mx-auto">

            <div className="mb-8">

                <h1 className="text-3xl font-bold">
                    Edit Customer
                </h1>

                <p className="text-gray-500 mt-2">
                    Update customer information
                </p>

            </div>

            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg shadow p-6"
            >

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Store */}

                    <div>

                        <label className="block mb-2 font-medium">
                            Store
                        </label>

                        <select
                            name="storeId"
                            value={formData.storeId}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                            required
                        >

                            <option value="">
                                Select Store
                            </option>

                            {stores.map((store) => (

                                <option
                                    key={store._id}
                                    value={store._id}
                                >
                                    {store.storeName}
                                </option>

                            ))}

                        </select>

                    </div>

                    {/* Name */}

                    <div>

                        <label className="block mb-2 font-medium">
                            Customer Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                            required
                        />

                    </div>

                    {/* Phone */}

                    <div>

                        <label className="block mb-2 font-medium">
                            Phone
                        </label>

                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                            required
                        />

                    </div>

                    {/* Email */}

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
                        />

                    </div>

                </div>

                {/* Address */}

                <div className="mt-6">

                    <label className="block mb-2 font-medium">
                        Address
                    </label>

                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        rows={4}
                        className="w-full border rounded-lg p-3"
                    />

                </div>

                {/* Buttons */}

                <div className="flex gap-4 mt-8">

                    <button
                        type="submit"
                        className="border-cyan-200/10 bg-[#081852] transition hover:bg-[#0D2A74] text-white px-6 py-3 rounded-lg"
                    >
                        Update Customer
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            router.push("/dashboard/customers")
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