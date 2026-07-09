import API from "./api";

// Get All Users
export const getAllUsers = async () => {
  const token = localStorage.getItem("token");

  const response = await API.get("/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// Get User By ID
export const getUserById = async (id) => {
  const token = localStorage.getItem("token");

  const response = await API.get(`/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// Create Sub Admin
export const createSubAdmin = async (userData) => {
  const token = localStorage.getItem("token");

  const response = await API.post(
    "/users/sub-admin",
    userData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// Create Staff
export const createStaff = async (userData) => {
  const token = localStorage.getItem("token");

  const response = await API.post(
    "/users/staff",
    userData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// Update User
export const updateUser = async (id, userData) => {
  const token = localStorage.getItem("token");

  const response = await API.put(
    `/users/${id}`,
    userData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// Update User Status
export const updateUserStatus = async (
  id,
  isActive
) => {
  const token = localStorage.getItem("token");

  const response = await API.patch(
    `/users/${id}/status`,
    { isActive },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};