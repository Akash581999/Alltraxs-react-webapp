import React, { useState } from "react";
import EditSong from "./EditSong";
import DeleteSong from "./DeleteSong";

const AdminSearchSong = (props) => {
  const [songsList, setSongsList] = useState([]);
  const [editSong, setEditSong] = useState(false);
  const [deleteSong, setDeleteSong] = useState(false);

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
      console.log(data, "API response data");

      if (response.ok && data.rData && data.rData.rCode === 0) {
        alert(data.rData.rMessage || "Song found!");
        setSongsList([data.rData]);
      } else {
        alert(data.rData.rMessage || "Song not found!");
        setSongsList([]);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to search song.");
    }
  };

  const handleSongEdit = (id) => {
    console.log(id);
  };

  // const handleSongPlay = (song) => {
  //   console.log("Playing song:", song);
  // };

  return (
    <div className={`bg-${props.mode}`}>
      <section>
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

        <div className="card-list my-3 mx-2 w-100">
          {songsList.map((song, index) => (
            <div key={index} className="card bg-dark border-success mb-3">
              <div className="row g-0">
                <div className="col-md-2">
                  <img
                    src={song.SongPic}
                    className="card-img-top rounded"
                    alt="songimage"
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-body text-light bg-dark d-flex justify-content-between">
                    <h5 className="card-title">{song.Title}</h5>
                    <p className="card-text">{song.Artist}</p>
                    <span className="text-secondary">{song.Album}</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card-footer bg-dark border-success d-flex justify-content-evenly align-items-center">
                    <small className="text-secondary">
                      {Math.floor((song.Duration / (1000 * 60)) % 60)}:
                      {Math.floor((song.Duration / 1000) % 60)} mins
                    </small>
                    <small className="text-secondary d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="bi bi-fire text-success me-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
                      </svg>
                      {song.Popularity}
                    </small>
                    <div className="d-flex align-items-center mt-2">
                      <button
                        type="button"
                        className="btn btn-warning mx-1"
                        onClick={() => {
                          handleSongEdit(song.songId);
                          setEditSong(true);
                        }}
                      >
                        <i className="fas fa-edit">&nbsp;</i>Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger mx-1"
                        onClick={() => setDeleteSong(true)}
                      >
                        <i className="fas fa-trash">&nbsp;</i>Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {song.SongUrl && (
                <audio controls className="d-none w-100">
                  <source src={song.SongUrl} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              )}
            </div>
          ))}
        </div>
      </section>
      {editSong && <EditSong id={songsList.map((song) => song.songId)} />}
      <DeleteSong
        show={deleteSong}
        onHide={() => setDeleteSong(false)}
        id={songsList.map((song) => song.songId)}
      />
    </div>
  );
};

export default AdminSearchSong;
