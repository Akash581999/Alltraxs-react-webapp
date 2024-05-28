import React from "react";
import { Link } from "react-router-dom";
import AllTraxslogo from "../images/AllTraxslogo.png";
import user from "../images/userimg1.jpg";
import SongPlayer from "./SongPlayer";
// import Album from "./Album";
// import SearchSongs from "./SearchSongs";
// import CardList from "./CardList";
// import LikedSongs from "./LikedSongs";
import SongsLibrary from "./SongsLibrary";

const DashBoard = (props) => {
  return (
    <>
      <div className={`bg-${props.mode}`}>
        <nav className="navbar sticky-top w-100 navbar-expand-lg navbar-dark bg-dark z-1 position-relative">
          <div className="container row w-100">
            <div className="navbar-brand col-lg-4 d-flex align-items-center justify-content-center">
              <img src={AllTraxslogo} alt="logo" className="mx-1 my-1" />
              <Link className="navbar-brand mb-3" to="/DashBoardScreen">
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
            {/* Search songs bar here */}
            <div className="search col-lg-10 mx-3">
              {/* <SearchSongs /> */}
              <SongPlayer />
            </div>
            <div className="navbar-nav col-lg-2 mx-3">
              <div className="d-flex justify-content-around">
                {/* Theme switch */}
                <div
                  className={`form-check form-switch text-${props.mode} mt-3 mx-1`}
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
                <div className="mx-1 my-2">
                  <button
                    className="btn btn-primary text-nowrap"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample"
                    aria-controls="offcanvasExample"
                  >
                    <span className="navbar-toggler-icon"></span>
                    <span className="mt-3">Menu</span>
                  </button>
                </div>
                {/* Logout button here */}
                <div className="nav-item text-nowrap my-2">
                  <Link to="/LoginScreen">
                    <button className="btn btn-danger" type="button">
                      {/* Log out <i className="fa fa-sign-out"></i> */}
                      <i className="fa fa-power-off"></i> Log out
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <article>
          {/* Offcamvas starts here */}
          <div
            className="offcanvas offcanvas-end bg-dark"
            tabIndex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header d-flex justify-content-center">
              <Link
                to="/DashBoardScreen"
                className="my-2 d-flex align-items-center text-dark text-decoration-none"
              >
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                  <span className="fs-1 text-light">Profile</span>
                </h5>
                <img
                  src={user}
                  alt="profile"
                  width="98"
                  height="98"
                  className="rounded-circle mx-2"
                />
              </Link>
              <button
                type="button"
                className="btn-close btn btn-outline-dark bg-danger"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <hr className="text-secondary" />
            <div className="offcanvas-body">
              <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                  <a
                    href="/DashBoardScreen"
                    className="nav-link active"
                    aria-current="page"
                  >
                    <i className="fa fa-home"></i>&nbsp; Home
                  </a>
                </li>
                <li>
                  <a href="/DashBoardScreen" className="nav-link text-light">
                    <i className="fa fa-dashboard"></i>&nbsp; Dashboard
                  </a>
                </li>
                <li>
                  <a href="/DashBoardScreen" className="nav-link text-light">
                    <i className="fa fa-search"></i>&nbsp; Search
                  </a>
                </li>
                <li>
                  <a href="/" className="nav-link text-light">
                    <i className="fa fa-list"></i>&nbsp; Playlists
                  </a>
                </li>
                <li>
                  <a href="/" className="nav-link text-light">
                    <i className="fa fa-heart"></i>&nbsp; Liked songs
                  </a>
                </li>
                <li>
                  <Link
                    to="/SubscriptionScreen"
                    className="nav-link text-light"
                  >
                    <i className="fa fa-money"></i>&nbsp; Get premium
                  </Link>
                </li>
              </ul>
              <hr className="text-secondary" />
              <div className="dropdown">
                <a
                  href="/"
                  className="d-flex align-items-center text-light text-decoration-none dropdown-toggle"
                  id="dropdownUser1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    // src="https://github.com/mdo.png"
                    src={user}
                    alt="user"
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
                      <i className="fa fa-user"></i>&nbsp; Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      <i className="fa fa-lock"></i>&nbsp;&nbsp;
                      {/* <i className="fa fa-key"></i>
                        <i className="fa fa-bank"></i> */}
                      Account
                    </a>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/ForgotScreen">
                      <i className="fa fa-wrench"></i>&nbsp;Settings
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
                        {/* Log out <i className="fa fa-sign-out"></i> */}
                        <i className="fa fa-power-off"></i>&nbsp;Log out
                      </Link>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Offcanvas ends here */}
        </article>

        <section>
          <div className="row">
            <div className="col-lg-2 col-md-3 col-sm-4">
              <div className="d-flex align-items-start h-100 bg-dark">
                <nav
                  className="nav d-flex flex-column align-items-stretch pe-4 nav-pills p-2 w-100 h-100"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <ul className="d-flex flex-column" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active w-100"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        <i className="fa fa-home"></i>&nbsp; Home
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link w-100"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        <i className="fa fa-search"></i>&nbsp;Search
                      </button>
                    </li>
                    <hr className="text-secondary" />
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link w-100"
                        id="messages-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#messages"
                        type="button"
                        role="tab"
                        aria-controls="messages"
                        aria-selected="false"
                      >
                        <i className="fa fa-table"></i>&nbsp;Library
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link w-100"
                        id="settings-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#settings"
                        type="button"
                        role="tab"
                        aria-controls="settings"
                        aria-selected="false"
                      >
                        <Link
                          to="./LikedSongs"
                          className="text-decoration-none"
                        >
                          <i className="fa fa-thumbs-up"></i>&nbsp;Liked songs
                        </Link>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link w-100"
                        id="settings-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#settings"
                        type="button"
                        role="tab"
                        aria-controls="settings"
                        aria-selected="false"
                      >
                        <i className="fa fa-music"></i>&nbsp;Playlists
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-10 col-md-9 col-sm-8">
              {/* <CardList /> */}
              {/* <Album /> */}
              {/* <LikedSongs /> */}
              <SongsLibrary />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DashBoard;
