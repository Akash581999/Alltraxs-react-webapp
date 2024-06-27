import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

const AllSongs = (props) => {
  const [songsList, setSongsList] = useState([]);

  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async () => {
    const requestData = {
      eventID: "1020",
      addInfo: {},
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
        throw new Error("Failed to fetch songs.");
      }

      const data = await response.json();
      console.log(data, "API response data");

      if (data.rData && data.rData.rCode === 0) {
        setSongsList(data.rData.songs);
      } else {
        throw new Error(data.rData.rMessage || "Songs not found!!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(error.message || "Failed to get songs!!");
    }
  };

  return (
    <div className={`bg-${props.mode}`}>
      <section>
        <span className="fs-3 text-info text-start mx-3 my-3">ALL SONGS</span>
        <div className="table-responsive">
          <Table striped bordered hover variant="dark" className="my-3 mx-auto">
            <thead>
              <tr>
                <th>No</th>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Genre</th>
                <th>Duration</th>
                <th>Popularity</th>
                <th>SongUrl</th>
                <th>SongPic</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody className="text-light">
              {songsList.map((song, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{song.title}</td>
                  <td>{song.artist}</td>
                  <td>{song.album}</td>
                  <td>{song.genre}</td>
                  <td>{song.duration}</td>
                  <td>{song.popularity}</td>
                  <td>{song.songUrl}</td>
                  <td>{song.songPic}</td>
                  <td>
                    <button className="btn btn-success mx-1" type="button">
                      Edit
                    </button>
                    <button className="btn btn-danger mx-1" type="button">
                      Delete
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

export default AllSongs;
