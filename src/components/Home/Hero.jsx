import Link from "next/link";
import { ArrowRight, Package, BarChart3, Users } from "lucide-react";
import DashboardPreview from "@/components/Home/DashboardPreview";
export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#00171F]">
            {/* Background Blur */}
            <div className="absolute -left-40  -top-40 h-[500] w-[500] rounded-full  bg-[#007EA7]/20 blur-[140px] opacity-70"></div>
            <div className="absolute -right-20 top-40 h-72 w-72 rounded-full bg-[#00A8E8]/20 blur-[140px]"></div>

            <div className="mx-auto grid min-h-[85vh] max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">

                {/* LEFT CONTENT  */}
                <div className="max-w-3xl">

                    <span className="rounded-full border-[#007EA7]/40 bg-[#003459] px-4 py-2 text-sm font-medium  text-[#CAF0F8]">
                        Smart Store Management
                    </span>

                    <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white  lg:text-7xl">
                        Manage Every Store
                        <span className="block bg-gradient-to-r from-[#00A8E8] to-[#007EA7] bg-clip-text text-transparent">
                            From One Dashboard
                        </span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-[#B7D4E1]">
                        Simplify inventory, sales, customers, suppliers, and reports with one modern dashboard built for growing businesses.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link
                            href="/dashboard"
                            className="flex items-center gap-2 rounded-xl bg-[#00A8E8] px-6 py-4 font-semibold text-white transition hover:bg-[#007EA7]"
                        >
                            Dashboard
                            <ArrowRight size={18} />
                        </Link>

                        <Link
                            href="/login"
                            className="rounded-xl border  border-[#007EA7] text-[#CAF0F8]  px-6 py-4 font-semibold transition hover:bg-[#003459]"
                        >
                            Login
                        </Link>
                    </div>

                    {/* Feature Chips */}
                    <div className="mt-12 flex flex-wrap gap-4">

                        <div className="flex items-center gap-2 rounded-xl bg-[#003459]/60 text-white px-5 py-3 backdrop-blur">
                            <Package className="text-[#00A8E8]" size={20} />
                            <span className="font-medium">Inventory</span>
                        </div>

                        <div className="flex items-center gap-2 rounded-xl border-[#007EA7]/20 text-white bg-[#003459]/60 px-5 py-3 shadow-sm backdrop-blur">
                            <BarChart3 className="text-green-600" size={20} />
                            <span className="font-medium">Analytics</span>
                        </div>

                        <div className="flex items-center gap-2 rounded-xl  border-[#007EA7]/20 text-white bg-[#003459]/60 px-5 py-3 shadow-sm">
                            <Users className="text-orange-600" size={20} />
                            <span className="font-medium">Customers</span>
                        </div>

                    </div>

                </div>

                {/* RIGHT CONTENT  */}

                <div className="relative">

                    <div className="absolute -inset-5 rounded-3xl bg-gradient-to-r from-[#007EA7] to-[#00A8E8] opacity-30 blur-3xl" />

                            <div className="relative rounded-3xl border border-[#007EA7]/30 bg-[#003459]/40 p-4 backdrop-blur-xl shadow-2xl">

                                    <DashboardPreview />
                            </div>
                    </div>
                </div>
        </section >
    );
}