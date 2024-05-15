import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function SignUp(props) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your account created successfully`);
    // You can add form submission logic here
  };

  return (
    <>
      <div className={`bg-${props.mode}`}>
        <div className="container">
          <div className="p-4 background-radial-gradient overflow-hidden">
            <div className="row">
              <div className="col-md-6 text-center text-md-start d-flex flex-column justify-content-center">
                <h2 className="my-5 display-3 fw-bold ls-tight px-3">
                  <span style={{ color: "#8b08ff" }}>AllTraxs</span>
                  <br />
                  <span className="text-primary">The best songs to listen</span>
                  <br />
                  <span className="text-secondary">Anytime and Anywhere</span>
                </h2>
                <p className="px-1 text-light">
                  "Follow your favorite artists, and enjoy curated playlists
                  tailored to your tastes. With features like offline listening,
                  high-quality audio streaming, and across different devices.
                  Enjoy your favorite tunes anytime, anywhere. Whether you're in
                  the mood for upbeat tracks to energize your workout or
                  soothing melodies for relaxation, our app provides the
                  ultimate soundtrack to your life."
                </p>
              </div>
              <div className="col-md-6 position-relative">
                <h2
                  style={{
                    textAlign: "center",
                    color: "#8b08ff",
                  }}
                >
                  Register Now
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className="my-2 bg-glass"
                  style={{ borderRadius: "10px" }}
                >
                  <div className="p-4">
                    <div className="mb-4">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="First name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Last name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        className="form-control"
                        type="tel"
                        placeholder="Phone number"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Confirm password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="checkbox"
                        id="confirmDetails"
                        name="confirmDetails"
                        checked={formData.confirmDetails}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="confirmDetails"
                        className="form-check-label text-secondary"
                      >
                        &nbsp;Accept terms & conditions?
                      </label>
                    </div>
                    <p className="text-secondary">
                      By creating an account you agree to our&nbsp;
                      <a href="/">Terms & Privacy</a>.
                    </p>
                    <button className="btn btn-primary w-100 mb-3">
                      Register
                    </button>
                    <div className="text-center">
                      <p className="my-1 text-primary">or sign up with:</p>
                      <a href="/" className="mx-3 text-danger">
                        <i className="fa fa-google" size="lg"></i>
                      </a>
                      <a href="/" className="mx-3 text-primary">
                        <i className="fa fa-facebook" size="lg"></i>
                      </a>
                      <a href="/" className="mx-3 text-info">
                        <i className="fa fa-twitter" size="lg"></i>
                      </a>
                      <a href="/" className="mx-3 text-dark">
                        <i className="fa fa-github" size="lg"></i>
                      </a>
                    </div>
                    <hr />
                    <div className="container signin">
                      <p className="mt-1 text-secondary">
                        Already have an account?{" "}
                      </p>
                      <Link to="/LoginScreen" className="nav-link active">
                        <a href="/LoginScreen">Login now!</a>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
