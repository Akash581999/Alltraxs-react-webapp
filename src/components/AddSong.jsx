import React, { useState } from "react";
import { Link } from "react-router-dom";
import AllTraxslogo from "../images/AllTraxslogo.png";
// import SongPlayer from "./SongPlayer";
// import SongsLibrary from "./SongsLibrary";
// import SearchSongs from "./SearchSongs";
// import user from "../images/userimg1.jpg";

const AddSong = (props) => {
  // const forms = document.querySelectorAll(".needs-validation");
  // Array.from(forms).forEach((form) => {
  //   form.addEventListener(
  //     "submit",
  //     (event) => {
  //       if (!form.checkValidity()) {
  //         event.preventDefault();
  //         event.stopPropagation();
  //       }
  //       form.classList.add("was-validated");
  //     },
  //     false
  //   );
  // });

  const [songData, setSongData] = useState({
    Title: "",
    Artist: "",
    Album: "",
    Genre: "",
    Duration: "",
    Popularity: "",
    SongUrl: "",
    SongPic: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setSongData({ ...songData, [name]: val });
  };

  const handleAddSong = async (e) => {
    e.preventDefault();

    const requestData = {
      eventID: "1008",
      addInfo: {
        title: songData.Title,
        artist: songData.Artist,
        album: songData.Album,
        genre: songData.Genre,
        duration: songData.Duration,
        popularity: songData.Popularity,
        songUrl: songData.SongUrl,
        songPic: songData.SongPic,
      },
    };

    try {
      const response = await fetch("http://localhost:5164/songs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      console.log(data, "Api response data");

      if (response.ok && data.rData.rCode === 0) {
        alert(data.rData.rMessage || "Thank you for your response!");
        resetForm();
      } else {
        alert(
          data.rData.rMessage || "User data not found, Kindly register first!"
        );
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit feedback.");
    }
  };

  const resetForm = () => {
    setSongData({
      Title: "",
      Artist: "",
      Album: "",
      Genre: "",
      Duration: "",
      Popularity: "",
      SongUrl: "",
      SongPic: "",
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
                      <button
                        className="nav-link active w-100 text-light"
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
              <p className="fs-3 text-success text-start mx-3 my-3">ADD SONG</p>
              <form
                className="form-container row g-3 bg-glass my-5 mx-5 needs-validation"
                onSubmit={handleAddSong}
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
                    name="Title"
                    value={songData.Title}
                    onChange={handleChange}
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
                    name="Artist"
                    value={songData.Artist}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="Album" className="form-label">
                    Album Name
                  </label>
                  <textarea
                    className="form-control"
                    rows="1"
                    id="Album"
                    name="Album"
                    value={songData.Album}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="col-md-6">
                  <label htmlFor="Popularity" className="form-label">
                    Popularity
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Trend pop"
                    id="Popularity"
                    name="Popularity"
                    value={songData.Popularity}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="Genre" className="form-label">
                    Genre
                  </label>
                  <select
                    className="form-select"
                    id="Genre"
                    name="Genre"
                    value={songData.Genre}
                    onChange={handleChange}
                    required
                  >
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
                      className="form-control"
                      id="Duration"
                      name="Duration"
                      value={songData.Duration}
                      onChange={handleChange}
                      aria-label="Time in (Mins:Secs format)"
                      required
                    />
                    <span className="input-group-text">secs</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="Songurl" className="form-label">
                    Upload Song
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="Songurl"
                    name="Songurl"
                    value={songData.Songurl}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="Songpic" className="form-label">
                    Upload Pic
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="Songpic"
                    name="Songpic"
                    value={songData.Songpic}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12">
                  <button className="btn btn-success float-end" type="submit">
                    Add song
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

export default AddSong;
