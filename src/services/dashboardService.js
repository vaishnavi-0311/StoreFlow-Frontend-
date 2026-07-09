const API_URL = "http://localhost:5000/api/dashboard";

export const getDashboardStats = async () => {
  const token = localStorage.getItem("token");

  const response = await fetch(
    `${API_URL}/stats`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.json();
};

// import API from "./api";

// export const getDashboardStats = async () => {
//   const response = await API.get("/dashboard/stats");
//   return response.data;
// };