import API from "./api";

// Get All Categories
export const getAllCategories = async () => {
  const token = localStorage.getItem("token");

  const response = await API.get("/categories", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// Create Category
export const createCategory = async (categoryData) => {
  const token = localStorage.getItem("token");

  const response = await API.post(
    "/categories",
    categoryData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// Get Category By Id
export const getCategoryById = async (id) => {
  const token = localStorage.getItem("token");

  const response = await API.get(`/categories/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// Update Category
export const updateCategory = async (
  id,
  categoryData
) => {
  const token = localStorage.getItem("token");

  const response = await API.put(
    `/categories/${id}`,
    categoryData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};