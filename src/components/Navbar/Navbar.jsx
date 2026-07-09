
"use client";
import { useUser } from "@/hooks/useUser";
import {
  Bell,
  Search,
  Settings,
  Sun,
} from "lucide-react";

export default function Navbar() {
  // const [user, setUser] = useState(null);

  const user = useUser();

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";

  return (
    <header className="sticky top-0 z-40 border-b border-[#007EA7]/20 bg-[#00171F] backdrop-blur-xl">

      <div className="flex items-center justify-between px-8 py-6">

        {/* LEFT */}

        <div>

          <div className="flex items-center gap-2">

            <Sun
              size={22}
              className="text-yellow-400"
            />

            <h1 className="text-3xl font-bold text-[#CAF0F8]">
              {greeting},
              {" "}
              {user?.name}
            </h1>

          </div>
        </div>

        {/* RIGHT */}

        <div className="flex items-center gap-5">

          {/* Search */}

          <div className="hidden items-center gap-3 rounded-xl border border-cyan-200/10 bg-[#081852] px-4 py-3 lg:flex">

            <Search
              size={18}
              className="text-[#90E0EF]"
            />

            <input
              type="text"
              placeholder="Search..."
              className="w-52 bg-transparent text-[#CAF0F8] outline-none placeholder:text-[#90E0EF]/60"
            />

          </div>

          {/* Notification */}

          <button className="rounded-xl border border-cyan-200/10 bg-[#081852] p-3 transition hover:bg-[#0D2A74]">

            <Bell
              size={20}
              className="text-[#CAF0F8]"
            />

          </button>

          {/* Settings */}

          <button className="rounded-xl border border-cyan-200/10 bg-[#081852] p-3 transition hover:bg-[#0D2A74]">

            <Settings
              size={20}
              className="text-[#CAF0F8]"
            />

          </button>

          {/* Profile */}

          <div className="flex items-center gap-3 rounded-xl border border-[#007EA7]/20 bg-[#00171F] px-4 py-2">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0077B6] font-bold text-white">

              {user?.name?.charAt(0).toUpperCase() || "U"}

            </div>


          </div>

        </div>

      </div>

    </header>
  );
}