"use client";

import {
    CalendarDays,
    Download,
    FileSpreadsheet,
} from "lucide-react";
import {
  exportPDF,
  exportExcel,
} from "@/services/reportService";


export default function ReportHeader() {

    const handleExportPDF = async () => {
    try {

        const blob = await exportPDF();

        const url = window.URL.createObjectURL(blob);

        const link = document.createElement("a");

        link.href = url;
        link.download = "Sales_Report.pdf";

        link.click();

        window.URL.revokeObjectURL(url);

    } catch (error) {

        console.error(error);
        alert("Failed to export PDF");

    }
};

const handleExportExcel = async () => {
    try {

        const blob = await exportExcel();

        const url = window.URL.createObjectURL(blob);

        const link = document.createElement("a");

        link.href = url;
        link.download = "Sales_Report.xlsx";

        link.click();

        window.URL.revokeObjectURL(url);

    } catch (error) {

        console.error(error);
        alert("Failed to export Excel");

    }
};
    return (
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl shadow-xl p-8 text-white">

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">

                {/* Left */}

                <div>

                    <h1 className="text-4xl font-bold">
                        Reports & Analytics
                    </h1>

                    <p className="text-slate-300 mt-2 text-lg">
                        Monitor your sales, revenue and business performance.
                    </p>

                </div>

                {/* Right */}

                <div className="flex flex-wrap gap-4">

                    {/* Filter */}

                    <div className="flex items-center bg-slate-700 rounded-xl px-4 py-3">

                        <CalendarDays
                            size={18}
                            className="mr-2"
                        />

                        <select
                            className="bg-transparent outline-none text-white cursor-pointer"
                        >
                            <option className="text-black">
                                Today
                            </option>

                            <option className="text-black">
                                This Week
                            </option>

                            <option className="text-black">
                                This Month
                            </option>

                            <option className="text-black">
                                This Year
                            </option>
                        </select>

                    </div>

                    {/* PDF */}

                    <button
                        onClick={handleExportPDF}
                        className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-5 py-3 rounded-xl transition"
                    >

                        <Download size={18} />

                        Export PDF

                    </button>

                    {/* Excel */}

                    <button
                        onClick={handleExportExcel}
                        className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 px-5 py-3 rounded-xl transition"
                    >

                        <FileSpreadsheet size={18} />

                        Export Excel

                    </button>

                </div>

            </div>

        </div>
    );
}