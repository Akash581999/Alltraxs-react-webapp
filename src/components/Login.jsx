import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import profile from "../images/draw2.svg";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import "../App.css";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  const [rememberMe, setRememberMe] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e, userType) => {
    e.preventDefault();

    let requestData = {};

    if (userType === "user") {
      requestData = {
        eventID: "1001",
        addInfo: {
          UserId: email,
          UserPassword: password,
        },
      };
    } else if (userType === "admin") {
      requestData = {
        eventID: "1001",
        addInfo: {
          UserId: adminEmail,
          UserPassword: adminPassword,
        },
      };
    }

    try {
      const response = await fetch("http://localhost:5164/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      console.log(data, "Api response data");

      if (response.ok && data.rData.rCode === 0) {
        setIsLoggedIn(true);
        alert(data.rData.rMessage || "Login Successfully!");
      } else {
        alert(data.rData.rMessage || "Invalid Credentials!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while trying to log in.");
    }
  };

  if (isLoggedIn) {
    if (email) {
      return <Navigate to="/DashBoardScreen" />;
    } else if (adminEmail) {
      return <Navigate to="/AdminScreen" />;
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
            <form
              className="form-container bg-glass"
              id="login-form"
              name="login-form"
              autoComplete="on"
              spellCheck="true"
            >
              <h2 className="text-center text-primary">Login</h2>
              <Tab.Container
                defaultActiveKey="User"
                id="justify-tab-example"
                className="d-flex justify-content-center"
                justify
              >
                <Row>
                  <Col sm={12}>
                    <Nav
                      variant="pills"
                      className="flex-row justify-content-center"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="User">User</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Admin">Admin</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={12}>
                    <Tab.Content>
                      <Tab.Pane eventKey="User">
                        <label className="text-dark" htmlFor="email">
                          User Email:
                        </label>
                        <input
                          className="form-control mb-2"
                          type="email"
                          id="email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter user email"
                          minLength={5}
                          title="Must contain @gmail.com"
                          required
                        />
                        <label className="text-dark" htmlFor="password">
                          User Password:
                        </label>
                        <input
                          className="form-control mb-2"
                          type={showPassword ? "text" : "password"}
                          id="password"
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter user password"
                          minLength={5}
                          title="Must contain at least one number, one uppercase, one lowercase letter and at least 8 or more characters"
                          required
                        />
                        <div className="show-pass position-relative">
                          <button
                            type="button"
                            className="show-pass-button btn btn-border-light position-absolute"
                            style={{ top: -45, right: 0 }}
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
                        <div className="d-flex justify-content-between mb-2">
                          <div className="form-check align-center">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="rememberMe"
                              name="rememberMe"
                              checked={rememberMe}
                              onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <label
                              htmlFor="rememberMe"
                              className="form-check-label"
                            >
                              Remember me
                            </label>
                          </div>
                          <div className="align-items-center mb-2">
                            <Link
                              to="/ForgotScreen"
                              className="text-decoration-none"
                            >
                              Forgot password?
                            </Link>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary mb-3 w-100"
                          onClick={(e) => handleLogin(e, "user")}
                        >
                          Login
                        </button>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Admin">
                        <label className="text-dark" htmlFor="adminemail">
                          Admin Email:
                        </label>
                        <input
                          className="form-control mb-2"
                          type="email"
                          id="adminemail"
                          name="adminemail"
                          value={adminEmail}
                          onChange={(e) => setAdminEmail(e.target.value)}
                          placeholder="Enter admin email"
                          minLength={5}
                          title="Must contain @gmail.com"
                          required
                        />
                        <label className="text-dark" htmlFor="adminpassword">
                          Admin Password:
                        </label>
                        <input
                          className="form-control mb-2"
                          type={showPassword ? "text" : "password"}
                          id="adminpassword"
                          name="adminpassword"
                          value={adminPassword}
                          onChange={(e) => setAdminPassword(e.target.value)}
                          placeholder="Enter admin password"
                          minLength={5}
                          title="Must contain at least one number, one uppercase, one lowercase letter and at least 8 or more characters"
                          required
                        />
                        <div className="show-pass position-relative">
                          <button
                            type="button"
                            className="show-pass-button btn btn-border-light position-absolute"
                            style={{ top: -45, right: 0 }}
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
                        <div className="d-flex justify-content-between mb-2">
                          <div className="align-items-center mb-2">
                            <Link
                              to="/ForgotScreen"
                              className="text-decoration-none"
                            >
                              Forgot password?
                            </Link>
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary mb-3 w-100"
                          onClick={(e) => handleLogin(e, "admin")}
                        >
                          Login
                        </button>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
              <div className="form-text mb-2">
                <p className="text-center text-secondary mb-3">
                  Don't have an account?
                  <Link to="/SignupScreen" className="text-decoration-none">
                    &nbsp;Register now.
                  </Link>
                </p>
              </div>
              <button className="btn btn-primary w-100">
                <Link to="/SignupScreen" className="nav-link active">
                  Register
                </Link>
              </button>
              <div className="divider d-flex align-items-center">
                <p className="text-center text-dark fw-bold mx-3 my-3">OR</p>
              </div>
              <button
                className="btn btn-danger mb-2 w-100"
                onClick={signInWithGoogle}
                aria-label="Sign in with Google"
              >
                <i className="fa fa-google">&nbsp;</i>
                Sign in with Google
              </button>
              <button
                className="btn btn-primary mb-2 w-100"
                onClick={signInWithFacebook}
                aria-label="Sign in with Facebook"
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
