import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import EditSong from "./EditSong";
import DeleteSong from "./DeleteSong";

const AllSongs = (props) => {
  const [songsList, setSongsList] = useState([]);
  const [editSong, setEditSong] = useState(false);
  const [deleteSong, setDeleteSong] = useState(false);
  const [selectEditId, setEditSeletedId] = useState("");
  // const [selectDeleteId, setDeleteSeletedId] = useState("");

  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async (e) => {
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
    console.log("Edit this song with ID:", id);
    setEditSeletedId(id);
    setEditSong(true);
  };

  const handleSongDelete = (song) => {
    console.log("Delete this song:", song);
    // setDeleteSeletedId(id);
    setDeleteSong(true);
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
                <th className="text-info">Song Url</th>
                <th className="text-info">Song Pic</th>
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
                  <td>
                    <audio
                      controls
                      // className="w-100"
                      style={{ width: "10vw", objectFit: "contain" }}
                    >
                      <source src={song.songUrl} type="audio/mpeg" />
                      <source src={song.songUrl} type="audio/ogg" />
                      Your browser does not support the audio element.
                    </audio>
                  </td>
                  <td>
                    <img
                      src={song.songPic}
                      alt={song.title}
                      className="img-fluid"
                      style={{ height: "10vh", objectFit: "contain" }}
                    />
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-warning mx-1"
                      onClick={() => handleSongEdit(song.songId)}
                    >
                      <i className="fas fa-edit">&nbsp;</i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger mx-1"
                      onClick={() => handleSongDelete(song.title)}
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
      {editSong && (
        <EditSong id={selectEditId} onClose={() => setEditSong(false)} />
      )}
      <DeleteSong
        show={deleteSong}
        onHide={() => setDeleteSong(false)}
        id={songsList.map((song) => song.title)}
        // id={selectDeleteId}
      />
    </div>
  );
};

export default AllSongs;
