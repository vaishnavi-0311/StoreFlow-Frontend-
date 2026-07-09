"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { getAllStores } from "@/services/storeService";
import { getAllCustomers } from "@/services/customerService";
import { getAllProducts } from "@/services/productService";
import { createSale } from "@/services/saleService";

export default function AddSalePage() {

    const router = useRouter();

    const [stores, setStores] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [products, setProducts] = useState([]);

    const [sale, setSale] = useState({
        customerId: "",
        storeId: "",
    });

    const [item, setItem] = useState({
        productId: "",
        qty: "",
        price: "",
    });

    const [items, setItems] = useState([]);

    useEffect(() => {

        const fetchData = async () => {

            try {

                const storeRes = await getAllStores();
                const customerRes = await getAllCustomers();
                const productRes = await getAllProducts();

                if (storeRes.success) setStores(storeRes.data);
                if (customerRes.success) setCustomers(customerRes.data);
                if (productRes.success) setProducts(productRes.data);

            } catch (error) {

                console.error(error);

            }

        };

        fetchData();
    }, []);

    const handleSaleChange = (e) => {
        setSale({
            ...sale,
            [e.target.name]: e.target.value,
        });
    };

    const handleItemChange = (e) => {
        setItem({
            ...item,
            [e.target.name]: e.target.value,
        });
    };

    const addItem = () => {

        if (!item.productId || !item.qty || !item.price) {
            return alert("Please fill all item fields");
        }

        setItems([
            ...items,
            {
                productId: item.productId,
                qty: Number(item.qty),
                price: Number(item.price),
            },
        ]);

        setItem({
            productId: "",
            qty: "",
            price: "",
        });

    };

    const removeItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    const total = items.reduce(
        (sum, item) => sum + item.qty * item.price,
        0
    );

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (items.length === 0) {
            return alert("Please add at least one product");
        }

        try {

            const response = await createSale({
                customerId: sale.customerId,
                storeId: sale.storeId,
                items,
            });

            if (response.success) {

                alert("Sale Created Successfully");

                router.push("/dashboard/sales");

            }

        } catch (error) {

            console.error(error);

            alert(
                error.response?.data?.message ||
                "Failed to create sale"
            );

        }

    };

    return (

        <div className="max-w-6xl mx-auto">

            <h1 className="text-3xl font-bold mb-8">
                Add Sale
            </h1>

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow rounded-lg p-6"
            >

                <div className="grid grid-cols-2 gap-6 mb-8">

                    <div>

                        <label className="block mb-2 font-medium">
                            Customer
                        </label>

                        <select
                            name="customerId"
                            value={sale.customerId}
                            onChange={handleSaleChange}
                            className="w-full border rounded-lg p-3"
                            required
                        >
                            <option value="">Select Customer</option>

                            {customers.map((customer) => (
                                <option
                                    key={customer._id}
                                    value={customer._id}
                                >
                                    {customer.name}
                                </option>
                            ))}

                        </select>

                    </div>

                    <div>

                        <label className="block mb-2 font-medium">
                            Store
                        </label>

                        <select
                            name="storeId"
                            value={sale.storeId}
                            onChange={handleSaleChange}
                            className="w-full border rounded-lg p-3"
                            required
                        >
                            <option value="">Select Store</option>

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

                </div>

                <hr className="my-6" />

                <h2 className="text-xl font-semibold mb-4">
                    Add Products
                </h2>

                <div className="grid grid-cols-4 gap-4">

                    <select
                        name="productId"
                        value={item.productId}
                        onChange={handleItemChange}
                        className="border rounded-lg p-3"
                    >
                        <option value="">Select Product</option>

                        {products.map((product) => (
                            <option
                                key={product._id}
                                value={product._id}
                            >
                                {product.name}
                            </option>
                        ))}

                    </select>

                    <input
                        type="number"
                        name="qty"
                        placeholder="Quantity"
                        value={item.qty}
                        onChange={handleItemChange}
                        className="border rounded-lg p-3"
                    />

                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={item.price}
                        onChange={handleItemChange}
                        className="border rounded-lg p-3"
                    />

                    <button
                        type="button"
                        onClick={addItem}
                        className="bg-green-600 text-white rounded-lg"
                    >
                        Add Item
                    </button>

                </div>

                <table className="w-full mt-8">

                    <thead className="bg-slate-100">

                        <tr>
                            <th className="p-3 text-left">Product</th>
                            <th className="p-3 text-left">Qty</th>
                            <th className="p-3 text-left">Price</th>
                            <th className="p-3 text-left">Total</th>
                            <th className="p-3 text-left">Action</th>
                        </tr>

                    </thead>

                    <tbody>

                        {items.map((item, index) => {

                            const product = products.find(
                                (p) => p._id === item.productId
                            );

                            return (

                                <tr key={index}>

                                    <td className="p-3">
                                        {product?.name}
                                    </td>

                                    <td className="p-3">
                                        {item.qty}
                                    </td>

                                    <td className="p-3">
                                        ₹{item.price}
                                    </td>

                                    <td className="p-3">
                                        ₹{item.qty * item.price}
                                    </td>

                                    <td className="p-3">

                                        <button
                                            type="button"
                                            onClick={() => removeItem(index)}
                                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                        >
                                            Remove
                                        </button>

                                    </td>

                                </tr>

                            );

                        })}

                    </tbody>

                </table>

                <div className="text-right mt-6">

                    <h2 className="text-2xl font-bold">
                        Total : ₹{total}
                    </h2>

                </div>

                <div className="flex gap-4 mt-8">

                    <button
                        type="submit"
                        className="border-cyan-200/10 bg-[#081852] transition hover:bg-[#0D2A74] text-white px-6 py-3 rounded-lg "
                    >
                        Create Sale
                    </button>

                    <button
                        type="button"
                        onClick={() => router.push("/dashboard/sales")}
                        className="bg-gray-300 px-6 py-3 rounded-lg hover:bg-gray-400"
                    >
                        Cancel
                    </button>

                </div>

            </form>

        </div>

    );

}