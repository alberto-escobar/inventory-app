import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 flex justify-around py-3 shadow-md">
      <Link
        to="/home"
        className={`flex flex-col items-center text-gray-500 hover:text-blue-500 ${
          location.pathname === "/home" ? "text-blue-600 font-bold" : ""
        }`}
      >
        🏠 <span className="text-sm">Home</span>
      </Link>
      <Link
        to="/account"
        className={`flex flex-col items-center text-gray-500 hover:text-blue-500 ${
          location.pathname === "/account" ? "text-blue-600 font-bold" : ""
        }`}
      >
        ⚙️ <span className="text-sm">Account</span>
      </Link>
    </nav>
  );
};

export default BottomNav;