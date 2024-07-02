import React, { useState } from "react";

const AddPlaylist = (props) => {
  const [playlistData, setPlaylistData] = useState({
    UserId: "",
    Title: "",
    Description: "",
    Type: "",
    NumSongs: "",
  });
  const [playlistPic, setPlaylistPic] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setPlaylistData({ ...playlistData, [name]: val });
  };

  const handlePlaylistPic = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPlaylistPic(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleAddplaylist = async (e) => {
    e.preventDefault();

    const requestData = {
      eventID: "1012",
      addInfo: {
        UserId: playlistData.UserId,
        Title: playlistData.Title,
        Description: playlistData.Description,
        Type: playlistData.Type,
        NumSongs: playlistData.NumSongs,
        PlaylistImageUrl: playlistPic,
      },
    };

    try {
      const response = await fetch("http://localhost:5164/playlists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      console.log(data, "API response playlist data");

      if (data.rData && data.rData.rCode === 0) {
        alert(data.rData.rMessage || "Playlist created successfully!");
        resetForm();
      } else {
        alert(data.rData.rMessage || "Failed to create playlist.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`Some error occurred, can't create playlist now: ${error}`);
      resetForm();
    }
  };

  const resetForm = () => {
    setPlaylistData({
      UserId: "",
      Title: "",
      Description: "",
      Type: "",
      NumSongs: "",
    });
    setPlaylistPic("");
  };

  return (
    <div className={`bg-${props.mode} my-3`}>
      <section>
        <span className="fs-3 text-success text-start mx-3 my-3">
          CREATE PLAYLIST
        </span>
        <form
          className="form-container row g-3 bg-glass my-1 mx-1"
          onSubmit={handleAddplaylist}
          autoComplete="on"
          spellCheck="true"
          noValidate
        >
          <div className="col-md-6">
            <label htmlFor="UserId" className="form-label">
              User ID
            </label>
            <input
              type="text"
              className="form-control"
              id="UserId"
              name="UserId"
              placeholder="Enter User Id"
              value={playlistData.UserId}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="Title" className="form-label">
              Playlist Title
            </label>
            <input
              type="text"
              className="form-control"
              id="Title"
              name="Title"
              placeholder="Enter Playlist Title"
              value={playlistData.Title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="Description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              rows="1"
              id="Description"
              name="Description"
              placeholder="Enter Playlist Description"
              value={playlistData.Description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="col-md-6">
            <label htmlFor="Type" className="form-label">
              Playlist Type
            </label>
            <select
              className="form-select"
              id="Type"
              name="Type"
              value={playlistData.Type}
              onChange={handleChange}
              required
            >
              <option defaultValue>Select..</option>
              <option value="Public">Public</option>
              <option value="Private">Private</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="PlaylistPic" className="form-label">
              Playlist Pic
            </label>
            <input
              type="file"
              className="form-control"
              id="PlaylistPic"
              name="PlaylistPic"
              accept="image/*"
              onChange={handlePlaylistPic}
              required
            />
          </div>
          {playlistPic && (
            <div className="col-md-6">
              <label htmlFor="playlistPic">Selected Picture:</label>
              <img
                id="playlistPic"
                src={playlistPic}
                alt="Selected playlist"
                className="img-fluid rounded"
                style={{ height: "10vh", objectFit: "contain" }}
              />
            </div>
          )}
          <div className="col-md-6">
            <label htmlFor="NumSongs" className="form-label">
              Number Of Songs
            </label>
            <input
              type="number"
              className="form-control"
              id="NumSongs"
              name="NumSongs"
              placeholder="Enter Number Of Songs"
              value={playlistData.NumSongs}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-12">
            <button className="btn btn-success float-end mx-1" type="submit">
              <i className="fas fa-plus">&nbsp;</i>Create
            </button>
            <button
              className="btn btn-danger float-end mx-1"
              type="button"
              onClick={resetForm}
            >
              <i className="fa fa-remove">&nbsp;</i>Cancel
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddPlaylist;
