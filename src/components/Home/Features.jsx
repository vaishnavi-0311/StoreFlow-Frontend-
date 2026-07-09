import {
    Boxes,
    ShoppingCart,
    Users,
    BarChart3,
    ClipboardList,
    ShieldCheck,
} from "lucide-react";

const features = [
    {
        icon: Boxes,
        title: "Inventory Management",
        description: "Track stock levels, manage products, and receive low-stock alerts.",
    },
    {
        icon: ShoppingCart,
        title: "Sales Tracking",
        description: "Monitor orders, invoices, and daily sales with real-time updates.",
    },
    {
        icon: Users,
        title: "Customer Management",
        description: "Store customer information and purchase history in one place.",
    },
    {
        icon: ClipboardList,
        title: "Reports",
        description: "Generate detailed reports for sales, inventory, and performance.",
    },
    {
        icon: BarChart3,
        title: "Analytics",
        description: "Visualize trends with interactive charts and business insights.",
    },
    {
        icon: ShieldCheck,
        title: "Secure Access",
        description: "Role-based authentication for Admin, Store Manager, and Staff.",
    },
];

export default function Features() {
    return (
        <section
            id="features"
            className="bg-[#d2eaf0] py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-10 ">

                <div className="text-center ">

                    <p className="text-sm font-semibold uppercase  text-[#007EA7]">
                        Features
                    </p>

                    <h2 className="mt-3 text-4xl font-bold text-[#00171F]">
                        Everything You Need
                        <span className="block text-[#007EA7]">
                            To Run Your Store
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                        Manage products, sales, inventory, customers, and reports from a
                        single, easy-to-use dashboard.
                    </p>

                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={index}
                                className="group rounded-2xl border border-[#007EA7]/10
                                     bg-[#F4FBFD] p-8 shadow-sm transition-all duration-300 hover:-translate-y-2  hover:border-[#00A8E8]
                                        hover:shadow-2xl" >
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#007EA7]  to-[#00A8E8] text-white transition-transform duration-300 group-hover:scale-110">
                                    <Icon size={26} />
                                </div>

                                <h3 className="mt-6 text-xl font-semibold text-[#00171F]">
                                    {feature.title}
                                </h3>

                                <p className="mt-3 leading-8 text-slate-600">
                                    {feature.description}
                                </p>

                                {/* Bottom Accent */}

                                <div className="mt-8 h-1 w-0 rounded-full bg-gradient-to-r from-[#007EA7] to-[#00A8E8] transition-all duration-500 group-hover:w-full"></div>

                            </div>
                );
                    })}

            </div>

        </div>
        </section >
    );
}