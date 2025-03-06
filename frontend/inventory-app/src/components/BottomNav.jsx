import { Link, useLocation } from "react-router-dom";
import "./BottomNav.css";

const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="bottom-nav">
      <Link to="/home" className={location.pathname === "/home" ? "active" : ""}>🏠 Home</Link>
      <Link to="/account" className={location.pathname === "/account" ? "active" : ""}>⚙️ Account</Link>
    </nav>
  );
};

export default BottomNav;
