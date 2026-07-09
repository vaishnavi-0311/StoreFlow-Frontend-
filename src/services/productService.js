import API from "./api";

// Get All Products
export const getAllProducts = async () => {
    const token = localStorage.getItem("token");

    const response = await API.get("/products", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

// Create Product
export const createProduct = async (productData) => {
    const token = localStorage.getItem("token");

    const response = await API.post(
        "/products",
        productData,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;
};

// Get Product By Id
export const getProductById = async (id) => {
    const token = localStorage.getItem("token");

    const response = await API.get(
        `/products/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;
};

// Update Product

export const updateProduct = async (
    id,
    productData
) => {
    const token = localStorage.getItem("token");

    const response = await API.put(
        `/products/${id}`,
        productData,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;
};

// Update Product Stock
export const updateProductStock = async (
    id,
    stock
) => {
    const token = localStorage.getItem("token");

    const response = await API.patch(
        `/products/${id}/stock`,
        { stock },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;
};