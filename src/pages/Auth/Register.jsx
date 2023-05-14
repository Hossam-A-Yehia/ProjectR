import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState(null);
  const [runn, setRuun] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="register  d-flex align-items-center justify-content-center w-100  ">
      <div style={{ width: "800px" }}>
        <form
          className="  mx-auto my-5 w-100"
          style={{ position: "relative", zIndex: "4" }}
          onSubmit={handleSubmit}
        >
          <h2 className="text-center text-light ">Register</h2>

          <div className=" d-flex gap-4 align-items-center justify-content-center w-100 flex-wrap">
            <div className="col-12 col-md-5 p-2">
              <label className="text-white px-2 mt-3 mb-1">First name</label>
              <input
                type="text"
                className="form-control  "
                placeholder="First name"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              <label className="text-white px-2 mt-3 mb-1">Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <label className="text-white px-2 mt-3 mb-1">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
            </div>
            <div className="col-12 col-md-5 p-2">
              <label className="text-white px-2 mt-3 mb-1">Password</label>
              <input
                type="email"
                className="form-control "
                placeholder="Password"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />

              <label className="text-white px-2 mt-3 mb-1">
                Confirm password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={ConfirmPassword}
              />

              <label className="text-white px-2 mt-3 mb-1">Phone</label>
              <input
                type="number"
                className="form-control"
                placeholder="Your Phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <button
              className="btn btn-primary mt-3"
              disabled={runn}
              type="submit"
            >
              Register
            </button>
            <div className="mt-2 text-center text-white">
              You already have an account ?
              <Link to="/login" className="text-info fw-bold">
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
