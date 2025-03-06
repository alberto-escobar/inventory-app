import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const AccountSettings = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        Cookies.remove("authToken"); // Remove token from cookies
        navigate("/"); // Redirect to landing page
    };
    return (
      <div className="container">
        <h2>Account Settings</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  };
  
  export default AccountSettings;
  