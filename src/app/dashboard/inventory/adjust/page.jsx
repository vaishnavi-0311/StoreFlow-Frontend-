"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { getAllProducts } from "@/services/productService";
import { adjustStock } from "@/services/inventoryService";

export default function AdjustStockPage() {

    const router = useRouter();

    const [products, setProducts] = useState([]);

    const [formData, setFormData] = useState({
        productId: "",
        newStock: "",
        reason: "ADJUSTMENT",
    });

    useEffect(() => {

        const fetchProducts = async () => {

            try {

                const response = await getAllProducts();

                if (response.success) {
                    setProducts(response.data);
                }

            } catch (error) {

                console.error(error);

                alert("Failed to load products");

            }

        };

        fetchProducts();
    }, []);


    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await adjustStock({
                productId: formData.productId,
                newStock: Number(formData.newStock),
                reason: formData.reason,
            });

            if (response.success) {

                alert("Stock Updated Successfully");

                router.push("/dashboard/inventory");

            }

        } catch (error) {

            console.error(error);

            alert(
                error.response?.data?.message ||
                "Failed to update stock"
            );

        }

    };

    return (

        <div className="max-w-4xl mx-auto">

            <div className="mb-8">

                <h1 className="text-3xl font-bold">
                    Adjust Stock
                </h1>

                <p className="text-gray-500 mt-2">
                    Update product inventory
                </p>

            </div>

            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg shadow p-6"
            >

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Product */}

                    <div>

                        <label className="block mb-2 font-medium">
                            Product
                        </label>

                        <select
                            name="productId"
                            value={formData.productId}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                            required
                        >

                            <option value="">
                                Select Product
                            </option>

                            {products.map((product) => (

                                <option
                                    key={product._id}
                                    value={product._id}
                                >
                                    {product.name}
                                </option>

                            ))}

                        </select>

                    </div>

                    {/* New Stock */}

                    <div>

                        <label className="block mb-2 font-medium">
                            New Stock
                        </label>

                        <input
                            type="number"
                            name="newStock"
                            value={formData.newStock}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                            required
                        />

                    </div>

                    {/* Reason */}

                    <div>

                        <label className="block mb-2 font-medium">
                            Reason
                        </label>

                        <select
                            name="reason"
                            value={formData.reason}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                        >

                            <option value="PURCHASE">
                                PURCHASE
                            </option>

                            <option value="SALE">
                                SALE
                            </option>

                            <option value="ADJUSTMENT">
                                ADJUSTMENT
                            </option>

                            <option value="DAMAGED">
                                DAMAGED
                            </option>

                            <option value="TRANSFER">
                                TRANSFER
                            </option>

                        </select>

                    </div>

                </div>

                <div className="flex gap-4 mt-8">

                    <button
                        type="submit"
                        className="border-cyan-200/10 bg-[#081852] transition hover:bg-[#0D2A74] text-white px-6 py-3 rounded-lg"
                    >
                        Update Stock
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            router.push("/dashboard/inventory")
                        }
                        className="bg-gray-300 px-6 py-3 rounded-lg hover:bg-gray-400"
                    >
                        Cancel
                    </button>

                </div>

            </form>

        </div>

    );

}