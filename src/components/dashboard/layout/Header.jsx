"use client";

import { CalendarDays } from "lucide-react";

export default function DashboardHeader() {
  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") || "null")
      : null;

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">

      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard Overview
        </h1>

        <p className="mt-2 text-gray-500">
          Welcome back,
          <span className="font-semibold ml-1">
            {user?.name || "Admin"}
          </span>
        </p>
      </div>

      <div className="flex items-center gap-2 bg-white shadow rounded-xl px-4 py-2 mt-4 md:mt-0">

        <CalendarDays size={18} />

        <span>{today}</span>

      </div>

    </div>
  );
}