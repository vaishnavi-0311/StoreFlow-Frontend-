import Sidebar from "../Sidebar/sidebar";
import Navbar from "../Navbar/Navbar";

export default function DashboardLayout({
  children,
}) {
  return (
    <div className="flex">
      <Sidebar />

      {/* <div className="flex-1 bg-gray-100 min-h-screen"> */}
      {/* <div className="flex-1 ml-64 bg-slate-100"> */}
      <div className="ml-72 flex-1 min-h-screen bg-gray-100">

        <Navbar />

        <div className="p-6">

          {children}

        </div>

      </div>

    </div>
  );
}