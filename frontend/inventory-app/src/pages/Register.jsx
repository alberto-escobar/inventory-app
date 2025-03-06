import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container">
      <h2>Register</h2>
      <Link to="/login"><button>Already have an account? Login</button></Link>
    </div>
  );
};

export default Register;
