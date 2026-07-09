import API from "./api";

// Get All Inventory Logs
export const getAllInventoryLogs = async () => {
    const token = localStorage.getItem("token");

    const response = await API.get("/inventory/logs", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

// Adjust Stock
export const adjustStock = async (stockData) => {
    const token = localStorage.getItem("token");

    const response = await API.post(
        "/inventory/adjust",
        stockData,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;
};

// Get Product Inventory History
export const getProductInventoryHistory = async (productId) => {
    const token = localStorage.getItem("token");

    const response = await API.get(
        `/inventory/product/${productId}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;
};