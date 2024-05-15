import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import profile from "../images/draw2.svg";

function Login(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("You are welcome");
  };

  const signInWithGoogle = () => {
    // Add Google sign-in logic here
    alert("Sign in with Google");
  };

  const signInWithFacebook = () => {
    // Add Facebook sign-in logic here
    alert("Sign in with Facebook");
  };

  return (
    <div className={`bg-${props.mode}`}>
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-6">
            <img
              src={profile}
              className="img-fluid"
              alt="profile"
              style={{ height: 800 }}
            />
          </div>
          <div className="col-4 col-md-6">
            <h2
              style={{
                textAlign: "center",
                position: "relative",
                top: "50px",
                color: "blue",
              }}
            >
              Login
            </h2>
            <form className="form-container bg-glass" onSubmit={handleSubmit}>
              <label className="text-dark" htmlFor="email">
                Email:
              </label>
              <input
                className="form-control mb-1"
                type="email"
                id="email"
                required
              />
              <label className="text-dark" htmlFor="pass">
                Password:
              </label>
              <input
                className="form-control mb-1"
                type="password"
                id="pass"
                required
              />
              <div className="d-flex justify-content-between mx-4 mb-2">
                <div className="align-center">
                  <input type="checkbox" id="remember" name="remember" />
                  &nbsp;
                  <label htmlFor="remember">Remember me</label>
                </div>
                <Link to="/ForgotScreen" className="nav-link active">
                <a href="/ForgotScreen">Forgot password?</a>
                </Link>
              </div>
              <button type="submit" className="btn btn-primary mb-3 w-100">
                Sign in
              </button>
              <div className="form-text">
                <p className="">
                  Don't have an account?{" "}
                  <a href="/SignUpScreen">Register now.</a>
                </p>
              </div>
              <button className="btn btn-primary mb-3 w-100">
                <Link to="/SignUpScreen" className="nav-link active">
                  <span>Register</span>
                </Link>
              </button>
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center text-dark fw-bold mx-3 mb-0">OR</p>
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
                Sign in with Facebook(Meta)
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
