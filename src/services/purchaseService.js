import API from "./api";

// Get All Purchases
export const getAllPurchases = async () => {
    const token = localStorage.getItem("token");

    const response = await API.get("/purchases", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

// Create Purchase
export const createPurchase = async (purchaseData) => {
    const token = localStorage.getItem("token");

    const response = await API.post(
        "/purchases",
        purchaseData,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;
};

// Get Purchase By Id
export const getPurchaseById = async (id) => {
    const token = localStorage.getItem("token");

    const response = await API.get(`/purchases/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};