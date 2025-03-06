import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import AccountSettings from "./pages/AccountSettings";
import "./styles.css";
import Cookies from "js-cookie";
import BottomNav from "./components/BottomNav";

const ProtectedRoute = ({ element }) => {
  const token = Cookies.get("authToken");
  return token ? (
    <>
      {element}
      <BottomNav />
    </>
  ) : (
    <Navigate to="/" />
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
        <Route path="/account" element={<ProtectedRoute element={<AccountSettings />} />} />
      </Routes>
    </Router>
  );
}

export default App;
