import React from "react";
import { Link } from "react-router-dom";
import AllTraxslogo from "../images/AllTraxslogo.png";

const AdminNav = (props) => {
  return (
    <div className={`bg-${props.mode}`}>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark z-1">
        <div className="container-fluid">
          <div className="navbar-brand d-flex align-items-center mx-auto">
            <img src={AllTraxslogo} alt="logo" className="mx-1 my-1" />
            <Link className="navbar-brand" to="/AdminHome">
              <span
                style={{
                  color: "#8b08ff",
                  fontWeight: "bolder",
                  fontSize: "36px",
                }}
              >
                AllTraxs
              </span>
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="search navbar-nav w-100 d-flex justify-content-center">
            <p className="text-light fs-1">Admin Panel</p>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav text-end d-flex flex-row my-3 justify-content-center align-items-center">
              <form
                id="mode-switch"
                name="mode-switch"
                className={`form-check form-switch text-${props.mode} mt-2 mx-3`}
              >
                <input
                  onClick={props.toggleMode}
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  name="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label text-wrap text-secondary"
                  htmlFor="flexSwitchCheckDefault"
                >
                  {props.mode === "light" ? (
                    <i className="fas fa-sun-o text-light fs-3"></i>
                  ) : (
                    <i className="fa fa-moon-o text-secondary fs-3"></i>
                  )}
                </label>
              </form>
              <div className="nav-item text-nowrap mx-2">
                <Link to="/LoginScreen">
                  <button className="btn btn-danger" type="button">
                    <i className="fa fa-sign-out"></i>&nbsp;Log out
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AdminNav;
