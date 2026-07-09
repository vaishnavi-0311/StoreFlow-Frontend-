"use client";

import Link from "next/link";
import { Mail, ArrowLeft, Send, ShieldCheck } from "lucide-react";

export default function ForgotPasswordForm() {
  return (
    <div className="w-full max-w-7xl overflow-hidden rounded-3xl border border-cyan-500/30 bg-[#03141D]/90 shadow-[0_0_50px_rgba(0,168,232,0.15)]">

      {/* Responsive Grid */}
      <div className="grid lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="relative hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-[#00171F] via-[#01273D] to-[#003459]">

          {/* Logo */}

          <div>
            <h2 className="text-4xl font-bold text-white">
              Store<span className="text-[#00A8E8]">Flow</span>
            </h2>

            <p className="mt-1 text-gray-400">
              Smart Store Management
            </p>
          </div>

          {/* Text */}

          <div className="space-y-6">

            <h1 className="text-6xl font-bold leading-tight text-white">
              Reset Your
              <br />
              <span className="text-[#00A8E8]">
                Password
              </span>
            </h1>

            <div className="w-20 h-1 rounded-full bg-[#00A8E8]" />

            <p className="max-w-md text-lg leading-8 text-gray-300">
              No worries! Enter your registered email address and we will
              send you a secure password reset link.
            </p>
          </div>

          {/* Illustration */}

          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 blur-3xl bg-cyan-500/20 rounded-full" />

              <div className="relative flex h-72 w-72 items-center justify-center rounded-full bg-gradient-to-br from-[#00A8E8]/20 to-[#007EA7]/20">

                <div className="flex h-40 w-40 items-center justify-center rounded-3xl bg-white shadow-2xl">

                  <Mail
                    size={80}
                    className="text-[#007EA7]"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="flex items-center justify-center p-6 sm:p-10 md:p-14">

          <div className="w-full max-w-md">

            {/* Mobile Logo */}

            <div className="mb-8 text-center lg:hidden">

              <h2 className="text-3xl font-bold text-white">
                Store
                <span className="text-[#00A8E8]">
                  Flow
                </span>
              </h2>

              <p className="mt-2 text-gray-400">
                Smart Store Management
              </p>

            </div>

            {/* Icon */}

            <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-cyan-500/40 bg-[#003459]">

              <Mail
                size={42}
                className="text-[#00A8E8]"
              />

            </div>

            <h1 className="text-center text-4xl font-bold text-white">
              Forgot Password?
            </h1>

            <p className="mt-4 text-center text-gray-400">
              Enter your email below and we will send you a reset link.
            </p>

            {/* FORM */}

            <form className="mt-10 space-y-6">

              <div>

                <label className="mb-2 block text-sm font-semibold text-white">
                  Email Address
                </label>

                <div className="flex items-center rounded-xl border border-cyan-600/40 bg-[#0B1E2A] px-4 transition hover:border-cyan-400">

                  <Mail className="text-cyan-400" />

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="h-14 w-full bg-transparent px-4 text-white outline-none placeholder:text-gray-500"
                  />

                </div>

              </div>

              <button
                className="flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#007EA7] to-[#00A8E8] font-semibold text-white transition duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/30"
              >
                <Send size={18} />
                Send Reset Link
              </button>

              <div className="flex items-center gap-4">

                <div className="h-px flex-1 bg-gray-700" />

                <span className="text-gray-400">
                  OR
                </span>

                <div className="h-px flex-1 bg-gray-700" />

              </div>

              <Link
                href="/login"
                className="flex h-14 items-center justify-center gap-2 rounded-xl border border-cyan-500/40 text-lg font-medium text-[#00A8E8] transition hover:bg-[#00A8E8]/10"
              >
                <ArrowLeft size={20} />
                Back to Login
              </Link>

            </form>

            {/* Footer */}

            <div className="mt-10 flex gap-3 rounded-xl border border-cyan-700/20 bg-[#062130] p-4">

              <ShieldCheck className="mt-1 text-cyan-400" />

              <p className="text-sm leading-6 text-gray-400">
                For your security, the reset link expires in
                <span className="font-semibold text-white">
                  {" "}15 minutes.
                </span>

                <br />

                Check your spam folder if you dont receive the email.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}