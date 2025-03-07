import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { getItems, createItem, deleteItem, updateItem } from "../Requests";

const Home = () => {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newItem, setNewItem] = useState("");
  const [newQuantity, setNewQuantity] = useState(1);
  const navigate = useNavigate();
  const userId = Cookies.get("authToken");

  useEffect(() => {
    if (!userId) {
      navigate("/");
      return;
    }
    fetchItems();
  }, [userId]);

  const fetchItems = async () => {
    try {
      const data = await getItems(userId);
      setItems(data);
    } catch (error) {
      console.error("Failed to fetch items:", error);
    }
  };

  const handleIncrement = async (index) => {
    try {
      await updateItem(userId, items[index][0], items[index][1] + 1);
      fetchItems();
    } catch (error) {
      console.error("Failed to update item:", error);
    }
  };

  const handleDecrement = async (index) => {
    if (items[index][1] > 0) {
      try {
        await updateItem(userId, items[index][0], items[index][1] - 1);
        fetchItems();
      } catch (error) {
        console.error("Failed to update item:", error);
      }
    }
  };

  const handleDelete = async (index) => {
    try {
      await deleteItem(userId, items[index][0]);
      fetchItems();
    } catch (error) {
      console.error("Failed to delete item:", error);
    }
  };

  const handleAddItem = async () => {
    if (newItem.trim() === "" || newQuantity <= 0) return;
    try {
      await createItem(userId, newItem, newQuantity);
      setNewItem("");
      setNewQuantity(1);
      setShowModal(false);
      fetchItems();
    } catch (error) {
      console.error("Failed to create item:", error);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto pb-20">
      <h2 className="text-2xl font-bold mb-4 text-center">Home Page</h2>
      <button 
        className="bg-green-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-green-600 w-full"
        onClick={() => setShowModal(true)}
      >
        Add Item
      </button>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center bg-white shadow-md p-3 rounded-md">
            <span className="w-1/3 text-lg font-semibold">{item[0]}</span>
            <span className="w-1/3 text-lg font-semibold text-center">{item[1]}</span>
            <div className="w-1/3 flex justify-end space-x-2">
              <button onClick={() => handleIncrement(index)} className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">+</button>
              <button onClick={() => handleDecrement(index)} className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600">-</button>
              <button onClick={() => handleDelete(index)} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">🗑️</button>
            </div>
          </li>
        ))}
      </ul>
      {showModal && (
        <div className="fixed inset-0 backdrop-blur-[4px] flex items-center justify-center">
          <div className="bg-white p-6 rounded-md shadow-lg w-80">
            <h3 className="text-xl font-bold mb-4 text-center">Add New Item</h3>
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder="Enter item name"
              className="w-full p-2 border rounded-md mb-2"
            />
            <input
              type="number"
              value={newQuantity}
              onChange={(e) => setNewQuantity(Number(e.target.value))}
              min="1"
              placeholder="Enter quantity"
              className="w-full p-2 border rounded-md mb-2"
            />
            <div className="flex justify-between">
              <button onClick={handleAddItem} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add</button>
              <button onClick={() => setShowModal(false)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
