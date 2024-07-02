import React, { useState } from "react";

const EditPlaylist = (props) => {
  const [playlistData, setplaylistData] = useState({
    playlistId: "",
    Title: "",
    Artist: "",
    Album: "",
    Genre: "",
    Duration: "",
    Popularity: "",
    playlistUrl: "",
  });

  // console.log(props.id);
  const [playlistPic, setplaylistPic] = useState("");
  const [playlistPicFile, setplaylistPicFile] = useState(null);

  let playlistId;
  props.id.map((playlistId) => (playlistId = playlistId));
  // console.log(playlistId);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setplaylistData({ ...playlistData, [name]: val });
  };

  const handleplaylistPic = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setplaylistPic(reader.result);
      setplaylistPicFile(file);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleAddplaylist = async (e) => {
    e.preventDefault();

    const requestData = {
      eventID: "1010",
      addInfo: {
        playlistId: playlistData.playlistId,
        title: playlistData.Title,
        artist: playlistData.Artist,
        album: playlistData.Album,
        genre: playlistData.Genre,
        duration: playlistData.Duration,
        popularity: playlistData.Popularity,
        playlistUrl: playlistData.playlistUrl,
        playlistPic: playlistPicFile,
      },
    };

    try {
      const response = await fetch("http://localhost:5164/playlists/id", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      console.log(data, "API response playlist data");

      if (data.rData && data.rData.rCode === 0) {
        alert(data.rData.rMessage || "playlist updated successfully!");
        resetForm();
      } else {
        alert(data.rData.rMessage || "Failed to update playlist.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`Some error occurred, can't update playlist now: ${error}`);
      resetForm();
    }
  };

  const resetForm = () => {
    setplaylistData({
      playlistId: "",
      Title: "",
      Artist: "",
      Album: "",
      Genre: "",
      Duration: "",
      Popularity: "",
      playlistUrl: "",
    });
    setplaylistPic("");
    setplaylistPicFile(null);
  };

  return (
    <>
      <div className={`bg-${props.mode}`}>
        <section>
          <span className="fs-3 text-warning text-start mx-3 my-3">
            EDIT PLAYLIST
          </span>
          <form
            className="form-container row g-3 bg-glass my-1 mx-1"
            onSubmit={handleAddplaylist}
            autoComplete="on"
            spellCheck="true"
            noValidate
          >
            <div className="col-md-4">
              <label htmlFor="playlistId" className="form-label">
                playlist Id
              </label>
              <input
                type="text"
                className="form-control"
                id="playlistId"
                name="playlistId"
                placeholder="Enter playlist Id to edit..."
                value={playlistId}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="Title" className="form-label">
                playlist Title
              </label>
              <input
                type="text"
                className="form-control"
                id="Title"
                name="Title"
                placeholder="playlist Title"
                value={playlistData.Title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="Artist" className="form-label">
                playlist Artist
              </label>
              <input
                type="text"
                className="form-control"
                id="Artist"
                name="Artist"
                placeholder="playlist Artist"
                value={playlistData.Artist}
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
                placeholder="playlist Album"
                value={playlistData.Album}
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
                id="Popularity"
                name="Popularity"
                placeholder="Trend popularity"
                value={playlistData.Popularity}
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
                value={playlistData.Genre}
                onChange={handleChange}
                required
              >
                <option defaultValue>Choose Genre...</option>
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
                  placeholder="playlist Duration"
                  value={playlistData.Duration}
                  onChange={handleChange}
                  aria-label="Time in (Mins:Secs format)"
                  required
                />
                <span className="input-group-text">secs</span>
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="playlistUrl" className="form-label">
                Upload playlist
              </label>
              <input
                type="file"
                className="form-control"
                id="playlistUrl"
                name="playlistUrl"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="playlistPic" className="form-label">
                Upload Pic
              </label>
              <input
                type="file"
                className="form-control"
                id="playlistPic"
                name="playlistPic"
                onChange={handleplaylistPic}
                required
              />
            </div>
            {playlistPic && (
              <div className="col-md-6">
                <label>Selected playlist Picture:</label>
                <img
                  src={playlistPic}
                  alt="Selected playlist"
                  className="img-fluid"
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
                <i className="fas fa-remove">&nbsp;</i>Cancel
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default EditPlaylist;
