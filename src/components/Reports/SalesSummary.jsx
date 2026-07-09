"use client";

import { useEffect, useState } from "react";

import {
    ShoppingCart,
    DollarSign,
    TrendingUp,
    BarChart3,
} from "lucide-react";

import ReportCard from "./ReportCard";

import { getSalesSummary } from "@/services/reportService";

export default function SalesSummary() {

    const [summary, setSummary] = useState({
        totalSales: 0,
        totalRevenue: 0,
        averageSaleValue: 0,
    });

    useEffect(() => {

        const fetchSummary = async () => {

            try {

                const response =
                    await getSalesSummary();

                if (response.success) {

                    setSummary(response.data);

                }

            } catch (error) {

                console.error(error);

            }

        };
        fetchSummary();

    }, []);

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            <ReportCard
                title="Total Sales"
                value={summary.totalSales}
                subtitle="Completed Orders"
                gradient="bg-[#00171F]"
                icon={<ShoppingCart size={34} />}
            />

            <ReportCard
                title="Revenue"
                value={`₹${summary.totalRevenue.toLocaleString()}`}
                subtitle="Total Earnings"
                gradient="bg-[#081852]"
                icon={<DollarSign size={34} />}
            />

            <ReportCard
                title="Average Sale"
                value={`₹${Math.round(
                    summary.averageSaleValue
                ).toLocaleString()}`}
                subtitle="Per Invoice"
                gradient="bg-[#003459]"
                icon={<TrendingUp size={34} />}
            />

            <ReportCard
                title="Growth"
                value="+18%"
                subtitle="Compared to Last Month"
                gradient="bg-[#007ea7]"
                icon={<BarChart3 size={34} />}
            />

        </div>

    );

}