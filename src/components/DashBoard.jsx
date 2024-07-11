import React from "react";
import { Link } from "react-router-dom";
import AllTraxslogo from "../images/AllTraxslogo.png";
import user from "../images/userimg1.jpg";
// import SearchSongs from "./SearchSongs";
import SongPlayer from "./SongPlayer";
import Album from "./Album";
import CardList from "./CardList";
import LikedSongs from "./LikedSongs";
import SongsLibrary from "./SongsLibrary";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

const DashBoard = (props) => {
  return (
    <>
      <div className={`bg-${props.mode}`}>
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark z-1">
          <div className="container-fluid">
            <div className="navbar-brand d-flex align-items-center mx-auto">
              <img src={AllTraxslogo} alt="logo" className="mx-1 my-1" />
              <Link className="navbar-brand" to="/DashBoardScreen">
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
            <div className="search navbar-nav ms-5 w-100">
              {/* <SongPlayer /> */}
            </div>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
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
                <button
                  className="btn btn-primary text-nowrap mx-2"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasExample"
                  aria-controls="offcanvasExample"
                >
                  <i className="fa fa-list"></i>&nbsp;Menu
                </button>
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
                    <Link className="dropdown-item" to="/UserProfile">
                      <i className="fa fa-user"></i>&nbsp; Profile
                    </Link>
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
          <div className="row" style={{ minHeight: "100vh" }}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={2} className="bg-dark">
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">
                        <span className="text-light center">
                          {/* <i className="fas fa-users text-info">&nbsp;</i>Users */}
                          <i className="fa fa-home text-info"></i>&nbsp; Home
                        </span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">
                        <span className="text-light center">
                          {/* <i className="fas fa-music text-info">&nbsp;</i>Songs */}
                          <i className="fa fa-search text-info"></i>&nbsp;Search
                        </span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">
                        <span className="text-light center">
                          <i className="fa fa-table text-info"></i>&nbsp;Library
                        </span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="forth">
                        <span className="text-light center">
                          {/* <i className="fas fa-envelope text-info">&nbsp;</i>
                          Feedbacks */}
                          <i className="fas fa-list text-info">&nbsp;</i>Playlists
                        </span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fifth">
                        <span className="text-light center">
                          {/* <i className="fas fa-rupee text-info">&nbsp;</i>
                          Subscriptions */}
                          <i className="fa fa-thumbs-up text-info"></i>&nbsp;Liked songs
                        </span>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={10}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <SongsLibrary />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      {/* <SearchSongs /> */}
                      <SongPlayer />
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Album />
                    </Tab.Pane>
                    <Tab.Pane eventKey="forth">
                      <CardList />
                    </Tab.Pane>
                    <Tab.Pane eventKey="fifth">
                      <LikedSongs />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </section>
      </div>
    </>
  );
};

export default DashBoard;
