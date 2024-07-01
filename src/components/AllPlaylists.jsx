import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

const AllPlaylists = (props) => {
  const [playListsRecord, setPlayListsRecord] = useState([]);

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
        setPlayListsRecord(data.rData.playlistsdata || []);
        // alert(data.rData.rMessage || "All playlists retrieved!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`Failed to fetch playlists: ${error}`);
      setPlayListsRecord([]);
    }
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
              {playListsRecord.map((playlist, index) => (
                <tr key={index}>
                  <td>{playlist.playlist_Id || index + 1}</td>
                  <td>{playlist.userId}</td>
                  <td>{playlist.title}</td>
                  <td>{playlist.description}</td>
                  <td>{playlist.createdOn}</td>
                  <td>{playlist.playlistImageUrl}</td>
                  <td>{playlist.type}</td>
                  <td>{playlist.numSongs}</td>
                  <td>
                    <button className="btn btn-warning mx-1" type="button">
                      <i className="fas fa-edit">&nbsp;</i>Edit
                    </button>
                    <button className="btn btn-danger mx-1" type="button">
                      <i className="fas fa-trash">&nbsp;</i>Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </section>
    </div>
  );
};

export default AllPlaylists;
