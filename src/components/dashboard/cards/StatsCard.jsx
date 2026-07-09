"use client";

import {
  IndianRupee,
  Package,
  Users,
  Truck,
  ShoppingCart,
} from "lucide-react";

const colors = [
  "bg-green-500",
  "bg-blue-500",
  "bg-purple-500",
  "bg-orange-500",
  "bg-cyan-500",
];

export default function StatsCards({ stats }) {
  const cards = [
    {
      title: "Revenue",
      value: `₹${stats?.totalRevenue || 0}`,
      icon: IndianRupee,
    },
    {
      title: "Products",
      value: stats?.totalProducts || 0,
      icon: Package,
    },
    {
      title: "Customers",
      value: stats?.totalCustomers || 0,
      icon: Users,
    },
    {
      title: "Suppliers",
      value: stats?.totalSuppliers || 0,
      icon: Truck,
    },
    {
      title: "Sales",
      value: stats?.totalSales || 0,
      icon: ShoppingCart,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm border p-6 hover:shadow-lg transition"
          >
            <div className="flex justify-between items-center">

              <div>
                <p className="text-gray-500 text-sm">
                  {card.title}
                </p>

                <h2 className="text-3xl font-bold mt-3">
                  {card.value}
                </h2>
              </div>

              <div
                className={`${colors[index]} p-3 rounded-xl text-white`}
              >
                <Icon size={28} />
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
}