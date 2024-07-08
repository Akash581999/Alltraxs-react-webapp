import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import EditPlaylist from "./EditPlaylist";
import DeletePlaylist from "./DeletePlaylist";

const AllPlaylists = (props) => {
  const [playlistsRecord, setPlaylistsRecord] = useState([]);
  const [editPlaylist, setEditPlaylist] = useState(false);
  const [deletePlaylist, setDeletePlaylist] = useState(false);

  useEffect(() => {
    fetchPlaylistsRecord();
  }, []);

  const fetchPlaylistsRecord = async () => {
    const requestData = {
      eventID: "1021",
      addInfo: {
        Playlist_Id: "",
        UserId: "",
        Title: "",
        Description: "",
        CreatedOn: "",
        PlaylistImageUrl: "",
        Type: "",
        NumSongs: "",
      },
    };

    try {
      const response = await fetch("http://localhost:5164/allplaylists", {
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

      if (data.rData && data.rData.rCode === 0) {
        setPlaylistsRecord(data.rData.playlistsdata || []);
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`Failed to fetch playlists: ${error}`);
      setPlaylistsRecord([]);
    }
  };

  const handlePlaylistEdit = (playlist_Id) => {
    console.log("Edit this playlist with ID:", playlist_Id);
    setEditPlaylist(true);
  };

  const handlePlaylistDelete = (playlist) => {
    console.log("Delete this playlist:", playlist);
    setDeletePlaylist(true);
  };

  return (
    <div className={`bg-${props.mode}`}>
      <section>
        <span className="fs-3 text-info text-start mx-3 my-3">
          ALL PLAYLISTS
        </span>
        <div className="table-responsive">
          <Table
            striped
            bordered
            hover
            variant="dark"
            className="my-3 mx-auto text-center table-responsive-sm"
          >
            <thead>
              <tr>
                <th className="text-info">Playlist Id</th>
                <th className="text-info">User Id</th>
                <th className="text-info">Title</th>
                <th className="text-info">Description</th>
                <th className="text-info">Created On</th>
                <th className="text-info">Playlist Image</th>
                <th className="text-info">Playlist Type</th>
                <th className="text-info">Num of Songs</th>
                <th className="text-info">Options</th>
              </tr>
            </thead>
            <tbody className="text-light">
              {playlistsRecord.map((playlist, index) => (
                <tr key={index}>
                  <td>{playlist.playlist_Id}</td>
                  <td>{playlist.userId}</td>
                  <td>{playlist.title}</td>
                  <td>{playlist.description}</td>
                  <td>{playlist.createdOn}</td>
                  <td>
                    <img
                      src={playlist.playlistImageUrl}
                      alt={playlist.title}
                      className="img-fluid"
                      style={{ height: "5vh", objectFit: "contain" }}
                    />
                  </td>
                  <td>{playlist.type}</td>
                  <td>{playlist.numSongs}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-warning mx-1"
                      onClick={() => handlePlaylistEdit(playlist.playlist_Id)}
                    >
                      <i className="fas fa-edit">&nbsp;</i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger mx-1"
                      onClick={() => handlePlaylistDelete(playlist.title)}
                    >
                      <i className="fas fa-trash">&nbsp;</i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </section>
      {editPlaylist && (
        <EditPlaylist
          id={playlistsRecord.map((playlist) => playlist.playlist_Id)}
          onClose={() => setEditPlaylist(false)}
        />
      )}
      <DeletePlaylist
        show={deletePlaylist}
        onHide={() => setDeletePlaylist(false)}
        id={playlistsRecord.map((playlist) => playlist.title)}
      />
    </div>
  );
};

export default AllPlaylists;
