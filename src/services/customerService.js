import API from "./api";

// Get All Customers
export const getAllCustomers = async () => {
    const token = localStorage.getItem("token");

    const response = await API.get("/customers", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

// Create Customer
export const createCustomer = async (customerData) => {
    const token = localStorage.getItem("token");

    const response = await API.post(
        "/customers",
        customerData,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;
};

// Get Customer By ID
export const getCustomerById = async (id) => {
    const token = localStorage.getItem("token");

    const response = await API.get(`/customers/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

// Update Customer
export const updateCustomer = async (id, customerData) => {
    const token = localStorage.getItem("token");

    const response = await API.put(
        `/customers/${id}`,
        customerData,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;
};