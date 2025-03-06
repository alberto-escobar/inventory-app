import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-80 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Inventory App</h2>
        <div className="flex flex-col space-y-4">
          <Link to="/login">
            <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
