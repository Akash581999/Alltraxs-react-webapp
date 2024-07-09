import React, { useState, useEffect } from "react";

const EditPlaylist = (props) => {
  const [playlistData, setPlaylistData] = useState({
    PlaylistId: "",
    UserId: "",
    Title: "",
    Description: "",
    Type: "",
    NumSongs: "",
  });
  const [playlistPic, setPlaylistPic] = useState("");

  useEffect(() => {
    fetchPlaylistDetails();
  }, [props.id]);

  const fetchPlaylistDetails = async () => {
    const requestData = {
      eventID: "1015",
      addInfo: {
        Playlist_Id: props.id,
        Title: "",
        Description: "",
      },
    };
    try {
      const response = await fetch(`http://localhost:5164/playlists/id`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });
      const data = await response.json();
      console.log("data of seleted playlist", data);

      if (data.rData.rCode === 0) {
        const playlist = data.rData;
        console.log("playlist", playlist);
        setPlaylistData({
          PlaylistId: playlist.Playlist_Id,
          UserId: playlist.UserId,
          Title: playlist.Title,
          Description: playlist.Description,
          Type: playlist.Type,
          NumSongs: playlist.NumSongs,
        });
        setPlaylistPic(playlist.PlaylistImageUrl);
      } else {
        alert("Failed to fetch playlist details.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`Error fetching playlist details: ${error}`);
    }
  };

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

  const handleEditPlaylist = async (e) => {
    e.preventDefault();

    const requestData = {
      eventID: "1014",
      addInfo: {
        Playlist_Id: props.id,
        UserId: playlistData.UserId,
        Title: playlistData.Title,
        Description: playlistData.Description,
        Type: playlistData.Type,
        NumSongs: playlistData.NumSongs,
        PlaylistImageUrl: playlistPic,
      },
    };

    try {
      const response = await fetch(`http://localhost:5164/playlists/id`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      console.log(data, "API response playlist data");

      if (response.ok) {
        alert(data.message || "Playlist updated successfully!");
        resetForm();
      } else {
        alert(data.message || "Failed to update playlist.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`Some error occurred, can't update playlist now: ${error}`);
    }
  };

  const resetForm = () => {
    setPlaylistData({
      PlaylistId: "",
      UserId: "",
      Title: "",
      Description: "",
      Type: "",
      NumSongs: "",
    });
    setPlaylistPic("");
  };

  return (
    <div className={`bg-${props.mode}`}>
      <section>
        <span className="fs-3 text-warning text-start mx-3 my-3">
          EDIT PLAYLIST
        </span>
        <form
          className="form-container row g-3 bg-glass my-1 mx-1"
          onSubmit={handleEditPlaylist}
          autoComplete="on"
          spellCheck="true"
          noValidate
        >
          <div className="col-md-6">
            <label htmlFor="PlaylistId" className="form-label">
              Playlist Id
            </label>
            <input
              type="text"
              className="form-control"
              id="PlaylistId"
              name="PlaylistId"
              placeholder="Enter Playlist Id"
              value={playlistData.PlaylistId}
              readOnly
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="UserId" className="form-label">
              User Id
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
              <option value="">Select..</option>
              <option value="Public">Public</option>
              <option value="Private">Private</option>
            </select>
          </div>
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
            />
          </div>
          {playlistPic && (
            <div className="col-md-6">
              <label>Selected Picture:</label>
              <img
                src={playlistPic}
                alt="Selected playlist"
                className="img-fluid rounded"
                style={{ height: "10vh", objectFit: "contain" }}
              />
            </div>
          )}
          <div className="col-md-12">
            <button className="btn btn-success float-end mx-1" type="submit">
              <i className="fas fa-save">&nbsp;</i>Save
            </button>
            <button
              className="btn btn-warning float-end mx-1"
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

export default EditPlaylist;
