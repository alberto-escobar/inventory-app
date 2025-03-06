import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const AccountSettings = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        Cookies.remove("authToken"); // Remove token from cookies
        navigate("/"); // Redirect to landing page
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-6 w-80">
                <h2 className="text-2xl font-bold text-center mb-4">Account Settings</h2>
                <button 
                    onClick={handleLogout} 
                    className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default AccountSettings;
