import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // const handleLogin = async () => {
  //   setError("");
  //   try {
  //     const response = await fetch("YOUR_BACKEND_API_URL/login", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     const data = await response.json();
  //     if (!response.ok) throw new Error(data.message || "Login failed");

  //     // Store token in cookies
  //     Cookies.set("authToken", data.token, { expires: 1 }); // Expires in 1 day
  //     alert("Login successful!");
  //     navigate("/home");
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };

const handleLoginTest = async () => {
    setError("");
    Cookies.set("authToken", "test_token", { expires: 1 }); // Expires in 1 day
    navigate("/home");
  };

  return (
    <div className="container">
      <h2>Login</h2>
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLoginTest}>Log In</button>
      <p style={{ textAlign: "center" }}>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
