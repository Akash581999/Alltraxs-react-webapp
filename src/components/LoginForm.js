import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgimg1 from "../images/bgimg1.webp";
import "../App.css";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Redirecting to next page");
  };
  const handleSignUp = () => {
    navigate("/SignUp");
  };
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgimg1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <div className="container center">
          <form onSubmit={handleSubmit} className="form-container">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email here"
                aria-describedby="emailHelp"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password here"
                className="form-control"
                id="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <a href="/">Forgot password?</a>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Remember me
              </label>
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-success mx-3">
                Login
              </button>
              <button type="submit" className="btn btn-danger mx-3">
                Cancel
              </button>
            </div>
            <div id="emailHelp" className="form-text">
              <p className="form-text">New user ? Create a new account</p>
              <button
                type="submit"
                onClick={handleSignUp}
                className="btn btn-primary mx-3"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
