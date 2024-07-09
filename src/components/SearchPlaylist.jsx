import React, { useState } from "react";
import EditPlaylist from "./EditPlaylist";
import DeletePlaylist from "./DeletePlaylist";

const SearchPlaylist = (props) => {
  const [playlistsRecord, setPlaylistsRecord] = useState([]);
  const [editPlaylist, setEditPlaylist] = useState(false);
  const [deletePlaylist, setDeletePlaylist] = useState(false);
  const [seletedId, setSeletedId] = useState("");

  const [playlistData, setPlaylistData] = useState({
    playlist_Id: "",
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlaylistData({ ...playlistData, [name]: value });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const requestData = {
      eventID: "1015",
      addInfo: {
        Playlist_Id: playlistData.playlist_Id,
        Title: playlistData.title,
        Description: playlistData.description,
      },
    };

    try {
      const response = await fetch("http://localhost:5164/playlists/id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      console.log(data, "API response data");

      if (response.ok && data.rData && data.rData.rCode === 0) {
        alert(data.rData.rMessage || "Playlist found successfully");
        setPlaylistsRecord([data.rData]);
      } else {
        alert(data.rData.rMessage || "Playlist not found!");
        setPlaylistsRecord([]);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to search playlist.");
    }
  };

  const handlePlaylistEdit = (id) => {
    console.log("Edit this playlist with ID:", id);
    setSeletedId(id);
    setEditPlaylist(true);
  };

  const handlePlaylistDelete = (playlist) => {
    console.log("Delete this playlist:", playlist);
    setDeletePlaylist(true);
  };

  return (
    <div className={`bg-${props.mode}`}>
      <section>
        <span className="fs-3 text-primary text-start mx-3 my-3">
          SEARCH PLAYLIST
        </span>
        <form onSubmit={handleSearch} className="search-form d-flex">
          <input
            id="searchplaylists"
            type="search"
            className="search-input form-control form-control-dark w-100"
            placeholder="Search by playlist title or description..."
            aria-label="Search"
            onChange={handleChange}
            value={
              playlistData.title ||
              playlistData.description ||
              playlistData.playlist_Id
            }
            name={"title" || "description" || "playlist_Id"}
          />
          <button className="btn btn-outline-success mx-2" type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>

        <div className="card-list my-3 mx-2 w-100">
          {playlistsRecord.map((playlist, index) => (
            <div key={index} className="card bg-dark border-success mb-3">
              <div className="row g-0">
                <div className="col-md-2">
                  <img
                    src={playlist.PlaylistImageUrl}
                    className="card-img-top rounded p-2"
                    alt={playlist.Title}
                    style={{ height: "10vh", objectFit: "contain" }}
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-body text-light bg-dark d-flex justify-content-between align-items-center">
                    <h5 className="card-title my-auto">{playlist.Title}</h5>
                    <p className="card-text my-auto">{playlist.Description}</p>
                    <span className="text-success">{playlist.Type}</span>
                    <small className="text-secondary d-flex align-items-center">
                      <i className="fas fa-music text-info">&nbsp;</i>
                      {playlist.NumSongs}
                    </small>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card-footer bg-dark border-success d-flex justify-content-evenly align-items-center">
                    <span className="text-secondary">{playlist.CreatedOn}</span>
                    <div className="d-flex align-items-center mt-2">
                      <button
                        type="button"
                        className="btn btn-warning mx-1"
                        onClick={() => handlePlaylistEdit(playlist.Playlist_Id)}
                      >
                        <i className="fas fa-edit">&nbsp;</i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger mx-1"
                        onClick={() => handlePlaylistDelete(playlist)}
                      >
                        <i className="fas fa-trash">&nbsp;</i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {editPlaylist && (
        <EditPlaylist id={seletedId} onClose={() => setEditPlaylist(false)} />
      )}
      <DeletePlaylist
        show={deletePlaylist}
        onHide={() => setDeletePlaylist(false)}
        id={playlistsRecord.map((playlist) => playlist.Title)}
      />
    </div>
  );
};

export default SearchPlaylist;
