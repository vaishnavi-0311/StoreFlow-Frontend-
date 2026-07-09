"use client";

import Link from "next/link";
import { LayoutDashboard, LogIn, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-[#007EA7]/20 bg-[#00171F] backdrop-blur-xl">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bbg-gradient-to-br from-[#007EA7] to-[#00A8E8] font-bold text-xl text-white shadow-lg shadow-[#00A8E8]/70">
                        S
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#CAF0F8] ">
                            StoreFlow
                        </h2>

                        <p className="text-xs tracking-wide text-[#B7D4E1]">
                            Smart Store Management
                        </p>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-10">
                    <a
                        href="#features"
                        className="font-medium text-[#CAF0F8]  transition hover:text-white"
                    >
                        Features
                    </a>

                    <a
                        href="#about"
                        className="font-medium text-[#CAF0F8]  transition hover:text-white"
                    >
                        About
                    </a>
                </nav>

                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center gap-4">

                    <Link
                        href="/dashboard"
                        className="flex items-center gap-2 rounded-xl bg-[#0c2b37] px-5 py-3 text-[#CAF0F8] font-medium transition hover:bg-[#172320]"
                    >
                        <LayoutDashboard size={18} />
                        Dashboard
                    </Link>

                    <Link
                        href="/login"
                        className="flex items-center gap-2 rounded-xl  border-[#007EA7]/40  px-5 py-3 font-medium text-[#CAF0F8] transition hover:bg-[#172320]"
                    >
                        <LogIn size={18} />
                        Login
                    </Link>

                </div>

                {/* Mobile Menu */}
                <button
                    onClick={() => setOpen(!open)}
                    className="rounded-lg p-2 md:hidden"
                >
                    {open ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {open && (
                <div className="border-t border-[#007EA7]/20 bg-[#003459] md:hidden">
                    <div className="space-y-4 px-6 py-6">

                        <a
                            href="#features"
                            onClick={() => setOpen(false)}
                            className="block text-[#B7D4E1]"
                        >
                            Features
                        </a>

                        <a
                            href="#about"
                            onClick={() => setOpen(false)}
                            className="block text-[#B7D4E1]"
                        >
                            About
                        </a>

                        <Link
                            href="/dashboard"
                            onClick={() => setOpen(false)}
                            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#007EA7] to-[#00A8E8] py-3 text-white"
                        >
                            <LayoutDashboard size={18} />
                            Dashboard
                        </Link>

                        <Link
                            href="/login"
                            onClick={() => setOpen(false)}
                            className="flex items-center justify-center gap-2 rounded-xl border border-[#007EA7]/40   text-[#CAF0F8] py-3"
                        >
                            <LogIn size={18} />
                            Login
                        </Link>

                    </div>
                </div>
            )}
        </header>
    );
}