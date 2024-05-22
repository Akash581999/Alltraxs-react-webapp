import React from "react";
import AllTraxslogo from "../images/AllTraxslogo.png";
import { Link } from "react-router-dom";
import SongPlayer from "./SongPlayer";
// import SearchSongs from "./SearchSongs";

const Header = (props) => {
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
            <ul className="d-flex flex-row justify-content-evenly navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  <span>Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/AboutScreen" className="nav-link active">
                  <span>About</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ContactScreen" className="nav-link active">
                  <span>Contacts</span>
                </Link>
              </li>
            </ul>
            <div className="d-flex flex-row justify-content-evenly">
              <div className="search">
                {/* <SearchSongs /> */}
                <SongPlayer />
              </div>
              <div className="d-flex flex-row justify-content-between">
                {/* Theme switch */}
                <div
                  className={`form-check form-switch text-${props.mode} mt-2`}
                >
                  <input
                    onClick={props.toggleMode}
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                  <label
                    className="form-check-label text-wrap text-secondary"
                    htmlFor="flexSwitchCheckDefault"
                  >
                    {props.mode}mode
                  </label>
                </div>
                {/* Login button */}
                <div className="login">
                  <button
                    className="btn btn-primary mx-2"
                    type="submit"
                    tabIndex="-1"
                  >
                    <Link to="/LoginScreen" className="nav-link active">
                      <span>Login</span>
                    </Link>
                  </button>
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
