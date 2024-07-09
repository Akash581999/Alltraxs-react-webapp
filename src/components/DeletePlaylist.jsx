// import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const DeletePlaylist = ({ show, onHide, id }) => {
  // const [playlist, setPlaylist] = useState(null);

  if (!id || id.length === 0) {
    console.error("No playlist ID provided.");
    return;
  }
  const title = id[0];

  const handleDeletePlaylist = async () => {
    const requestData = {
      eventID: "1013",
      addInfo: {
        Title: title,
      },
    };

    try {
      const response = await fetch(`http://localhost:5164/playlists/id`, {
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
        // console.log("Playlist deleted successfully");
        // setPlaylist(data.rData.playlistsdata || null);
        alert(data.rData.rMessage || "Playlist deleted successfully");
        handleClose();
      } else {
        // console.log("Playlist not deleted!");
        // setPlaylist(data.rData.playlistsdata || null);
        alert(data.rData.rMessage || "Playlist not deleted!");
        handleClose();
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`Error deleting playlist: ${error}`);
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
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Delete this playlist?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-info">Title: {title}</p>
          {/* {playlist ? (
            <>
              {playlist.map((item, index) => (
                <div key={index}>
                  <h4>Delete this playlist?</h4>
                  <p className="text-info">Title: {item.title}</p>
                  <p className="text-info">User Id: {item.userId}</p>
                  <p className="text-info">Playlist Id: {item.playlistId}</p>
                  <p className="text-info">Description: {item.description}</p>
                  <p className="text-info">Created On: {item.createdOn}</p>
                  <p className="text-info">
                    Playlist Image: {item.playlistPic}
                  </p>
                  <p className="text-info">Playlist Type: {item.type}</p>
                  <p className="text-info">Num of Songs: {item.numSongs}</p>
                </div>
              ))}
            </>
          ) : (
            <p>Loading playlist details...</p>
          )} */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            <i className="fas fa-exclamation">&nbsp;</i>Cancel
          </Button>
          <Button variant="success" onClick={handleDeletePlaylist}>
            <i className="fas fa-check">&nbsp;</i>Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeletePlaylist;
