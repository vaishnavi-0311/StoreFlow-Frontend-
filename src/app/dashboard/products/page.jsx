"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
    getAllProducts,
    updateProductStock,
} from "@/services/productService";

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const response = await getAllProducts();

                if (response.success) {
                    setProducts(response.data);
                }
            } catch (error) {
                console.error(error);
                alert("Failed to fetch products");
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);;

    const handleStock = async (product) => {
        const stock = prompt(
            "Enter new stock quantity",
            product.stock
        );

        if (stock === null) return;

        try {
            const response = await updateProductStock(
                product._id,
                Number(stock)
            );

            if (response.success) {
                alert("Stock Updated");

                setProducts((prev) =>
                    prev.map((item) =>
                        item._id === product._id
                            ? {
                                ...item,
                                stock: Number(stock),
                            }
                            : item
                    )
                );
            }
        } catch (error) {
            console.error(error);
            alert("Failed to update stock");
        }
    };

    if (loading) {
        return (
            <div className="text-center py-10">
                Loading Products...
            </div>
        );
    }

    return (
        <div>

            {/* Header */}

            <div className="flex justify-between items-center mb-6">

                <h1 className="text-3xl font-bold">
                    Products
                </h1>

                <Link
                    href="/dashboard/products/add"
                    className="border-cyan-200/10 bg-[#081852] transition hover:bg-[#0D2A74] text-white px-4 py-2 rounded-lg"
                >
                    Add Product
                </Link>

            </div>

            {/* Table */}

            <div className="bg-white rounded-lg shadow overflow-hidden">

                <table className="w-full">

                    <thead className="bg-slate-100">

                        <tr>

                            <th className="p-3 text-left">
                                Product
                            </th>

                            <th className="p-3 text-left">
                                Category
                            </th>

                            <th className="p-3 text-left">
                                Store
                            </th>

                            <th className="p-3 text-left">
                                Purchase
                            </th>

                            <th className="p-3 text-left">
                                Selling
                            </th>

                            <th className="p-3 text-left">
                                Stock
                            </th>

                            <th className="p-3 text-left">
                                SKU
                            </th>

                            <th className="p-3 text-left">
                                Action
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {products.map((product) => (

                            <tr
                                key={product._id}
                                className="border-b"
                            >

                                <td className="p-3">
                                    {product.name}
                                </td>

                                <td className="p-3">
                                    {product.categoryId?.name}
                                </td>

                                <td className="p-3">
                                    {product.storeId?.storeName}
                                </td>

                                <td className="p-3">
                                    ₹{product.purchasePrice}
                                </td>

                                <td className="p-3">
                                    ₹{product.sellingPrice}
                                </td>

                                <td className="p-3">
                                    <button
                                        onClick={() =>
                                            handleStock(product)
                                        }
                                        className="bg-green-100 text-green-700 px-3 py-1 rounded-full"
                                    >
                                        {product.stock}
                                    </button>
                                </td>

                                <td className="p-3">
                                    {product.sku}
                                </td>

                                <td className="p-3">

                                    <Link
                                        href={`/dashboard/products/edit/${product._id}`}
                                        className="border-cyan-200/10 bg-[#081852] transition hover:bg-[#0D2A74] text-white px-3 py-2 rounded-lg"
                                    >
                                        Edit
                                    </Link>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}