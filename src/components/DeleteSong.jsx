import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const DeleteSong = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  // let SongId;
  // props.id.map((songId) => (SongId = songId));
  // console.log(SongId);

  return (
    <>
      <Modal
        show={show}
        onClick={handleClose}
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
        <Modal.Body>
          <h4>Delete this song!!</h4>
          <p className="text-info text-center">Song Id:</p>
          <p className="text-info text-center">Title:</p>
          <p className="text-info text-center">Artist:</p>
          <p className="text-info text-center">Album:</p>
          <p className="text-info text-center">Genre:</p>
          <p className="text-info text-center">Duration:</p>
          <p className="text-info text-center">Popularity:</p>
          <p className="text-info text-center">Song Pic:</p>
          <p className="text-info text-center">Song Url:</p>
          {/* {songsList.map((song, index) => (
            <div key={index}>
              <p>{song.songId || index + 1}</p>
              <p>{song.title}</p>
              <p>{song.artist}</p>
              <p>{song.album}</p>
              <p>{song.genre}</p>
              <p>{song.duration}</p>
              <p>{song.popularity}</p>
              <p>{song.songPic}</p>
              <p>{song.songUrl}</p>
            </div>
          ))} */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            <i className="fas fa-exclamation">&nbsp;</i>Cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
            <i className="fas fa-check">&nbsp;</i>Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteSong;
