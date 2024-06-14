import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "../App.css";

function SignUp(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [isRegitered, setIsRegitered] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: val });
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      eventID: "1002",
      addInfo: {
        FirstName: formData.firstName,
        LastName: formData.lastName,
        Email: formData.email,
        Mobile: formData.phoneNumber,
        UserPassword: formData.password,
      },
    };

    try {
      const response = await fetch("http://localhost:5164/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      console.log(data, "Api response data");

      if (response.ok && data.rData.rCode === 0) {
        setIsRegitered(true);
        alert(data.rData.rMessage || "Account created successfully!");
      } else {
        alert(
          data.rData.rMessage || "Email or mobile number already registered!"
        );
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while trying to register.");
    }
  };
  if (isRegitered) {
    return <Navigate to="/LoginScreen" />;
  }

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
                  autoComplete="on"
                  spellCheck="true"
                  style={{ borderRadius: "10px" }}
                >
                  <div className="p-4">
                    <div className="mb-4">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="First name"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Last name"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        className="form-control"
                        type="tel"
                        placeholder="Phone number"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        className="form-control"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                      <div className="show-pass position-relative">
                        <button
                          type="button"
                          className="show-pass-button btn btn-border-light position-absolute"
                          style={{ top: -38, right: 0 }}
                          onClick={togglePasswordVisibility}
                          aria-label="Toggle Password Visibility"
                        >
                          <i
                            className={`fa ${
                              showPassword ? "fa-eye-slash" : "fa-eye"
                            }`}
                          ></i>
                        </button>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="rememberMe"
                          name="rememberMe"
                          checked={formData.rememberMe}
                          onChange={handleChange}
                          required
                        />
                        <label
                          htmlFor="rememberMe"
                          className="form-check-label text-secondary"
                        >
                          Accept terms & conditions?
                        </label>
                      </div>
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
                        Already have an account?
                      </p>
                      <Link
                        to="/LoginScreen"
                        className="nav-link active link-underline-primary text-primary"
                      >
                        Login now!
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
