import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-24 bg-[#F8FAFC]">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">

                <div className="overflow-hidden rounded-3xl bg-[#171717] px-8 py-16 text-center text-white shadow-2xl lg:px-16">

                    <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
                        Ready to Get Started?
                    </span>

                    <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
                        Take Control of Your Store Today
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
                        Manage inventory, sales, customers, and reports with one modern
                        dashboard built for growing businesses.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-4">

                        <Link
                            href="/dashboard"
                            className="flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-[#171717] transition hover:bg-gray-200"
                        >
                            Dashboard
                            <ArrowRight size={18} />
                        </Link>

                        <Link
                            href="/login"
                            className="rounded-xl border border-white/20 px-7 py-4 font-semibold transition hover:bg-white/10"
                        >
                            Login
                        </Link>

                    </div>

                </div>

            </div>
        </section>
    );
}