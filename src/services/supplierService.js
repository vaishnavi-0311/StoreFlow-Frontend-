import API from "./api";

// Get All Suppliers
export const getAllSuppliers = async () => {
    const token = localStorage.getItem("token");

    const response = await API.get("/suppliers", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

// Create Supplier
export const createSupplier = async (supplierData) => {
    const token = localStorage.getItem("token");

    const response = await API.post(
        "/suppliers",
        supplierData,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;
};

// Get Supplier By Id
export const getSupplierById = async (id) => {
    const token = localStorage.getItem("token");

    const response = await API.get(`/suppliers/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

// Update Supplier
export const updateSupplier = async (id, supplierData) => {
    const token = localStorage.getItem("token");

    const response = await API.put(
        `/suppliers/${id}`,
        supplierData,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;
};