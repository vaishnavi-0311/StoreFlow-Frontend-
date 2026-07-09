"use client";

import { useEffect, useState } from "react";

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

import { getSalesReport } from "@/services/reportService";

export default function PurchaseChart() {

    const [report, setReport] = useState({
        totalSales: 0,
        totalRevenue: 0,
    });

    useEffect(() => {

        const fetchWeeklyReport = async () => {

            try {

                const response =
                    await getSalesReport("weekly");

                if (response.success) {
                    setReport(response.data);
                }

            } catch (error) {

                console.error(error);

            }

        };

        fetchWeeklyReport();
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

            <div className="mb-6">

                <h2 className="text-xl font-bold text-slate-800">
                    Weekly Business Report
                </h2>

                <p className="text-gray-500 text-sm">
                    Weekly sales summary
                </p>

            </div>

            <ResponsiveContainer
                width="100%"
                height={300}
            >

                <BarChart data={data}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="name" />

                    <YAxis />

                    <Tooltip />

                    <Bar
                        dataKey="value"
                        radius={[8, 8, 0, 0]}
                        fill="#10B981"
                    />

                </BarChart>

            </ResponsiveContainer>

        </div>

    );

}