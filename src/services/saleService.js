import API from "./api";

// Get All Sales
export const getAllSales = async () => {
  const token = localStorage.getItem("token");

  const response = await API.get("/sales", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// Create Sale
export const createSale = async (saleData) => {
  const token = localStorage.getItem("token");

  const response = await API.post(
    "/sales",
    saleData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// Get Sale By ID
export const getSaleById = async (id) => {
  const token = localStorage.getItem("token");

  const response = await API.get(`/sales/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};