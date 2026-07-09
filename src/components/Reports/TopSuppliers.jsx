"use client";

import { useEffect, useState } from "react";
import {
    Truck,
    Crown,
    Trophy,
    Medal,
} from "lucide-react";

import { getTopSuppliers } from "@/services/reportService";

export default function TopSuppliers() {

    const [suppliers, setSuppliers] = useState([]);

    useEffect(() => {

        const fetchSuppliers = async () => {

            try {

                const response =
                    await getTopSuppliers();

                if (response.success) {
                    setSuppliers(response.data);
                }

            } catch (error) {

                console.error(error);

            }

        };

        fetchSuppliers();
    }, []);

    const getBadge = (index) => {

        if (index === 0)
            return (
                <Crown
                    size={22}
                    className="text-yellow-500"
                />
            );

        if (index === 1)
            return (
                <Trophy
                    size={20}
                    className="text-gray-400"
                />
            );

        if (index === 2)
            return (
                <Medal
                    size={20}
                    className="text-orange-500"
                />
            );

        return (
            <span className="font-bold text-gray-400">
                #{index + 1}
            </span>
        );

    };

    return (

        <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">

            <div className="flex justify-between items-center mb-6">

                <div>

                    <h2 className="text-xl font-bold text-slate-800">
                        🚚 Top Suppliers
                    </h2>

                    <p className="text-sm text-gray-500">
                        Highest purchase value suppliers
                    </p>

                </div>

            </div>

            <div className="space-y-4">

                {suppliers.map((supplier, index) => (

                    <div
                        key={index}
                        className="flex justify-between items-center bg-slate-50 hover:bg-indigo-50 rounded-2xl p-4 transition"
                    >

                        <div className="flex items-center gap-4">

                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white">

                                <Truck size={20} />

                            </div>

                            <div>

                                <h3 className="font-semibold">

                                    {supplier.name}

                                </h3>

                                <p className="text-sm text-gray-500">

                                    {supplier.phone}

                                </p>

                            </div>

                        </div>

                        <div className="flex items-center gap-5">

                            <div className="text-right">

                                <h3 className="font-bold text-indigo-700">

                                    ₹
                                    {supplier.totalPurchaseAmount.toLocaleString()}

                                </h3>

                                <p className="text-xs text-gray-500">

                                    {supplier.totalOrders} Orders

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