
"use client";

import { useUser } from "@/hooks/useUser";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  LayoutDashboard,
  Store,
  Users,
  Boxes,
  Package,
  ClipboardList,
  ShoppingCart,
  UserRound,
  BarChart3,
  Truck,
  LogOut,
  ChevronRight,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Stores",
    href: "/dashboard/stores",
    icon: Store,
  },
  {
    name: "Users",
    href: "/dashboard/users",
    icon: Users,
  },
  {
    name: "Categories",
    href: "/dashboard/categories",
    icon: Boxes,
  },
  {
    name: "Products",
    href: "/dashboard/products",
    icon: Package,
  },
  {
    name: "Purchases",
    href: "/dashboard/purchases",
    icon: ShoppingCart,
  },
  {
    name: "Inventory",
    href: "/dashboard/inventory",
    icon: ClipboardList,
  },
  {
    name: "Suppliers",
    href: "/dashboard/suppliers",
    icon: Truck,
  },
  {
    name: "Sales",
    href: "/dashboard/sales",
    icon: ShoppingCart,
  },
  {
    name: "Customers",
    href: "/dashboard/customers",
    icon: UserRound,
  },
  {
    name: "Reports",
    href: "/dashboard/Reports",
    icon: BarChart3,
  },
];



export default function Sidebar() {
  const pathname = usePathname();

  const user = useUser();
  const router = useRouter();

  const handleLogout = () => {
    // Remove stored data
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Redirect to home page
    router.push("/");
  };

  return (

      <aside className="fixed left-0 top-0  z-40 flex h-screen w-72 flex-col border-r border-[#007EA7]/20 bg-[#00171F] shadow-2xl]">

        {/* Logo */}

        <div className="border-b border-[#007EA7]/20 p-8">

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-b  bg-gradient-to-br from-[#00171F] to-[#00A8E8] font-bold text-white shadow-lg shadow-[#00A8E8]/70">
              S
            </div>

            <div>
              <h1 className="text-2xl font-bold text-[#CAF0F8]">
                <Link href={"/Home"}>
                StoreFlow
                </Link>
              </h1>

              <p className="text-sm text-[#90E0EF]">
               Smart Store Management
              </p>

            </div>

          </div>

          {/* Close button, mobile only */}
          {/* <button className="md:hidden text-[#90E0EF]" onClick={onClose}>
            <X size={22} />
          </button> */}

        </div>

      {/* </div> */}

      {/* Menu */}

      <nav className="flex-1 space-y-2 overflow-y-auto px-4 py-6"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >

        {menuItems.map((item) => {

          const Icon = item.icon;

          const active =
            pathname === item.href ||
            pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`group flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-300

              ${active
                  ? "bg-gradient-to-r from-[#007EA7] to-[#00A8E8] text-white shadow-lg"
                  : "text-[#90E0EF] hover:bg-[#00B4D8]/10"
                }`}
            >
              <div className="flex items-center gap-3">

                <Icon size={20} />

                <span className="font-medium">
                  {item.name}
                </span>

              </div>

              <ChevronRight
                size={16}
                className={`transition ${active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
              />

            </Link>
          );
        })}

      </nav>

      {/* Bottom */}

      <div className="border-t border-cyan-200/10 p-5">

        <div className="mb-5 flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#007EA7] to-[#00A8E8] text-lg font-bold text-white">
            {user?.name?.charAt(0).toUpperCase() || "U"}
          </div>

          <div>

            <h3 className="font-semibold text-[#CAF0F8]">
              {user?.name || "User"}
            </h3>

            <p className="text-sm text-[#90E0EF] capitalize">
              {user?.role}
            </p>

          </div>

        </div>

        <button onClick={handleLogout} className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-500/30 py-3 font-medium text-red-400 transition hover:bg-red-500/10">
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </aside >
  );
}