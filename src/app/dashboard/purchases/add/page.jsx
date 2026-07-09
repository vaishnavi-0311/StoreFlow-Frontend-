"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { getAllStores } from "@/services/storeService";
import { getAllSuppliers } from "@/services/supplierService";
import { getAllProducts } from "@/services/productService";
import { createPurchase } from "@/services/purchaseService";

export default function AddPurchasePage() {

    const router = useRouter();

    const [stores, setStores] = useState([]);
    const [suppliers, setSuppliers] = useState([]);
    const [products, setProducts] = useState([]);

    const [purchase, setPurchase] = useState({
        supplierId: "",
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
                const supplierRes = await getAllSuppliers();
                const productRes = await getAllProducts();

                if (storeRes.success) setStores(storeRes.data);
                if (supplierRes.success) setSuppliers(supplierRes.data);
                if (productRes.success) setProducts(productRes.data);

            } catch (error) {

                console.error(error);

            }

        };

        fetchData();
    }, []);

    const handlePurchaseChange = (e) => {

        setPurchase({
            ...purchase,
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

        if (
            !item.productId ||
            !item.qty ||
            !item.price
        ) {
            return alert("Fill all item fields");
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

    const total = items.reduce(
        (sum, item) => sum + item.qty * item.price,
        0
    );

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (items.length === 0) {
            return alert("Add at least one product");
        }

        try {

            const response = await createPurchase({
                supplierId: purchase.supplierId,
                storeId: purchase.storeId,
                items,
            });

            if (response.success) {

                alert("Purchase Created Successfully");

                router.push("/dashboard/purchases");

            }

        } catch (error) {

            console.error(error);

            alert(
                error.response?.data?.message ||
                "Failed to create purchase"
            );

        }

    };

    return (

        <div className="max-w-5xl mx-auto">

            <h1 className="text-3xl font-bold mb-8">
                Add Purchase
            </h1>

            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow"
            >

                {/* Supplier & Store */}

                <div className="grid grid-cols-2 gap-6 mb-8">

                    <div>

                        <label className="block mb-2">
                            Supplier
                        </label>

                        <select
                            name="supplierId"
                            value={purchase.supplierId}
                            onChange={handlePurchaseChange}
                            className="w-full border rounded-lg p-3"
                            required
                        >

                            <option value="">
                                Select Supplier
                            </option>

                            {suppliers.map((supplier) => (

                                <option
                                    key={supplier._id}
                                    value={supplier._id}
                                >
                                    {supplier.name}
                                </option>

                            ))}

                        </select>

                    </div>

                    <div>

                        <label className="block mb-2">
                            Store
                        </label>

                        <select
                            name="storeId"
                            value={purchase.storeId}
                            onChange={handlePurchaseChange}
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

                {/* Items Table */}

                <table className="w-full mt-8">

                    <thead>

                        <tr>

                            <th className="text-left p-3">
                                Product
                            </th>

                            <th className="text-left p-3">
                                Qty
                            </th>

                            <th className="text-left p-3">
                                Price
                            </th>

                            <th className="text-left p-3">
                                Total
                            </th>

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

                                </tr>

                            );

                        })}

                    </tbody>

                </table>

                <h2 className="text-right text-2xl font-bold mt-6">
                    Total : ₹{total}
                </h2>

                <div className="flex gap-4 mt-8">

                    <button
                        type="submit"
                        className="border-cyan-200/10 bg-[#081852] transition hover:bg-[#0D2A74] text-white px-6 py-3 rounded-lg"
                    >
                        Create Purchase
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            router.push("/dashboard/purchases")
                        }
                        className="bg-gray-300 px-6 py-3 rounded-lg"
                    >
                        Cancel
                    </button>

                </div>

            </form>

        </div>

    );

}