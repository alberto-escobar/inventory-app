import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="container">
      <h2 class="text-3xl font-bold underline">Inventory App</h2>
      <Link to="/login"><button>Login</button></Link>
      <Link to="/register"><button>Register</button></Link>
    </div>
  );
};

export default Landing;
