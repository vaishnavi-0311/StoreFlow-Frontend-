"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { getAllUsers, updateUserStatus} from "@/services/userService";

export default function UsersPage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await getAllUsers();

                if (response.success) {
                    setUsers(response.data);
                }
            } catch (error) {
                console.error(error);
                alert("Failed to fetch users");
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    const handleStatus = async (user) => {
        try {
            const response = await updateUserStatus(
                user._id,
                !user.isActive
            );

            if (response.success) {
                alert("User status updated");

                setUsers((prev) =>
                    prev.map((item) =>
                        item._id === user._id
                            ? {
                                ...item,
                                isActive: !item.isActive,
                            }
                            : item
                    )
                );
            }
        } catch (error) {
            console.error(error);
            alert("Failed to update user status");
        }
    };

    if (loading) {
        return (
            <div className="text-center py-10">
                Loading Users...
            </div>
        );
    }

    return (
        <div>

            {/* Header */}

            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">
                    Users
                </h1>

                <div className="flex gap-3">

                    <Link
                        href="/dashboard/users/add/sub-admin"
                        className="border-cyan-200/10 bg-[#081852] transition hover:bg-[#0D2A74] text-white px-4 py-2 rounded"
                    >
                        Add Sub Admin
                    </Link>

                    <Link
                        href="/dashboard/users/add/staff"
                        className="bg-slate-700 text-white px-4 py-2 rounded hover:bg-slate-500"
                    >
                        Add Staff
                    </Link>

                </div>
            </div>

            {/* Table */}

            <div className="bg-white rounded-lg shadow overflow-hidden">

                <table className="w-full">

                    <thead className="bg-slate-100">
                        <tr>
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3 text-left">Email</th>
                            <th className="p-3 text-left">Role</th>
                            <th className="p-3 text-left">Store</th>
                            <th className="p-3 text-left">Status</th>
                            <th className="p-3 text-left">Actions</th>
                        </tr>
                    </thead>

                    <tbody>

                        {users.map((user) => (

                            <tr
                                key={user._id}
                                className="border-b"
                            >

                                <td className="p-3">
                                    {user.name}
                                </td>

                                <td className="p-3">
                                    {user.email}
                                </td>

                                <td className="p-3">
                                    {user.role}
                                </td>

                                <td className="p-3">
                                    {user.storeId?.storeName || "-"}
                                </td>

                                <td className="p-3">
                                    <button
                                        onClick={() => handleStatus(user)}
                                        className={`px-3 py-1 rounded-full text-sm font-medium ${user.isActive
                                            ? "bg-green-100 text-green-700"
                                            : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {user.isActive
                                            ? "Active"
                                            : "Inactive"}
                                    </button>
                                </td>

                                <td className="p-3">

                                    <Link
                                        href={`/dashboard/users/edit/${user._id}`}
                                        className="bborder-cyan-200/10 bg-[#081852] transition hover:bg-[#0D2A74] text-white px-3 py-2 rounded "
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