import API from "./api";


// get all stores

export const getAllStores = async () => {
  const token = localStorage.getItem("token");

  const response = await API.get("/stores", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// create store

export const createStore = async (storeData) => {
  const token = localStorage.getItem("token");

  const response = await API.post(
    "/stores",
    storeData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// get store by id

export const getStoreById = async (id) => {
  const token = localStorage.getItem("token");

  const response = await API.get(`/stores/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// update store

export const updateStore = async (id, storeData) => {
  const token = localStorage.getItem("token");

  const response = await API.put(
    `/stores/${id}`,
    storeData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};


// update store status

export const updateStoreStatus = async (id, status) => {
  const token = localStorage.getItem("token");

  const response = await API.patch(
    `/stores/${id}/status`,
    { status },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
