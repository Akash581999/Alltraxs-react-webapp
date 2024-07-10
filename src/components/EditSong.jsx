import React, { useState, useEffect } from "react";

const EditSong = (props) => {
  const [songData, setSongData] = useState({
    SongId: "",
    Title: "",
    Artist: "",
    Album: "",
    Genre: "",
    Duration: "",
    Popularity: "",
  });
  const [songPic, setSongPic] = useState("");
  const [songUrl, setSongUrl] = useState("");

  useEffect(() => {
    fetchSongDetails();
  }, [props.id]);

  const fetchSongDetails = async () => {
    const requestData = {
      eventID: "1011",
      addInfo: {
        SongId: props.id,
        Title: "",
        Artist: "",
      },
    };
    try {
      const response = await fetch(`http://localhost:5164/songs/id`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data, "API response data");

      const song = data.rData;
      console.log("song", song);
      if (data.rData && data.rData.rCode === 0) {
        setSongData({
          SongId: song.SongId,
          Title: song.Title,
          Artist: song.Artist,
          Album: song.Album,
          Genre: song.Genre,
          Duration: song.Duration,
          Popularity: song.Popularity,
        });
        setSongPic(song.songPic);
        setSongUrl(song.songUrl);
      } else {
        console.log("Song details retrieved.");
        alert("Song details retrieved.");
        // console.log("Failed to fetch song details.");
        // alert("Failed to fetch song details.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`Error fetching song details: ${error}`);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setSongData({ ...songData, [name]: val });
  };
  const handleSongUrl = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setSongUrl(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleSongPic = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setSongPic(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleEditSong = async (e) => {
    e.preventDefault();

    const requestData = {
      eventID: "1010",
      addInfo: {
        SongId: props.id,
        title: songData.Title,
        artist: songData.Artist,
        album: songData.Album,
        genre: songData.Genre,
        duration: songData.Duration,
        popularity: songData.Popularity,
        songUrl: songUrl,
        songPic: songPic,
      },
    };

    try {
      const response = await fetch("http://localhost:5164/songs/id", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      console.log(data, "API response song data");

      if (data.rData && data.rData.rCode === 0) {
        alert(data.rData.rMessage || "Song updated successfully!");
        resetForm();
      } else {
        alert(data.rData.rMessage || "Failed to update song.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`Some error occurred, can't update song now: ${error}`);
      resetForm();
    }
  };

  const resetForm = () => {
    setSongData({
      SongId: "",
      Title: "",
      Artist: "",
      Album: "",
      Genre: "",
      Duration: "",
      Popularity: "",
    });
    setSongPic("");
    setSongUrl("");
  };

  return (
    <>
      <div className={`bg-${props.mode}`}>
        <section>
          <span className="fs-3 text-warning text-start mx-3 my-3">
            EDIT SONG
          </span>
          <form
            className="form-container row g-3 bg-glass my-1 mx-1"
            onSubmit={handleEditSong}
            autoComplete="on"
            spellCheck="true"
            noValidate
          >
            <div className="col-md-4">
              <label htmlFor="SongId" className="form-label">
                Song Id
              </label>
              <input
                type="text"
                className="form-control"
                id="SongId"
                name="SongId"
                placeholder="Enter Song Id"
                value={songData.SongId}
                readOnly
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="Title" className="form-label">
                Song Title
              </label>
              <input
                type="text"
                className="form-control"
                id="Title"
                name="Title"
                placeholder="Song Title"
                value={songData.Title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="Artist" className="form-label">
                Song Artist
              </label>
              <input
                type="text"
                className="form-control"
                id="Artist"
                name="Artist"
                placeholder="Song Artist"
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
                placeholder="Song Album"
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
                id="Popularity"
                name="Popularity"
                placeholder="Trend popularity"
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
                  type="number"
                  className="form-control"
                  id="Duration"
                  name="Duration"
                  placeholder="Song Duration"
                  value={songData.Duration}
                  onChange={handleChange}
                  aria-label="Time in (Mins:Secs format)"
                  required
                />
                <span className="input-group-text">secs</span>
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="SongUrl" className="form-label">
                Upload Song
              </label>
              <input
                type="file"
                className="form-control"
                id="SongUrl"
                name="SongUrl"
                // accept="audio/*"
                onChange={handleSongUrl}
                required
              />
            </div>
            {songUrl && (
              <div className="col-md-6 d-flex align-items-center">
                <label htmlFor="songUrl" className="mt-3">
                  Selected Song:
                </label>
                <audio
                  id="songUrl"
                  className="mt-3"
                  controls
                  style={{ width: "20vw", objectFit: "contain" }}
                >
                  <source src={songUrl} type="audio/mpeg" />
                  <source src={songUrl} type="audio/ogg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            )}
            <div className="col-md-6">
              <label htmlFor="SongPic" className="form-label">
                Upload Pic
              </label>
              <input
                type="file"
                className="form-control"
                id="SongPic"
                name="SongPic"
                accept="image/*"
                onChange={handleSongPic}
                required
              />
            </div>
            {songPic && (
              <div className="col-md-6">
                <label htmlFor="songPic">Selected Picture:</label>
                <img
                  id="songPic"
                  src={songPic}
                  alt="Selected Song"
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
                <i className="fas fa-remove">&nbsp;</i>Cancel
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default EditSong;
