"use client";
import { useEffect, useState } from "react";
import {
  FaBoxes,
  FaUsers,
  FaTruck,
  FaShoppingCart,
  FaRupeeSign,
} from "react-icons/fa";

import { useUser } from "@/hooks/useUser";

import StatsCard from "@/components/Cards/StatsCard";

import { getDashboardStats } from "@/services/dashboardService";

export default function DashboardPage() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalCustomers: 0,
    totalSuppliers: 0,
    totalSales: 0,
    totalRevenue: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const response = await getDashboardStats();
        console.log(response);
        if (response.success) {
          setStats(response.data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadDashboard();
  }, []);

  const user = useUser();

  if (loading) {
    return (
      <div className="text-center py-10">
        Loading Dashboard...
      </div>);
  } return (
    <div  >
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>
        <p className="text-gray-500 mt-2">
          Welcome,
          <span className="font-semibold ml-1">
            {user?.name}
          </span>
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 ">
        <StatsCard title="Products"
          value={stats.totalProducts}
          icon={<FaBoxes />} />

        <StatsCard title="Customers"
          value={stats.totalCustomers}
          icon={<FaUsers />} />

        <StatsCard title="Suppliers"
          value={stats.totalSuppliers}
          icon={<FaTruck />} />

        <StatsCard title="Sales"
          value={stats.totalSales}
          icon={<FaShoppingCart />} />

        <StatsCard title="Revenue"
          value={`₹${stats.totalRevenue}`}
          icon={<FaRupeeSign />}
        />
      </div>
    </div>
  );
}




// "use client";

// import { useEffect, useState } from "react";
// import Sidebar from "@/components/Sidebar/sidebar";
// import Navbar from "@/components/Navbar/Navbar";

// import {
//   FaBoxes,
//   FaUsers,
//   FaTruck,
//   FaShoppingCart,
//   FaRupeeSign,
// } from "react-icons/fa";

// // import DashboardHeader from "@/components/dashboard/layout/Header";
// import StatsCard from "@/components/Cards/StatsCard";
// import { getDashboardStats } from "@/services/dashboardService";

// export default function DashboardPage() {
//   const [stats, setStats] = useState({
//     totalProducts: 0,
//     totalCustomers: 0,
//     totalSuppliers: 0,
//     totalSales: 0,
//     totalRevenue: 0,
//   });

//   const [loading, setLoading] = useState(true);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const loadDashboard = async () => {
//       try {
//         const response = await getDashboardStats();

//         console.log(response);
//         if (response.success) {
//           setStats(response.data);
//         }
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadDashboard();
//   }, []);

//   useEffect(() => {
//     typeof window !== "undefined"
//       ? JSON.parse(localStorage.getItem("user") || "null")
//       : null;
//   }, []);

//   if (loading) {
//     return (
//       <div className="text-center py-10">
//         Loading Dashboard...
//       </div>
//     );
//   }



//   return (
//     <div>
//       <div className="mb-8">
//         {/* <h1 className="text-3xl font-bold">
//           Dashboard
//         </h1> */}

//         <p className="text-gray-500 mt-2">
//           Welcome <span className="font-semibold ml-1">
//             {user?.name}
//           </span>
//         </p>
//       </div>

//       <StatsCard stats={stats} />

//       <div className="grid grid-cols-4 gap-6">

//         <div className="bg-white p-6 rounded-lg shadow">
//           <h2 className="text-gray-500">Stores</h2>
//           <p className="text-3xl font-bold">0</p>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow">
//           <h2 className="text-gray-500">Products</h2>
//           <p className="text-3xl font-bold">0</p>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow">
//           <h2 className="text-gray-500">Customers</h2>
//           <p className="text-3xl font-bold">0</p>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow">
//           <h2 className="text-gray-500">Sales</h2>
//           <p className="text-3xl font-bold">0</p>
//         </div>

//       </div>


//       {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
//         <StatsCard
//           title="Products"
//           value={stats.totalProducts}
//           icon={<FaBoxes />}
//         />

//         <StatsCard
//           title="Customers"
//           value={stats.totalCustomers}
//           icon={<FaUsers />}
//         />

//         <StatsCard
//           title="Suppliers"
//           value={stats.totalSuppliers}
//           icon={<FaTruck />}
//         />

//         <StatsCard
//           title="Sales"
//           value={stats.totalSales}
//           icon={<FaShoppingCart />}
//         />

//         <StatsCard
//           title="Revenue"
//           value={`₹${stats.totalRevenue}`}
//           icon={<FaRupeeSign />}
//         />
//       </div> */}

//       {/* <div className="p-8 bg-slate-100 min-h-screen">

//         <DashboardHeader />

//         <StatsCard stats={stats} />

//       </div> */}
//     </div>
//   );
// }
