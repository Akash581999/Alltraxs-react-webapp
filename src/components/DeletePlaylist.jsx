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

  let Playlist_Id;
  props.id.map((playlistId) => (playlistId = Playlist_Id));
  console.log(Playlist_Id);

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
          <p className="text-info text-center">Num of Songs: 10</p>
          {/* {playlist ? (
            <>
              <h4>Delete this playlist!!</h4>
              <p className="text-info">Playlist Id: {playlist.playlistId}</p>
              <p className="text-info">User Id: {playlist.userId}</p>
              <p className="text-info">Title: {playlist.title}</p>
              <p className="text-info">Description: {playlist.description}</p>
              <p className="text-info">Created On: {playlist.createdOn}</p>
              <p className="text-info">Playlist Image: {playlist.playlistPic}</p>
              <p className="text-info">Playlist Type: {playlist.type}</p>
              <p className="text-info">Num of Songs: {playlist.numSongs}</p>
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
