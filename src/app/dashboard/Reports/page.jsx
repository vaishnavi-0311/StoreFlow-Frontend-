"use client";

import ReportHeader from "@/components/Reports/ReportHeader";
import SalesSummary from "@/components/Reports/SalesSummary";
import SalesChart from "@/components/Reports/SalesChart";
import PurchaseChart from "@/components/Reports/PurchaseChart";
import BestCustomers from "@/components/Reports/BestCustomers";
import TopSuppliers from "@/components/Reports/TopSuppliers";
import BusinessInsights from "@/components/Reports/BusinessInsights";


export default function ReportsPage() {
    return (
        <div className="space-y-8">

            {/* Header */}

            <ReportHeader />

            {/* Summary Cards */}

            <SalesSummary />

            <BusinessInsights />

            {/* Charts */}

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

                <SalesChart />

                <PurchaseChart />

            </div>

            {/* Tables */}

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

                <BestCustomers />

                <TopSuppliers />

            </div>

        </div>
    );
}