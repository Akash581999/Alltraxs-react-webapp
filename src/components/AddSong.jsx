import React, { useState } from "react";

const AddSong = (props) => {
  const forms = document.querySelectorAll(".needs-validation");
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });

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
        <section>
          <span className="fs-3 text-success text-start mx-3 my-3">
            ADD SONG
          </span>
          <form
            className="form-container row g-3 bg-glass my-1 mx-1 needs-validation"
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
        </section>
      </div>
    </>
  );
};

export default AddSong;
