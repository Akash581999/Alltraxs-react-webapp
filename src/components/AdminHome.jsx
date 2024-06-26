import React, { useState } from "react";
import { Link } from "react-router-dom";
import AllTraxslogo from "../images/AllTraxslogo.png";

const AdminHome = (props) => {
  const [songData, setSongData] = useState({
    SongId: "",
    Title: "",
    Artist: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSongData({ ...songData, [name]: value });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const requestData = {
      eventID: "1011",
      addInfo: {
        SongId: songData.SongId,
        Title: songData.Title,
        Artist: songData.Artist,
      },
    };

    try {
      const response = await fetch("http://localhost:5164/songs/id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      console.log(data, "Api response data");

      if (response.ok && data.rData.rCode === 0) {
        alert(data.rData.rMessage || "Song found!");
        resetForm();
      } else {
        alert(data.rData.rMessage || "Song not found!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to search song.");
    }
  };

  const resetForm = () => {
    setSongData({
      SongId: "",
      Title: "",
      Artist: "",
    });
  };

  return (
    <>
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

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="navbar-nav text-end d-flex flex-row my-3 justify-content-center align-items-center">
                <div className="form-check form-switch text-light mx-2">
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

        <section>
          <div className="row" style={{ height: "100vh" }}>
            <div className="col-lg-2 col-md-3 col-sm-4 col-12">
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
                        className="nav-link active w-100 text-light"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        <i className="fa fa-search text-info"></i>
                        &nbsp;Search Song
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <Link to="/AddSong">
                        <button
                          className="nav-link w-100 text-light"
                          id="profile-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#profile"
                          type="button"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          <i className="fa fa-plus text-info"></i>&nbsp;Add song
                        </button>
                      </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                      <Link to="/EditSong">
                        <button
                          className="nav-link w-100 text-light"
                          id="settings-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#settings"
                          type="button"
                          role="tab"
                          aria-controls="settings"
                          aria-selected="false"
                        >
                          <i className="fa fa-edit text-info"></i>&nbsp;Edit
                          song
                        </button>
                      </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                      <Link to="/DeleteSong">
                        <button
                          className="nav-link w-100 text-light"
                          id="settings-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#settings"
                          type="button"
                          role="tab"
                          aria-controls="settings"
                          aria-selected="false"
                        >
                          <i className="fa fa-trash text-info"></i>
                          &nbsp;Delete song
                        </button>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-10 col-md-9 col-sm-8 col-12">
              <span className="fs-3 text-primary text-start mx-3 my-3">
                SEARCH SONG
              </span>
              <form onSubmit={handleSearch} className="search-form d-flex">
                <input
                  id="searchSongs"
                  type="search"
                  className="search-input form-control form-control-dark w-100"
                  placeholder="Search songs or artists..."
                  aria-label="Search"
                  onChange={handleChange}
                  value={songData.SongId || songData.Title || songData.Artist}
                  name="Title"
                />
                <button className="btn btn-outline-success mx-2" type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AdminHome;
