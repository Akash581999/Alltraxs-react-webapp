import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import EditSong from "./EditSong";
import DeleteSong from "./DeleteSong";

const AllSongs = (props) => {
  const [songsList, setSongsList] = useState([]);
  const [editSong, setEditSong] = useState(false);
  const [deleteSong, setDeleteSong] = useState(false);

  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async () => {
    const requestData = {
      eventID: "1020",
      addInfo: {
        Title: "",
        Artist: "",
        Album: "",
        Genre: "",
        Duration: "",
        Popularity: "",
        SongUrl: "",
        SongPic: "",
      },
    };

    try {
      const response = await fetch("http://localhost:5164/allsongs", {
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
        setSongsList(data.rData.songs || []);
        // alert(data.rData.rMessage || "All songs retrieved!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`Failed to fetch songs: ${error}`);
      setSongsList([]);
    }
  };

  const handleSongEdit = (id) => {
    console.log(id);
  };
  return (
    <div className={`bg-${props.mode}`}>
      <section>
        <span className="fs-3 text-info text-start mx-3 my-3">ALL SONGS</span>
        <div className="table-responsive">
          <Table
            striped
            bordered
            hover
            variant="dark"
            className="my-3 mx-auto text-center"
          >
            <thead>
              <tr>
                <th className="text-info">Song Id</th>
                <th className="text-info">Title</th>
                <th className="text-info">Artist</th>
                <th className="text-info">Album</th>
                <th className="text-info">Genre</th>
                <th className="text-info">Duration</th>
                <th className="text-info">Popularity</th>
                <th className="text-info">Song Pic</th>
                <th className="text-info">Song Url</th>
                <th className="text-info">Options</th>
              </tr>
            </thead>
            <tbody className="text-light">
              {songsList.map((song, index) => (
                <tr key={index}>
                  <td>{song.songId || index + 1}</td>
                  <td>{song.title}</td>
                  <td>{song.artist}</td>
                  <td>{song.album}</td>
                  <td>{song.genre}</td>
                  <td>{song.duration}</td>
                  <td>{song.popularity}</td>
                  <td>{song.songPic}</td>
                  <td>{song.songUrl}</td>
                  <td>
                    <button
                      className="btn btn-warning mx-1"
                      type="button"
                      onClick={() => {
                        handleSongEdit(song.songId);
                        setEditSong(true);
                      }}
                    >
                      <i className="fas fa-edit">&nbsp;</i>
                    </button>
                    <button
                      className="btn btn-danger mx-1"
                      type="button"
                      onClick={() => setDeleteSong(true)}
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
      {editSong && <EditSong id={songsList.map((song) => song.songId)} />}
      <DeleteSong
        show={deleteSong}
        onHide={() => setDeleteSong(false)}
        id={songsList.map((song) => song.songId)}
      />
    </div>
  );
};

export default AllSongs;
