"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { getAllStores } from "@/services/storeService";
import { getAllCategories } from "@/services/categoryService";
import { createProduct } from "@/services/productService";

export default function AddProductPage() {

    const router = useRouter();

    const [stores, setStores] = useState([]);
    const [categories, setCategories] = useState([]);

    const [formData, setFormData] = useState({
        storeId: "",
        categoryId: "",
        name: "",
        purchasePrice: "",
        sellingPrice: "",
        stock: "",
        lowStockLimit: "",
    });

    useEffect(() => {

        const fetchStores = async () => {

            try {

                const response = await getAllStores();

                if (response.success) {
                    setStores(response.data);
                }

            } catch (error) {

                console.error(error);

            }

        };

        fetchStores();

    }, []);

    useEffect(() => {
        const fetchCategories = async () => {

            try {

                const response = await getAllCategories();

                if (response.success) {
                    setCategories(response.data);
                }

            } catch (error) {

                console.error(error);

            }

        };

        fetchCategories();
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

            const response = await createProduct(formData);

            if (response.success) {

                alert("Product Created Successfully");

                router.push("/dashboard/products");

            }

        } catch (error) {

            console.error(error);

            alert(
                error.response?.data?.message ||
                "Failed to create product"
            );

        }

    };

    return (

        <div className="max-w-5xl mx-auto">

            <div className="mb-8">

                <h1 className="text-3xl font-bold">
                    Add Product
                </h1>

                <p className="text-gray-500 mt-2">
                    Create a new product
                </p>

            </div>

            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg shadow p-6"
            >

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Store */}

                    <div>

                        <label className="block mb-2 font-medium">
                            Store
                        </label>

                        <select
                            name="storeId"
                            value={formData.storeId}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                            required
                        >

                            <option value="">
                                Select Store
                            </option>

                            {stores.map((store) => (

                                <option
                                    key={store._id}
                                    value={store._id}
                                >
                                    {store.storeName}
                                </option>

                            ))}

                        </select>

                    </div>

                    {/* Category */}

                    <div>

                        <label className="block mb-2 font-medium">
                            Category
                        </label>

                        <select
                            name="categoryId"
                            value={formData.categoryId}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                            required
                        >

                            <option value="">
                                Select Category
                            </option>

                            {categories.map((category) => (

                                <option
                                    key={category._id}
                                    value={category._id}
                                >
                                    {category.name}
                                </option>

                            ))}

                        </select>

                    </div>

                    {/* Product Name */}

                    <div>

                        <label className="block mb-2 font-medium">
                            Product Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                            required
                        />

                    </div>

                    {/* Purchase Price */}

                    <div>

                        <label className="block mb-2 font-medium">
                            Purchase Price
                        </label>

                        <input
                            type="number"
                            name="purchasePrice"
                            value={formData.purchasePrice}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                            required
                        />

                    </div>

                    {/* Selling Price */}

                    <div>

                        <label className="block mb-2 font-medium">
                            Selling Price
                        </label>

                        <input
                            type="number"
                            name="sellingPrice"
                            value={formData.sellingPrice}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                            required
                        />

                    </div>

                    {/* Stock */}

                    <div>

                        <label className="block mb-2 font-medium">
                            Stock
                        </label>

                        <input
                            type="number"
                            name="stock"
                            value={formData.stock}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                            required
                        />

                    </div>

                    {/* Low Stock */}

                    <div>

                        <label className="block mb-2 font-medium">
                            Low Stock Limit
                        </label>

                        <input
                            type="number"
                            name="lowStockLimit"
                            value={formData.lowStockLimit}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                            required
                        />

                    </div>

                </div>

                <div className="flex gap-4 mt-8">

                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                    >
                        Create Product
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            router.push("/dashboard/products")
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