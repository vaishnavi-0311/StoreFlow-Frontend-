import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-[#007EA7]/20 bg-[#00171F]">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 text-center text-gray-500 md:flex-row lg:px-10">

                <div>
                    <h3 className="text-lg font-bold text-white">
                        StoreFlow
                    </h3>

                    <p className="mt-1 text-sm text-[#B7D4E1]">
                       Smart Store Management
                    </p>
                </div>

                <div className="flex gap-8 text-sm">
                    <Link href="/" className="font-medium text-[#CAF0F8] transition hover:text-[#00A8E8]" >Home</Link>
                    <a href="#features" className="font-medium text-[#CAF0F8] transition hover:text-[#00A8E8]">Features</a>
                    <Link href="/dashboard" className="font-medium text-[#CAF0F8] transition hover:text-[#00A8E8]">Dashboard</Link>
                    <Link href="/login" className="font-medium text-[#CAF0F8] transition hover:text-[#00A8E8]">Login</Link>
                </div>

                <p className="text-sm">
                    © 2026 StoreFlow. All rights reserved.
                </p>

            </div>
        </footer>
    );
}