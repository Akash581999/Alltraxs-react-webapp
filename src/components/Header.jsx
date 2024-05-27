import React from "react";
import AllTraxslogo from "../images/AllTraxslogo.png";
import { Link } from "react-router-dom";
import SearchSongs from "./SearchSongs";
// import SongPlayer from "./SongPlayer";

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
            <ul className="d-flex flex-row justify-content-evenly nav-underline navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <span className="text-info fs-3">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/AboutScreen" className="nav-link">
                  <span className="text-info fs-3">About</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ContactScreen" className="nav-link">
                  <span className="text-info fs-3">Contacts</span>
                </Link>
              </li>
            </ul>
            <div className="d-flex flex-row justify-content-evenly">
              <div className="search mx-2">
                <SearchSongs />
                {/* <SongPlayer /> */}
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
                  className={`form-check form-switch text-${props.mode} mt-2`}
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
                    {props.mode}mode
                  </label>
                </form>
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
