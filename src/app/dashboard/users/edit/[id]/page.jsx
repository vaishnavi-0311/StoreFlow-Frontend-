"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

import { getUserById, updateUser } from "@/services/userService";

import { getAllStores } from "@/services/storeService";

export default function EditUserPage() {

    const router = useRouter();
    const params = useParams();

    const userId = params.id;

    const [stores, setStores] = useState([]);

    const [loading, setLoading] = useState(true);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        storeId: "",
    });

    useEffect(() => {
        const fetchUser = async () => {
            try {

                const response = await getUserById(userId);

                if (response.success) {

                    setFormData({
                        name: response.data.name,
                        email: response.data.email,
                        storeId: response.data.storeId?._id || "",
                    });

                }

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);

            }
        };

        if (userId) {
            fetchUser();
        }
    }, [userId]);


    useEffect(() => {
        const fetchStore = async () => {

            try {

                const response = await getAllStores();

                if (response.success) {
                    setStores(response.data);
                }

            } catch (error) {

                console.error(error);

            }
        }
        fetchStore();
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

            const response = await updateUser(
                userId,
                formData
            );

            if (response.success) {

                alert("User Updated Successfully");

                router.push("/dashboard/users");

            }

        } catch (error) {

            console.error(error);

            alert(
                error.response?.data?.message ||
                "Failed to update user"
            );

        }

    };

    if (loading) {
        return (
            <div className="text-center py-10">
                Loading User...
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">

            <div className="mb-8">

                <h1 className="text-3xl font-bold">
                    Edit User
                </h1>

                <p className="text-gray-500 mt-2">
                    Update user information
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
                        Update User
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