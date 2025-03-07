import axios from "axios";

const BASE_URL = "http://localhost:8000"; // Change this if your backend is hosted elsewhere

export const hashPassword = async (password) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
};


// Register a new user
export const registerUser = async (email, password) => {
  try {
    const hashedPassword = await hashPassword(password);
    const response = await axios.post(`${BASE_URL}/registerUser`, {
      email,
      password_hash: hashedPassword,
    });
    return response.data;
  } catch (error) {
    console.error("Registration failed:", error.response?.data?.detail || error.message);
    throw error;
  }
};

// Login a user
export const loginUser = async (email, password) => {
  try {
    const hashedPassword = await hashPassword(password);
    const response = await axios.post(`${BASE_URL}/loginUser`, {
      email,
      password_hash: hashedPassword,
    });
    return response.data; // Returns { user_id: X }
  } catch (error) {
    console.error("Login failed:", error.response?.data?.detail || error.message);
    throw error;
  }
};

// Get items for a user
export const getItems = async (user_id) => {
  try {
    const response = await axios.get(`${BASE_URL}/getItems/${user_id}`);
    return response.data.items; // Returns array of items
  } catch (error) {
    console.error("Error fetching items:", error.response?.data?.detail || error.message);
    throw error;
  }
};

// Create a new item
export const createItem = async (user_id, item_name, quantity) => {
  try {
    const response = await axios.post(`${BASE_URL}/createItem`, {
      user_id,
      item_name,
      quantity,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating item:", error.response?.data?.detail || error.message);
    throw error;
  }
};

// Delete an item
export const deleteItem = async (user_id, item_name) => {
  try {
    const response = await axios.delete(`${BASE_URL}/deleteItem`, {
      data: { user_id, item_name }, // Axios requires DELETE requests with a request body to use `data`
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting item:", error.response?.data?.detail || error.message);
    throw error;
  }
};

// Update an item
export const updateItem = async (user_id, item_name, quantity) => {
  try {
    const response = await axios.post(`${BASE_URL}/updateItem`, {
      user_id,
      item_name,
      quantity,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating item:", error.response?.data?.detail || error.message);
    throw error;
  }
};
