import { useState } from "react";

const Home = () => {
  const [items, setItems] = useState([
    { item_name: "apple", quantity: 1 },
    { item_name: "batteries", quantity: 2 },
    { item_name: "chocolate", quantity: 5 },
    { item_name: "detergent", quantity: 3 }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newItem, setNewItem] = useState("");
  const [newQuantity, setNewQuantity] = useState(1);

  const handleIncrement = (index) => {
    const newItems = [...items];
    newItems[index].quantity += 1;
    setItems(newItems);
  };

  const handleDecrement = (index) => {
    const newItems = [...items];
    if (newItems[index].quantity > 0) {
      newItems[index].quantity -= 1;
      setItems(newItems);
    }
  };

  const handleDelete = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleAddItem = () => {
    if (newItem.trim() === "" || newQuantity <= 0) return;
    setItems([...items, { item_name: newItem, quantity: newQuantity }]);
    setNewItem("");
    setNewQuantity(1);
    setShowModal(false);
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Home Page</h2>

      {/* Add Item Button */}
      <button 
        className="bg-green-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-green-600"
        onClick={() => setShowModal(true)}
      >
        Add Item
      </button>

      {/* List Items */}
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center justify-between bg-white shadow-md p-3 rounded-md">
            <span className="text-lg font-semibold">{item.item_name}</span>
            <span className="text-lg font-semibold">{item.quantity}</span>
            <div className="flex space-x-2">
              <button onClick={() => handleIncrement(index)} className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">+</button>
              <button onClick={() => handleDecrement(index)} className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600">-</button>
              <button onClick={() => handleDelete(index)} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">🗑️</button>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal for Adding Items */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md shadow-lg w-80">
            <h3 className="text-xl font-bold mb-4">Add New Item</h3>
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
