"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { createSubAdmin } from "@/services/userService";
import { getAllStores } from "@/services/storeService";

export default function AddSubAdminPage() {
    const router = useRouter();

    const [stores, setStores] = useState([]);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        storeId: "",
    });

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
            const response = await createSubAdmin(formData);

            if (response.success) {
                alert("Sub Admin created successfully");
                router.push("/dashboard/users");
            }
        } catch (error) {
            console.error(error);

            alert(
                error.response?.data?.message ||
                "Failed to create Sub Admin"
            );
        }
    };

    return (
        <div className="max-w-4xl mx-auto">

            <div className="mb-8">
                <h1 className="text-3xl font-bold">
                    Add Sub Admin
                </h1>

                <p className="text-gray-500 mt-2">
                    Create a new Sub Admin
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg shadow p-6"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div>
                        <label className="block mb-2 font-medium">
                            Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                            placeholder="Enter Name"
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
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                            placeholder="Enter Password"
                            required
                        />
                    </div>

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

                </div>

                <div className="flex gap-4 mt-8">

                    <button
                        type="submit"
                        className="border-cyan-200/10 bg-[#081852] transition hover:bg-[#0D2A74] text-white px-6 py-3 rounded-lg"
                    >
                        Create Sub Admin
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            router.push("/dashboard/users")
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