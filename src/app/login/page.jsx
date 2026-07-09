"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import {  FcShop } from "react-icons/fc";
import API from "@/services/api";


// import img from "next/image";
export default function LoginPage() {

    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {

            const res = await API.post("/auth/login", {
                email,
                password,
            });

            console.log(res.data);

            localStorage.setItem(
                "token",
                res.data.token
            );

            localStorage.setItem(
                "user",
                JSON.stringify(res.data.user)
            );

            alert("Login Successful");

            router.push("/dashboard");

        } catch (error) {

            console.error(error);

            alert(
                error?.response?.data?.message ||
                "Login Failed"
            );
        }
    };
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#0B1326] text-white">
            {/* Background Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/20 blur-[120px] animate-pulse" />

                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-400/20 blur-[100px] animate-pulse" />

                <div className="absolute top-1/2 left-1/2 w-[30%] h-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[80px]" />
            </div>

            <div className="relative z-10 min-h-screen flex flex-col lg:flex-row">
                {/* LEFT SECTION */}
                <div className="hidden lg:flex lg:w-1/2 flex-col justify-center px-12 xl:px-24">
                    <div className="max-w-xl">
                        <h1 className="text-6xl font-extrabold leading-tight">
                            Smart{" "}
                            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                                Inventory
                            </span>
                            <br />
                            Tracking
                        </h1>

                        <p className="mt-8 text-xl leading-9 text-slate-400">
                            Manage inventory, sales, suppliers, and analytics
                            from a single dashboard. Precision control for
                            modern high-performance store operations.
                        </p>

                        {/* IMAGE */}
                        <div className="mt-14">
                            <img
                                src="/store.jpg"
                                alt="Store Dashboard"
                                className="w-full max-w-[450px] object-contain drop-shadow-[0_0_50px_rgba(59,130,246,0.4)]"
                            />
                        </div>
                    </div>
                </div>

                {/* RIGHT SECTION */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12">
                    <div
                        className="
            w-full
            max-w-md
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-8
            md:p-10
            shadow-2xl
          "
                    >
                        {/* LOGO */}
                        <div className="flex justify-center mb-6">
                            <div className="h-14 w-14 rounded-xl bg-blue-500/20 flex items-center justify-center text-2xl">
                                <FcShop className="text-5xl text-blue-600 mx-auto mb-3" />
                            </div>
                        </div>

                        <h2 className="text-center text-4xl font-bold">
                            Welcome Back
                        </h2>

                        <p className="text-center text-slate-400 mt-3">
                            Sign in to manage your store
                        </p>

                        {/* FORM */}
                        <form onSubmit={handleLogin} className="mt-10 space-y-6">
                            <div>
                                <label className="block text-xs uppercase tracking-widest text-slate-400 mb-2">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="name@company.com"
                                    className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-4
                    outline-none
                    text-white
                    placeholder:text-slate-500
                    focus:ring-2
                    focus:ring-blue-500/40
                    focus:border-blue-500
                  "
                                />
                            </div>

                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-xs uppercase tracking-widest text-slate-400">
                                        Password
                                    </label>

                                    <button
                                        type="button"
                                        className="text-blue-400 text-sm"
                                    >
                                        <Link href="/forgotPassword">Forgot password?</Link>
                                        
                                    </button>
                                </div>

                                <div className="relative">
                                    <input
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="
                      w-full
                      rounded-xl
                      border
                      border-white/10
                      bg-white/5
                      px-4
                      py-4
                      outline-none
                      text-white
                      placeholder:text-slate-500
                      focus:ring-2
                      focus:ring-blue-500/40
                      focus:border-blue-500
                    "
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        className="absolute right-4 top-1/2 -translate-y-1/2"
                                    >
                                        {showPassword
                                            ? <FaEyeSlash />
                                            : <FaEye />}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4"
                                />

                                <span className="text-slate-300">
                                    Remember me
                                </span>
                            </div>

                            <button
                                type="submit"
                                className="
                  w-full
                  rounded-xl
                  bg-blue-500
                  py-4
                  font-semibold
                  hover:bg-blue-600
                  transition
                  shadow-[0_0_25px_rgba(59,130,246,0.35)]
                "
                            >
                                Sign In to StoreFlow →
                            </button>
                        </form>

                        {/* DIVIDER */}
                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/10"></div>
                            </div>

                            {/* <div className="relative flex justify-center">
                                <span className="bg-[#0f172a] px-4 text-xs tracking-[4px] text-slate-500">
                                    OR CONTINUE WITH
                                </span>
                            </div> */}
                        </div>

                        {/* SOCIAL */}
                        {/* <div className="grid grid-cols-2 gap-4">
                            <button className="w-full flex items-center justify-center gap-2 border p-3 rounded-xl  border-white/10 py-3 hover:bg-white/5 transition">
                                <FcGoogle />
                                Google
                            </button>

                            <button className="flex items-center justify-center gap-2 rounded-xl border border-white/10 py-3 hover:bg-white/5 transition">
                                < FaGithub />
                                GitHub
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <footer className="absolute bottom-5 w-full text-center text-[10px] tracking-[4px] text-slate-500 uppercase">
                © 2026 StoreFlow. Modern Inventory Control.
            </footer>
        </main>
    );
}