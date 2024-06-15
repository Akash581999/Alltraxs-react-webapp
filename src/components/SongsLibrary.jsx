import React, { useState, useEffect } from "react";

const SongsLibrary = (props) => {
  const [token, setToken] = useState("");
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const clientId = "100f567839434193a748e863eefd7ce5";
        const clientSecret = "fff3195cb1d1428faee5a8059e17f988";
        const response = await fetch("https://accounts.spotify.com/api/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
          },
          body: "grant_type=client_credentials",
        });
        const data = await response.json();
        setToken(data.access_token);
      } catch (error) {
        console.error("Error fetching token:", error);
      }
    };

    fetchToken();
  }, []);

  useEffect(() => {
    const fetchSongs = async () => {
      if (!token) return;
      try {
        const response = await fetch(
          "https://api.spotify.com/v1/search?q=genre:phonk&type=track&limit=18",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        setSongs(data.tracks.items);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    fetchSongs();
  }, [token]);

  const playSong = async (song) => {
    try {
      const response = await fetch(
        "https://api.spotify.com/v1/me/player/play",
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            uris: [song.uri],
          }),
        }
      );

      if (response.status === 204) {
        console.log(`Successfully started playing ${song.name}`);
      } else {
        console.error(`Failed to play ${song.name}`);
      }
    } catch (error) {
      console.error("Error playing song:", error);
    }
  };

  return (
    <div className={`bg-${props.mode}`}>
      {loading ? (
        <div
          className="container d-flex justify-content-center align-items-center"
          style={{ height: "50vh" }}
        >
          <div
            className="spinner-border text-success spinner-large"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="card-list d-flex flex-row justify-content-evenly flex-wrap">
          <div className="row my-2 mx-2">
            {songs.map((song) => (
              <div key={song.id} className="col-lg-2 col-md-6 col-sm-12 my-2">
                <div className="card h-100 text-light bg-dark border-success">
                  <img
                    src={song.album.images[0].url}
                    className="card-img-top rounded"
                    alt={song.name}
                  />
                  <div className="card-body text-light bg-dark border-success">
                    <h5 className="card-title">{song.name}</h5>
                    <p className="card-text">{song.artists[0].name}</p>
                    <span className="text-secondary">{song.album.name}</span>
                  </div>
                  <div className="card-footer border-success d-flex flex-row justify-content-between">
                    <small className="text-secondary mt-1">
                      {Math.floor((song.duration_ms / (1000 * 60)) % 60)}:
                      {Math.floor((song.duration_ms / 1000) % 60)} mins
                    </small>
                    <small className="text-secondary mt-1">
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
                      onClick={() => playSong(song)}
                    >
                      Play now
                    </button>
                  </div>
                  {song.preview_url && (
                    <audio
                      controls
                      download
                      className="mb-2 w-75 d-flex align-self-center"
                    >
                      <source src={song.preview_url} type="audio/mpeg" />
                      <source src={song.preview_url} type="audio/ogg" />
                      <source src={song.preview_url} type="audio/wav" />
                      Your browser does not support the audio element.
                    </audio>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SongsLibrary;
