import React, { useState, useEffect } from "react";

const LikedSongs = (props) => {
  const [token, setToken] = useState("");
  const [songs, setSongs] = useState([]);
  const [playlistId, setPlaylistId] = useState(null);

  useEffect(() => {
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

    getToken();
  }, []);

  useEffect(() => {
    const fetchLibrary = async () => {
      try {
        const response = await fetch(
          "https://api.spotify.com/v1/search?q=genre:gym&type=track&limit=30",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        setSongs(data.tracks.items);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    if (token) {
      fetchLibrary();
    }
  }, [token]);

  useEffect(() => {
    const createPlaylist = async () => {
      try {
        const response = await fetch(
          "https://api.spotify.com/v1/me/playlists",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: "Liked Songs",
              description: "Playlist containing liked songs",
              public: false,
            }),
          }
        );
        const data = await response.json();
        setPlaylistId(data.id);
      } catch (error) {
        console.error("Error creating playlist:", error);
      }
    };

    if (!playlistId) {
      createPlaylist();
    }
  }, [playlistId, token]);

  const addToLibrary = async (songId) => {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            uris: [`spotify:track:${songId}`],
          }),
        }
      );

      if (response.status === 201) {
        console.log(
          `Successfully added song with ID ${songId} to Liked Songs playlist`
        );
      } else {
        console.error(
          `Failed to add song with ID ${songId} to Liked Songs playlist`
        );
      }
    } catch (error) {
      console.error("Error adding song to Liked Songs playlist:", error);
    }
  };

  return (
    <div className={`bg-${props.mode}`}>
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
                  <p className="card-text">
                    {song.artists.map((artist) => artist.name).join(", ")}
                  </p>
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
                  <div class="dropdown">
                    <button
                      type="button"
                      class="btn btn-success dropdown-toggle h-100"
                      onClick={() => addToLibrary(song.id)}
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Add to
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="/">
                          Favourite
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Playlist{props.playlistId}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          New playlist
                        </a>
                      </li>
                    </ul>
                  </div>
                  <button type="button" className="btn btn-danger h-100 mx-1">
                    <i className="fa fa-remove"></i>
                  </button>
                </div>
                {song.preview_url && (
                  <audio
                    controls
                    className="d-none mb-2 w-75 d-flex align-self-center"
                  >
                    <source src={song.preview_url} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LikedSongs;
