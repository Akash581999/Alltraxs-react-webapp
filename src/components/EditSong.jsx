import React from "react";
import { Link } from "react-router-dom";
import AllTraxslogo from "../images/AllTraxslogo.png";
// import SongPlayer from "./SongPlayer";
// import SongsLibrary from "./SongsLibrary";
// import SearchSongs from "./SearchSongs";
// import user from "../images/userimg1.jpg";

const EditSong = (props) => {
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
                      <Link to="/AdminHome">
                        <button
                          className="nav-link w-100 text-light"
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
                      </Link>
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
                      <button
                        className="nav-link active w-100 text-light"
                        id="settings-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#settings"
                        type="button"
                        role="tab"
                        aria-controls="settings"
                        aria-selected="false"
                      >
                        <i className="fa fa-edit text-info"></i>&nbsp;Edit song
                      </button>
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
              <p className="fs-3 text-warning text-start mx-3 my-3">
                EDIT SONG
              </p>
              <form
                className="form-container row g-3 bg-glass my-5 mx-5 needs-validation"
                autoComplete="on"
                spellCheck="true"
                noValidate
              >
                <div className="col-md-6">
                  <label htmlFor="Title" className="form-label">
                    Song Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Title"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="Artist" className="form-label">
                    Song Artist
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="Artist"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="Album" className="form-label">
                    Album Name
                  </label>
                  <textarea
                    className="form-control"
                    id="Album"
                    name="Album"
                    rows="1"
                    required
                  ></textarea>
                </div>
                <div className="col-md-6">
                  <label htmlFor="Popularity" className="form-label">
                    Popularity
                  </label>
                  <input
                    type="number"
                    id="Popularity"
                    name="Popularity"
                    placeholder="Trend pop"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="Select" className="form-label">
                    Genre
                  </label>
                  <select className="form-select" id="Select" required>
                    <option disabled>Choose..</option>
                    <option value="Pop">Pop</option>
                    <option value="Rap">Rap</option>
                    <option value="Rock">Rock</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Indie">Indie</option>
                    <option value="Metal">Metal</option>
                    <option value="Hip-hop">Hip-hop</option>
                    <option value="Country">Country</option>
                    <option value="Classical">Classical</option>
                    <option value="Folk">Folk</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="Duration" className="form-label">
                    Duration
                  </label>
                  <div className="input-group mb-3">
                    <span className="input-group-text">In</span>
                    <input
                      type="text"
                      id="Duration"
                      name="Duration"
                      className="form-control"
                      aria-label="Time in (Mins:Secs format)"
                      required
                    />
                    <span className="input-group-text">secs</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="songurl" className="form-label">
                    Upload Song
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="songurl"
                    aria-describedby="basic-addon3 basic-addon4"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="songpic" className="form-label">
                    Upload Pic
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="songpic"
                    required
                  />
                </div>
                <div className="col-12">
                  <button
                    className="btn btn-success float-end mx-1"
                    type="submit"
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger float-end mx-1"
                    type="reset"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EditSong;
