"use client";

import {
    TrendingUp,
    Users,
    Truck,
    AlertTriangle,
    DollarSign,
} from "lucide-react";

export default function BusinessInsights() {

    const insights = [
        {
            icon: <TrendingUp size={22} />,
            title: "Revenue Growth",
            value: "+18%",
            color: "bg-green-100 text-green-700",
        },
        {
            icon: <Users size={22} />,
            title: "Best Customer",
            value: "Top Customer",
            color: "bg-blue-100 text-blue-700",
        },
        {
            icon: <Truck size={22} />,
            title: "Top Supplier",
            value: "Highest Orders",
            color: "bg-purple-100 text-purple-700",
        },
        {
            icon: <AlertTriangle size={22} />,
            title: "Low Stock",
            value: "Check Inventory",
            color: "bg-red-100 text-red-700",
        },
        {
            icon: <DollarSign size={22} />,
            title: "Business Health",
            value: "Excellent",
            color: "bg-emerald-100 text-emerald-700",
        },
    ];

    return (
        <div className="bg-white rounded-3xl shadow-lg p-6">

            <div className="mb-6">

                <h2 className="text-2xl font-bold text-slate-800">
                    📊 Business Insights
                </h2>

                <p className="text-gray-500">
                    Quick overview of your business performance
                </p>

            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-5">

                {insights.map((item, index) => (

                    <div
                        key={index}
                        className="border rounded-2xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >

                        <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.color}`}
                        >
                            {item.icon}
                        </div>

                        <h3 className="font-semibold text-slate-700">
                            {item.title}
                        </h3>

                        <p className="text-lg font-bold mt-2">
                            {item.value}
                        </p>

                    </div>

                ))}

            </div>

        </div>
    );
}