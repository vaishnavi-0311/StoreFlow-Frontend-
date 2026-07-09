"use client"

import { useState } from "react";

import Sidebar from "@/components/Sidebar/sidebar";
import Navbar from "@/components/Navbar/Navbar";

export default function DashboardLayout({ children }) {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex">

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* <div className="flex-1 ml-64 bg-slate-100"> */}
      {/* <div className="flex-1 bg-gray-100 min-h-screen"> */}
      <div className="ml-72 flex-1 min-h-screen bg-[#d2eaf0]">

        <Navbar onMenuClick={() => setSidebarOpen(true)}  />

        <main className="p-6">

          {children}

        </main>
      </div>
    </div>
  );
}