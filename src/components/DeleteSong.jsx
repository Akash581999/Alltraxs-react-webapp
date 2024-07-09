// import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const DeleteSong = ({ props, show, onHide, id }) => {
  // const [Song, setSong] = useState(null);

  if (!id || id.length === 0) {
    console.error("No Song ID provided.");
    return;
  }
  const title = id[0];

  const handleDeleteSong = async () => {
    const requestData = {
      eventID: "1009",
      addInfo: {
        title: title,
      },
    };

    try {
      const response = await fetch(`http://localhost:5164/songs/id`, {
        method: "DELETE",
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

      if (response.ok && data.rData && data.rData.rCode === 0) {
        // console.log("Song deleted successfully");
        // setSong(data.rData.Songsdata || null);
        alert(data.rData.rMessage || "Song deleted successfully");
        handleClose();
      } else {
        // console.log("Song not deleted!");
        // setSong(data.rData.Songsdata || null);
        alert(data.rData.rMessage || "Song not deleted!");
        handleClose();
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`Error deleting Song: ${error}`);
    }
  };

  const handleClose = () => {
    onHide();
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Confirm Song Deletion?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body variant="left">
          <h4>Delete this song?</h4>
          <p className="text-info">Title: {title}</p>
          {/* {song ? (
            <>
              <h4>Delete this song!!</h4>
              <p className="text-info">Song Id: {song.SongId}</p>
              <p className="text-info">Title: {song.Title}</p>
              <p className="text-info">Artist: {song.Artist}</p>
              <p className="text-info">Album: {song.Album}</p>
              <p className="text-info">Genre: {song.Genre}</p>
              <p className="text-info">Duration: {song.Duration}</p>
              <p className="text-info">Popularity: {song.Popularity}</p>
              <p className="text-info">Song Pic: {song.SongPic}</p>
              <p className="text-info">Song Url: {song.SongUrl}</p>
            </>
          ) : (
            <p>Loading song details...</p>
          )} */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            <i className="fas fa-exclamation">&nbsp;</i>Cancel
          </Button>
          <Button variant="success" onClick={() => handleDeleteSong()}>
            <i className="fas fa-check">&nbsp;</i>Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteSong;
