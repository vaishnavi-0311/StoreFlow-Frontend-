import API from "./api";

const token = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
});

export const getSalesSummary = async () => {
    const res = await API.get(
        "/reports/sales-summary",
        token()
    );

    return res.data;
};

export const getBestCustomers = async () => {
    const res = await API.get(
        "/reports/best-customers",
        token()
    );

    return res.data;
};

export const getTopSuppliers = async () => {
    const res = await API.get(
        "/reports/top-suppliers",
        token()
    );

    return res.data;
};

export const getSalesReport = async (type) => {
    const res = await API.get(
        `/reports/sales?type=${type}`,
        token()
    );

    return res.data;
};


// Export PDF
export const exportPDF = async () => {
  const token = localStorage.getItem("token");

  const response = await API.get("/reports/export/pdf", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    responseType: "blob",
  });

  return response.data;
};

// Export Excel
export const exportExcel = async () => {
  const token = localStorage.getItem("token");

  const response = await API.get("/reports/export/excel", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    responseType: "blob",
  });

  return response.data;
};