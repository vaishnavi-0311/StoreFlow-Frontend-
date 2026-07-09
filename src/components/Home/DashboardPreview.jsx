export default function DashboardPreview() {
    return (
        <div className="relative">

            {/* Browser Window */}
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl">

                {/* Browser Header */}
                <div className="flex items-center gap-2 border-b bg-gray-50 px-5 py-4">
                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                    <div className="h-3 w-3 rounded-full bg-green-400"></div>

                    <div className="ml-5 rounded-lg bg-white px-4 py-1 text-xs text-gray-500 shadow-sm">
                        storeflow.app/dashboard
                    </div>
                </div>

                <div className="flex">

                    {/* Sidebar */}
                    <aside className="w-52 bg-[#171717] p-5 text-white">

                        <h3 className="mb-8 text-lg font-bold">
                            StoreFlow
                        </h3>

                        <div className="space-y-3">

                            <div className="rounded-lg bg-[#172320] px-4 py-3">
                                Dashboard
                            </div>

                            <div className="px-4 py-3 text-gray-400">
                                Products
                            </div>

                            <div className="px-4 py-3 text-gray-400">
                                Inventory
                            </div>

                            <div className="px-4 py-3 text-gray-400">
                                Sales
                            </div>

                            <div className="px-4 py-3 text-gray-400">
                                Customers
                            </div>

                        </div>

                    </aside>

                    {/* Main */}
                    <div className="flex-1 bg-gray-50 p-6">

                        {/* Cards */}

                        <div className="grid grid-cols-2 gap-4">

                            <div className="rounded-xl bg-white p-5 shadow-sm">
                                <p className="text-sm text-gray-500">
                                    Revenue
                                </p>

                                <h2 className="mt-2 text-2xl font-bold">
                                    ₹1,24,500
                                </h2>
                            </div>

                            <div className="rounded-xl bg-white p-5 shadow-sm">
                                <p className="text-sm text-gray-500">
                                    Orders
                                </p>

                                <h2 className="mt-2 text-2xl font-bold">
                                    520
                                </h2>
                            </div>

                        </div>

                        {/* Chart */}

                        <div className="mt-5 rounded-xl bg-white p-6 shadow-sm">

                            <h3 className="mb-5 font-semibold">
                                Sales Overview
                            </h3>

                            <div className="flex h-40 items-end gap-3">

                                <div className="h-16 w-6 rounded bg-blue-300"></div>
                                <div className="h-28 w-6 rounded bg-blue-400"></div>
                                <div className="h-20 w-6 rounded bg-blue-500"></div>
                                <div className="h-36 w-6 rounded bg-blue-600"></div>
                                <div className="h-24 w-6 rounded bg-blue-500"></div>
                                <div className="h-32 w-6 rounded bg-blue-600"></div>

                            </div>

                        </div>

                        {/* Recent Orders */}

                        <div className="mt-5 rounded-xl bg-white p-5 shadow-sm">

                            <h3 className="mb-4 font-semibold">
                                Recent Orders
                            </h3>

                            <div className="space-y-3">

                                <div className="flex justify-between">
                                    <span>Wireless Mouse</span>
                                    <span className="font-medium text-green-600">
                                        Delivered
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Keyboard</span>
                                    <span className="font-medium text-orange-500">
                                        Pending
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Headphones</span>
                                    <span className="font-medium text-blue-600">
                                        Shipped
                                    </span>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}