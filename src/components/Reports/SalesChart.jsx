"use client";

import { useEffect, useState } from "react";

import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

import { getSalesReport } from "@/services/reportService";

export default function SalesChart() {

    const [report, setReport] = useState({
        totalSales: 0,
        totalRevenue: 0,
    });

    useEffect(() => {

        const fetchSalesReport = async () => {

            try {

                const response =
                    await getSalesReport("monthly");

                if (response.success) {

                    setReport(response.data);

                }

            } catch (error) {

                console.error(error);

            }

        };

        fetchSalesReport();

    }, []);

    const data = [
        {
            name: "Sales",
            value: report.totalSales,
        },
        {
            name: "Revenue",
            value: report.totalRevenue,
        },
    ];

    return (

        <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition">

            <div className="flex justify-between items-center mb-6">

                <div>

                    <h2 className="text-xl font-bold text-slate-800">
                        Monthly Sales Overview
                    </h2>

                    <p className="text-gray-500 text-sm">
                        Sales performance for this month
                    </p>

                </div>

            </div>

            <ResponsiveContainer
                width="100%"
                height={300}
            >

                <AreaChart data={data}>

                    <defs>

                        <linearGradient
                            id="sales"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >

                            <stop
                                offset="5%"
                                stopColor="#3B82F6"
                                stopOpacity={0.8}
                            />

                            <stop
                                offset="95%"
                                stopColor="#3B82F6"
                                stopOpacity={0}
                            />

                        </linearGradient>

                    </defs>

                    <CartesianGrid
                        strokeDasharray="3 3"
                    />

                    <XAxis dataKey="name" />

                    <YAxis />

                    <Tooltip />

                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#2563EB"
                        fill="url(#sales)"
                    />

                </AreaChart>

            </ResponsiveContainer>

        </div>

    );

}