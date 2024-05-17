import React from "react";
// import { GiMusicSpell } from "react-icons/gi";
import AllTraxslogo from "../images/AllTraxslogo.png";
import { Link } from "react-router-dom";
import SearchSongs from "./SearchSongs";

const Header = (props) => {
  return (
    <>
      <nav
        className={`navbar sticky-top navbar-expand-lg navbar-dark bg-dark z-1`}
      >
        <div className="container-fluid">
          {/* <GiMusicSpell /> */}
          <img src={AllTraxslogo} alt="logo" className="mx-3" />
          <a className="navbar-brand mb-3" href="/">
            <span
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
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                  <span>Contact us</span>
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              {/* Search button */}
              <div className="search">
                <SearchSongs />
              </div>
              {/* Login button */}
              <div className="login">
                <button
                  className="btn btn-primary mx-2"
                  type="submit"
                  href="/"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  <Link to="/LoginScreen" className="nav-link active">
                    <span>Login</span>
                  </Link>
                </button>
              </div>
              {/* Theme switch */}
              <div className={`form-check form-switch text-${props.mode} mt-2`}>
                <input
                  onClick={props.toggleMode}
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  unChecked
                />
                <label
                  style={{ color: "Grey" }}
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  {props.mode}mode
                </label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
