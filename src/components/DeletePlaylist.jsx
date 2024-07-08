import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const DeletePlaylist = (props) => {
  const [show, setShow] = useState(false);
  const [playlist, setPlaylist] = useState([]);

  const handleClose = () => {
    setShow(false);
  };

  let title;
  props.id.map((Title) => (Title = title));
  console.log(title);

  // const handleDeletePlaylist = () => {
  //   setShow(false);
  // };

  const handleDeletePlaylist = async (title) => {
    // e.preventDefault();
    const requestData = {
      eventID: "1013",
      addInfo: {
        Title: title,
      },
    };

    try {
      const response = await fetch("http://localhost:5164/playlists/id", {
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

      if (data.rData && data.rData.rCode === 0) {
        setPlaylist(data.rData.playlistsdata || []);
        console.log("playlist deleted successfully");
        handleClose();
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`Error deleting playlist: ${error}`);
    }
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
            Confirm Playlist Deletion?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body variant="left">
          {/* <h4>Delete this playlist!!</h4>
          <p className="text-info text-center">Playlist Id: 1</p>
          <p className="text-info text-center">User Id: 1</p>
          <p className="text-info text-center">Title: My Favorites</p>
          <p className="text-info text-center">
            Description: A collection of my favorite songs
          </p>
          <p className="text-info text-center">
            Created On: 15-06-2024 14:34:31
          </p>
          <p className="text-info text-center">Playlist Image: 300</p>
          <p className="text-info text-center">Playlist Type: Public</p>
          <p className="text-info text-center">Num of Songs: 10</p> */}
          {playlist ? (
            <>
              <h4>Delete this playlist!!</h4>
              <p className="text-info">Playlist Id: {playlist.playlistId}</p>
              <p className="text-info">User Id: {playlist.userId}</p>
              <p className="text-info">Title: {playlist.title}</p>
              <p className="text-info">Description: {playlist.description}</p>
              <p className="text-info">Created On: {playlist.createdOn}</p>
              <p className="text-info">
                Playlist Image: {playlist.playlistPic}
              </p>
              <p className="text-info">Playlist Type: {playlist.type}</p>
              <p className="text-info">Num of Songs: {playlist.numSongs}</p>
            </>
          ) : (
            <p>Loading playlist details...</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            <i className="fas fa-exclamation">&nbsp;</i>Cancel
          </Button>
          <Button variant="success" onClick={() => handleDeletePlaylist()}>
            <i className="fas fa-check">&nbsp;</i>Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeletePlaylist;
