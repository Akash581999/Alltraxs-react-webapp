import React, { useState } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";

const AdminHome = (props) => {
  const [songsList, setSongsList] = useState([]);
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

      if (response.ok && data.rData && data.rData.rCode === 0) {
        alert(data.rData.rMessage || "Song found!");
        setSongsList([data.rData]);
        resetForm();
      } else {
        alert(data.rData.rMessage || "Song not found!");
        setSongsList([]);
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
        <section>
          <div className="row" style={{ minHeight: "100vh" }}>
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
                  value={songData.Title}
                  name="Title"
                />
                <button className="btn btn-outline-success mx-2" type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </form>

              <div className="table-responsive">
                <Table
                  striped
                  bordered
                  hover
                  variant="dark"
                  className="my-3 mx-auto"
                >
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Title</th>
                      <th>Artist</th>
                      <th>Album</th>
                      <th>Genre</th>
                      <th>Duration</th>
                      <th>Popularity</th>
                      <th>SongUrl</th>
                      <th>SongPic</th>
                      <th>Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    {songsList.map((song, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{song.Title}</td>
                        <td>{song.Artist}</td>
                        <td>{song.Album}</td>
                        <td>{song.Genre}</td>
                        <td>{song.Duration}</td>
                        <td>{song.Popularity}</td>
                        <td>{song.SongUrl}</td>
                        <td>{song.SongPic}</td>
                        <td>
                          <button
                            className="btn btn-success mx-1"
                            type="button"
                          >
                            Edit
                          </button>
                          <button className="btn btn-danger mx-1" type="button">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AdminHome;
