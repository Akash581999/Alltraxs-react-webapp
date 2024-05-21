import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import profile from "../images/draw2.svg";

function Login(props) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("You are welcome");
  };

  const signInWithGoogle = () => {
    alert("Sign in with Google");
  };

  const signInWithFacebook = () => {
    alert("Sign in with Facebook");
  };

  return (
    <div className={`bg-${props.mode}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-md-block my-3">
            <img
              src={profile}
              className="img-fluid"
              alt="Login Img"
              style={{ height: "100%" }}
            />
          </div>
          <div className="col-md-6">
            <h2 className="text-center text-primary my-3">Login</h2>
            <form
              className="form-container bg-glass"
              onSubmit={handleSubmit}
              autoComplete="off"
              spellCheck="false"
            >
              <label className="text-dark" htmlFor="email">
                Email:
              </label>
              <input
                className="form-control mb-2"
                type="email"
                id="email"
                name="email"
                placeholder="Enter email here"
                required
              />
              <label className="text-dark" htmlFor="pass">
                Password:
              </label>
              <input
                className="form-control mb-2"
                type={showPassword ? "text" : "password"}
                id="pass"
                name="pass"
                placeholder="Enter password here"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                required
              />
              <div className="show-pass position-relative">
                <button
                  type="button"
                  className="show-pass-button btn btn-border-light position-absolute"
                  style={{ top: -45, left: 362 }}
                  onClick={togglePasswordVisibility}
                >
                  <i className="fa fa-eye"></i>
                </button>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <div className="form-check align-center">
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    className="form-check-input"
                  />
                  <label htmlFor="remember" className="text-wrap">
                    Remember me
                  </label>
                </div>
                <div className="align-items-center mb-2">
                  <Link to="/ForgotScreen" className="text-decoration-none">
                    Forgot password?
                  </Link>
                </div>
              </div>
              <button type="submit" className="btn btn-primary mb-3 w-100">
                <Link to="/DashBoardScreen" className="nav-link active">
                  Login
                </Link>
              </button>
              <div className="form-text mb-2">
                <p className="text-center text-secondary mb-3">
                  Don't have an account?
                  <Link to="/SignupScreen" className="text-decoration-none">
                    &nbsp;Register now.
                  </Link>
                </p>
              </div>
              <button className="btn btn-primary mb-3 w-100">
                <Link to="/SignupScreen" className="nav-link active">
                  Register
                </Link>
              </button>
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center text-dark fw-bold mx-3 my-3">OR</p>
              </div>
              <button
                className="btn btn-danger mb-2 w-100"
                onClick={signInWithGoogle}
              >
                <i className="fa fa-google">&nbsp;</i>
                Sign in with Google
              </button>
              <button
                className="btn btn-primary mb-2 w-100"
                onClick={signInWithFacebook}
              >
                <i className="fa fa-facebook">&nbsp;</i>
                Sign in with Facebook
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
