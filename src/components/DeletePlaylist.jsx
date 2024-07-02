import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const DeletePlaylist = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleDeleteplaylist = () => {
    setShow(false);
  };

  let playlistId;
  props.id.map((playlistId) => (playlistId = playlistId));
  console.log(playlistId);

  // const [show, setShow] = useState(false);
  // const [playlist, setplaylist] = useState(null);
  // const [playlistData, setplaylistData] = useState({
  //   playlistId: "",
  //   Title: "",
  //   Artist: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setplaylistData({ ...playlistData, [name]: value });
  // };

  // useEffect(() => {
  //   if (show && props.id.length > 0) {
  //     fetchplaylistDetails(props.id[0]);
  //   }
  // }, [show, props.id]);

  // const handleClose = () => {
  //   setShow(false);
  //   setplaylist(null);
  //   setplaylistData({
  //     playlistId: "",
  //     Title: "",
  //     Artist: "",
  //   });
  // };

  // const fetchplaylistDetails = async (playlistId) => {
  //   try {
  //     const response = await fetch(`http://localhost:5164/playlists/${playlistId}`);
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch playlist details");
  //     }
  //     const data = await response.json();
  //     if (data.rData && data.rData.rCode === 0) {
  //       setplaylist(data.rData); // Set playlist details from API response
  //     } else {
  //       setplaylist(null); // Clear playlist details if not found
  //     }
  //   } catch (error) {
  //     console.error("Error fetching playlist details:", error);
  //     // Handle error (e.g., show error message)
  //   }
  // };

  // const handleDeleteplaylist = async () => {
  //   try {
  //     const response = await fetch(`http://localhost:5164/playlists/${playlist.playlistId}`, {
  //       method: "DELETE",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({}),
  //     });
  //     if (!response.ok) {
  //       throw new Error("Failed to delete playlist");
  //     }
  //     console.log("playlist deleted successfully");
  //     handleClose();
  //   } catch (error) {
  //     console.error("Error deleting playlist:", error);
  //     // Handle error (e.g., show error message)
  //   }
  // };

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
          <h4>Delete this playlist!!</h4>
          <p className="text-info text-center">playlist Id: 1</p>
          <p className="text-info text-center">Title: In The Stars</p>
          <p className="text-info text-center">Artist: Benson Boone</p>
          <p className="text-info text-center">Album: Starry Nights</p>
          <p className="text-info text-center">Genre: Pop</p>
          <p className="text-info text-center">Duration: 300</p>
          <p className="text-info text-center">Popularity: 89</p>
          <p className="text-info text-center">
            playlist Pic: https://alltraxs.com/collection/tracks/pic1
          </p>
          <p className="text-info text-center">
            playlist Url: https://alltraxs.com/collection/tracks/url1
          </p>
          {/* {playlist ? (
            <>
              <h4>Delete this playlist!!</h4>
              <p className="text-info">playlist Id: {playlist.playlistId}</p>
              <p className="text-info">Title: {playlist.Title}</p>
              <p className="text-info">Artist: {playlist.Artist}</p>
              <p className="text-info">Album: {playlist.Album}</p>
              <p className="text-info">Genre: {playlist.Genre}</p>
              <p className="text-info">Duration: {playlist.Duration}</p>
              <p className="text-info">Popularity: {playlist.Popularity}</p>
              <p className="text-info">playlist Pic: {playlist.playlistPic}</p>
              <p className="text-info">playlist Url: {playlist.playlistUrl}</p>
            </>
          ) : (
            <p>Loading playlist details...</p>
          )} */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            <i className="fas fa-exclamation">&nbsp;</i>Cancel
          </Button>
          <Button variant="success" onClick={() => handleDeleteplaylist()}>
            <i className="fas fa-check">&nbsp;</i>Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeletePlaylist;
