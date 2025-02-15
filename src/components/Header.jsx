import React, { useEffect } from "react";
import AllTraxslogo from "../images/AllTraxslogo.png";
import { Link, useLocation } from "react-router-dom";
// import SearchSongs from "./SearchSongs";
import SongPlayer from "./SongPlayer";

const Header = (props) => {
  let location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`navbar sticky-top navbar-expand-lg navbar-dark bg-dark z-1`}
      >
        <div className="container-fluid">
          <a className="navbar-brand mt-1" href="/">
            <img src={AllTraxslogo} alt="logo" className="mx-3" />
            <span
              className="my-3 mx-3"
              style={{
                color: "#8b08ff",
                fontWeight: "bolder",
                fontSize: "36px",
              }}
            >
              AllTraxs
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="d-flex flex-row justify-content-evenly nav-underline navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                >
                  <span className="text-info fs-3">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/AboutScreen"
                  className={`nav-link ${
                    location.pathname === "/AboutScreen" ? "active" : ""
                  }`}
                >
                  <span className="text-info fs-3">About</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/ContactScreen"
                  className={`nav-link ${
                    location.pathname === "/ContactScreen" ? "active" : ""
                  }`}
                >
                  <span className="text-info fs-3">Contacts</span>
                </Link>
              </li>
            </ul>
            <div className="d-flex flex-row justify-content-evenly w-100">
              <div className="search mx-2 w-100">
                {/* <SearchSongs /> */}
                <SongPlayer />
                {/* <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </form> */}
              </div>
              <div className="d-flex flex-row justify-content-between">
                {/* Theme switch */}
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
                {/* Login button */}
                <div className="login">
                  <Link to="/LoginScreen" className="btn btn-primary mx-2">
                    <span>Login</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
