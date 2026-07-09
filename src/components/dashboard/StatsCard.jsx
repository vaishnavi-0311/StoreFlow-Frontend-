"use client";

export default function StatsCard({ dashboard }) {
    const stats = [
        {
            title: "Total Sales",
            value: dashboard?.totalSales || 0,
            color: "bg-green-500",
        },
        {
            title: "Products",
            value: dashboard?.totalProducts || 0,
            color: "bg-blue-500",
        },
        {
            title: "Customers",
            value: dashboard?.totalCustomers || 0,
            color: "bg-purple-500",
        },
        {
            title: "Revenue",
            value: `₹${dashboard?.totalRevenue || 0}`,
            color: "bg-orange-500",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {stats.map((item, index) => (
                <div
                    key={index}
                    className={`${item.color} rounded-xl p-6 shadow text-white`}
                >
                    <p>{item.title}</p>

                    <h1 className="text-3xl font-bold mt-3">
                        {item.value}
                    </h1>
                </div>
            ))}
        </div>
    );
}