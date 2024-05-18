import React from "react";
import { Link } from "react-router-dom";
import AllTraxslogo from "../images/AllTraxslogo.png";
import user from "../images/rst3.jpg";
import SearchSongs from "./SearchSongs";

const DashBoard = (props) => {
  return (
    <>
      <div className={`bg-${props.mode}`}>
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark z-1">
          <div className="container row">
            <div className="navbar-brand col-lg-2">
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
            </div>
            {/* Search songs bar here */}
            <div className="search w-100 col-lg-8 mx-5">
              <SearchSongs />
            </div>
            <div className="navbar-nav col-lg-2">
              <div className="d-flex justify-content-evenly">
                {/* Theme switch */}
                <div
                  className={`form-check form-switch text-${props.mode} mt-2 mx-3`}
                >
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
                {/* Logout button here */}
                {/* <div className="nav-item text-nowrap mx-1">
                  <button className="btn btn-danger" type="submit">
                    Log out
                  </button>
                </div> */}
                <div className="mx-2">
                  <button
                    className="btn btn-success text-nowrap"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample"
                    aria-controls="offcanvasExample"
                  >
                    <span className="navbar-toggler-icon"></span>
                    <span className="mt-5">Menu</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <section>
          <article>
            {/* Offcamvas starts here */}
            <div
              className="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                  <a
                    href="/"
                    className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
                  >
                    <span className="fs-4">Profile</span>
                  </a>
                </h5>
                <img
                  // src="https://github.com/mdo.png"
                  src={user}
                  alt=""
                  width="48"
                  height="48"
                  className="rounded-circle"
                />
                <hr />
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="nav nav-pills flex-column mb-auto">
                  <li className="nav-item">
                    <a href="/" className="nav-link active" aria-current="page">
                      {/* <svg className="bi me-2" width="16" height="16">
                        <use xlinkHref="/home"></use>
                      </svg> */}
                      <i className="fa fa-home"></i>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/DashBoardScreen" className="nav-link text-dark">
                      {/* <svg className="bi me-2" width="16" height="16">
                        <use xlinkHref="/speedometer2"></use>
                      </svg> */}
                      <i className="fa fa-dashboard"></i>
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="/DashBoardScreen" className="nav-link text-dark">
                      {/* <svg className="bi me-2" width="16" height="16">
                        <use xlinkHref="/table"></use>
                      </svg> */}
                      <i className="fa fa-search"></i>
                      Search
                    </a>
                  </li>
                  <li>
                    <a href="/" className="nav-link text-dark">
                      {/* <svg className="bi me-2" width="16" height="16">
                        <use xlinkHref="/grid"></use>
                      </svg> */}
                      <i className="fa fa-list"></i>
                      Playlists
                    </a>
                  </li>
                  <li>
                    <a href="/" className="nav-link text-dark">
                      {/* <svg className="bi me-2" width="16" height="16">
                        <use xlinkHref="/table"></use>
                      </svg> */}
                      <i className="fa fa-heart"></i>
                      Liked songs
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/SubscriptionScreen"
                      className="nav-link text-dark"
                    >
                      {/* <svg className="bi me-2" width="16" height="16">
                        <use xlinkHref="/people-circle"></use>
                      </svg> */}
                      <i className="fa fa-money"></i>
                      Get premium
                    </Link>
                  </li>
                </ul>
                <hr />
                <div className="dropdown">
                  <a
                    href="/"
                    className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle"
                    id="dropdownUser1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      // src="https://github.com/mdo.png"
                      src={user}
                      alt=""
                      width="32"
                      height="32"
                      className="rounded-circle me-2"
                    />
                    <strong>User</strong>
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-dark text-small shadow"
                    aria-labelledby="dropdownUser1"
                  >
                    <li>
                      <a className="dropdown-item" href="/">
                        <i className="fa fa-user"></i>
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        <i className="fa fa-lock"></i>
                        {/* <i className="fa fa-key"></i>
                        <i className="fa fa-bank"></i> */}
                        Account
                      </a>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/ForgotScreen">
                        <i className="fa fa-wrench"></i>
                        Settings
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <button
                        className="btn btn-outline-dark bg-danger mx-3"
                        type="submit"
                      >
                        <Link to="/LoginScreen" className="dropdown-item">
                          Sign out
                        </Link>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Offcanvas ends here */}
          </article>
        </section>
      </div>
    </>
  );
};

export default DashBoard;
