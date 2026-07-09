"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { getAllCategories } from "@/services/categoryService";

export default function CategoriesPage() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchCategories = async () => {
            try {
                const response = await getAllCategories();

                if (response.success) {
                    setCategories(response.data);
                }
            } catch (error) {
                console.error(error);
                alert("Failed to fetch categories");
            } finally {
                setLoading(false);
            }
        };
        fetchCategories();
    }, []);

    if (loading) {
        return (
            <div className="text-center py-10">
                Loading Categories...
            </div>
        );
    }


    return (
        <div>

            {/* Header */}

            <div className="flex justify-between items-center mb-6">

                <h1 className="text-3xl font-bold">
                    Categories
                </h1>

                <Link
                    href="/dashboard/categories/add"
                    className="border-cyan-200/10 bg-[#081852] transition hover:bg-[#0D2A74] text-white px-4 py-2 rounded-lg"
                >
                    Add Category
                </Link>

            </div>

            {/* Table */}

            <div className="bg-white rounded-lg shadow overflow-hidden">

                <table className="w-full">

                    <thead className="bg-slate-100">

                        <tr>

                            <th className="p-3 text-left">
                                Category
                            </th>

                            <th className="p-3 text-left">
                                Description
                            </th>

                            <th className="p-3 text-left">
                                Store
                            </th>

                            <th className="p-3 text-left">
                                Created By
                            </th>

                            <th className="p-3 text-left">
                                Action
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {categories.map((category) => (

                            <tr
                                key={category._id}
                                className="border-b"
                            >

                                <td className="p-3">
                                    {category.name}
                                </td>

                                <td className="p-3">
                                    {category.description || "-"}
                                </td>

                                <td className="p-3">
                                    {category.storeId?.storeName}
                                </td>

                                <td className="p-3">
                                    {category.createdBy?.name}
                                </td>

                                <td className="p-3">

                                    <Link
                                        href={`/dashboard/categories/edit/${category._id}`}
                                        className="border-cyan-200/10 bg-[#081852] transition hover:bg-[#0D2A74] text-white px-3 py-2 rounded-lg"
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