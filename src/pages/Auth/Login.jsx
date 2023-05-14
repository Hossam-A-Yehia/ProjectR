import { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [runn, setRuun] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="login  d-flex align-items-center justify-content-center w-100  ">
      <div style={{ width: "400px" }}>
        <form
          className=" mx-auto my-2"
          onSubmit={handleSubmit}
          style={{ position: "relative", zIndex: "4" }}
        >
          <h2 className="text-center text-light ">Login</h2>
          <label className=" px-2 mt-5 mb-1 text-white">Username</label>
          <input
            type="text"
            className="form-control  "
            placeholder="Name"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <label className=" px-2 mt-4 mb-1 text-white">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Write your pasword"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button
            className="btn btn-primary mt-3"
            disabled={runn}
            type="submit"
          >
            Login
          </button>
          <div className="mt-2 text-center text-white">
            You don't have an account ؟{" "}
            <Link to="/register" className="text-info fw-bold">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
