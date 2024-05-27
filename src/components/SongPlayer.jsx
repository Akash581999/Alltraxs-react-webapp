import React, { useState, useEffect } from "react";
import MusicPlayer from "./MusicPlayer";

const SearchSong = ({ handleSearch }) => (
  <div className="container-fluid search-container">
    <form role="search" className="search-form d-flex">
      <input
        id="searchSongs"
        type="search"
        className="search-input form-control form-control-dark w-100"
        placeholder="Search songs or artists..."
        aria-label="Search"
        onChange={handleSearch}
      />
      <button className="btn btn-outline-success mx-2" type="submit">
        <i className="fa fa-search"></i>
      </button>
    </form>
  </div>
);

const SearchResult = ({ song, handleSongPlay }) => (
  <div
    className="card h-100 text-light bg-dark border-success mt-1"
    style={{ maxWidth: 280 }}
  >
    <img
      src={song.album.images[0].url}
      className="card-img-top rounded"
      alt="songimage"
      style={{ height: 240 }}
    />
    <div className="card-body text-light bg-dark border-success">
      <h5 className="card-title text-wrap">{song.name}</h5>
      <p className="card-text text-wrap">{song.artists[0].name}</p>
      <span className="text-secondary text-wrap">{song.album.name}</span>
    </div>
    <div className="card-footer border-success d-flex flex-row justify-content-between">
      <small className="text-secondary mt-2">
        {Math.floor((song.duration_ms / (1000 * 60)) % 60)}:
        {Math.floor((song.duration_ms / 1000) % 60)} mins
      </small>
      <small className="text-secondary text-wrap mt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-fire text-success"
          viewBox="0 0 16 16"
        >
          <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
        </svg>
        {song.popularity}
      </small>
      <button
        type="button"
        className="btn btn-success"
        onClick={handleSongPlay}
      >
        Play now
      </button>
    </div>
    <audio controls className="mb-2 w-75 d-flex align-self-center">
      <source src={song.preview_url} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  </div>
);

const SongPlayer = () => {
  const [songs, setSongs] = useState([]);
  const [token, setToken] = useState("");
  const [song, setsong] = useState(null);
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // State to track selected item

  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    try {
      const clientId = "100f567839434193a748e863eefd7ce5";
      const clientSecret = "fff3195cb1d1428faee5a8059e17f988";

      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${btoa(clientId + ":" + clientSecret)}`,
        },
        body: "grant_type=client_credentials",
      });

      const data = await response.json();
      setToken(data.access_token);
    } catch (error) {
      console.error("Error fetching token:", error);
    }
  };

  const handleSearch = async (e) => {
    const searchValue = e.target.value.trim();
    if (!searchValue) return;

    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${searchValue}&type=track`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const data = await response.json();
      setSongs(data.tracks.items);
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
  };

  const handleSongClick = (song) => {
    setsong(song);
    setSelectedItem(song.id); // Set selected item
  };

  const handleSongPlay = () => {
    setShow(true);
  };

  return (
    <>
      <div className="container-fluid position-relative">
        <SearchSong handleSearch={handleSearch} />
        {song ? (
          <SearchResult song={song} handleSongPlay={handleSongPlay} />
        ) : (
          <ul className="list-group">
            {songs.map((song) => (
              <li
                className={`list-group-item ${
                  selectedItem === song.id ? "selected" : ""
                }`} // Apply selected class if item is selected
                key={song.id}
                onClick={() => handleSongClick(song)}
              >
                {song.name}
              </li>
            ))}
          </ul>
          // <div
          //   className="results position-absolute"
          //   style={{ width: "90%", left: "25px" }}
          // >
          //   {songs.length
          //     ? songs.map((song) => (
          //         <div
          //           className={`${selectedItem === song.id ? "selected" : ""}`}
          //           key={song.id}
          //           onClick={() => handleSongClick(song)}
          //         >
          //           {song.name}
          //         </div>
          //       ))
          //     : "No results found"}
          // </div>
        )}
      </div>
      {show ? <MusicPlayer song={song} /> : null}
    </>
  );
};

export default SongPlayer;
