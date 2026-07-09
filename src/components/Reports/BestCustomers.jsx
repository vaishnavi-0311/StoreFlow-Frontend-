"use client";

import { useEffect, useState } from "react";
import { Crown, Medal, Trophy } from "lucide-react";

import { getBestCustomers } from "@/services/reportService";

export default function BestCustomers() {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const fetchCustomers = async () => {

            try {

                const response =
                    await getBestCustomers();

                if (response.success) {
                    setCustomers(response.data);
                }

            } catch (error) {

                console.error(error);

            }

        };

        fetchCustomers();
    }, []);


    const getBadge = (index) => {

        if (index === 0)
            return (
                <Crown
                    className="text-yellow-500"
                    size={22}
                />
            );

        if (index === 1)
            return (
                <Trophy
                    className="text-gray-500"
                    size={20}
                />
            );

        if (index === 2)
            return (
                <Medal
                    className="text-orange-500"
                    size={20}
                />
            );

        return (
            <span className="text-gray-400 font-bold">
                #{index + 1}
            </span>
        );
    };

    return (

        <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition">

            <div className="flex justify-between items-center mb-6">

                <div>

                    <h2 className="text-xl font-bold">
                        🏆 Best Customers
                    </h2>

                    <p className="text-gray-500 text-sm">
                        Top customers based on total purchases
                    </p>

                </div>

            </div>

            <div className="space-y-4">

                {customers.map((customer, index) => (

                    <div
                        key={customer._id}
                        className="flex items-center justify-between bg-slate-50 rounded-2xl p-4 hover:bg-blue-50 transition"
                    >

                        <div className="flex items-center gap-4">

                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">

                                {customer.name
                                    ?.charAt(0)
                                    .toUpperCase()}

                            </div>

                            <div>

                                <h3 className="font-semibold text-slate-800">
                                    {customer.name}
                                </h3>

                                <p className="text-sm text-gray-500">
                                    {customer.email || "No Email"}
                                </p>

                            </div>

                        </div>

                        <div className="flex items-center gap-5">

                            <div className="text-right">

                                <h3 className="font-bold text-blue-700">

                                    ₹
                                    {customer.totalPurchase.toLocaleString()}

                                </h3>

                                <p className="text-xs text-gray-500">

                                    {customer.loyaltyPoints} Points

                                </p>

                            </div>

                            {getBadge(index)}

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}