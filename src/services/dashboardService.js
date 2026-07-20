import API from "./api";

export const getDashboardStats = async () => {
  const token = localStorage.getItem("token");

  const response = await API.get("/dashboard/stats", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// import API from "./api";

// export const getDashboardStats = async () => {
//   const response = await API.get("/dashboard/stats");
//   return response.data;
// };