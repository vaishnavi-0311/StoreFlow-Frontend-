"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

import {
  getCategoryById,
  updateCategory,
} from "@/services/categoryService";

import { getAllStores } from "@/services/storeService";

export default function EditCategoryPage() {
  const router = useRouter();
  const params = useParams();

  const categoryId = params.id;

  const [loading, setLoading] = useState(true);

  const [stores, setStores] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    storeId: "",
  });

  // Fetch Category
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await getCategoryById(categoryId);

        if (response.success) {
          setFormData({
            name: response.data.name,
            description: response.data.description,
            storeId: response.data.storeId?._id || "",
          });
        }
      } catch (error) {
        console.error(error);
        alert("Failed to load category");
      } finally {
        setLoading(false);
      }
    };

    if (categoryId) {
      fetchCategory();
    }
  }, [categoryId]);

  // Fetch Stores
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

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Update Category
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await updateCategory(
        categoryId,
        formData
      );

      if (response.success) {
        alert("Category Updated Successfully");

        router.push("/dashboard/categories");
      }
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Failed to update category"
      );
    }
  };

  if (loading) {
    return (
      <div className="text-center py-10">
        Loading Category...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">

      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Edit Category
        </h1>

        <p className="text-gray-500 mt-2">
          Update category information
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow p-6"
      >

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Category Name */}

          <div>
            <label className="block mb-2 font-medium">
              Category Name
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

        </div>

        {/* Description */}

        <div className="mt-6">
          <label className="block mb-2 font-medium">
            Description
          </label>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="w-full border rounded-lg p-3"
            placeholder="Enter category description"
          />
        </div>

        {/* Buttons */}

        <div className="flex gap-4 mt-8">

          <button
            type="submit"
            className="border-cyan-200/10 bg-[#081852] transition hover:bg-[#0D2A74] text-white px-6 py-3 rounded-lg"
          >
            Update Category
          </button>

          <button
            type="button"
            onClick={() =>
              router.push("/dashboard/categories")
            }
            className="bg-gray-300 px-6 py-3 rounded-lg hover:bg-gray-400 transition"
          >
            Cancel
          </button>

        </div>

      </form>

    </div>
  );
}