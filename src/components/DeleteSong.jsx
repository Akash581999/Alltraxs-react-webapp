import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const DeleteSong = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleDeleteSong = () => {
    setShow(false);
  };

  let SongId;
  props.id.map((songId) => (SongId = songId));
  console.log(SongId);

  // const [show, setShow] = useState(false);
  // const [song, setSong] = useState(null);
  // const [songData, setSongData] = useState({
  //   SongId: "",
  //   Title: "",
  //   Artist: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setSongData({ ...songData, [name]: value });
  // };

  // useEffect(() => {
  //   if (show && props.id.length > 0) {
  //     fetchSongDetails(props.id[0]);
  //   }
  // }, [show, props.id]);

  // const handleClose = () => {
  //   setShow(false);
  //   setSong(null);
  //   setSongData({
  //     SongId: "",
  //     Title: "",
  //     Artist: "",
  //   });
  // };

  // const fetchSongDetails = async (songId) => {
  //   try {
  //     const response = await fetch(`http://localhost:5164/songs/${songId}`);
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch song details");
  //     }
  //     const data = await response.json();
  //     if (data.rData && data.rData.rCode === 0) {
  //       setSong(data.rData); // Set song details from API response
  //     } else {
  //       setSong(null); // Clear song details if not found
  //     }
  //   } catch (error) {
  //     console.error("Error fetching song details:", error);
  //     // Handle error (e.g., show error message)
  //   }
  // };

  // const handleDeleteSong = async () => {
  //   try {
  //     const response = await fetch(`http://localhost:5164/songs/${song.SongId}`, {
  //       method: "DELETE",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({}),
  //     });
  //     if (!response.ok) {
  //       throw new Error("Failed to delete song");
  //     }
  //     console.log("Song deleted successfully");
  //     handleClose();
  //   } catch (error) {
  //     console.error("Error deleting song:", error);
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
            Confirm Song Deletion?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body variant="left">
          <h4>Delete this song!!</h4>
          <p className="text-info text-center">Song Id: 1</p>
          <p className="text-info text-center">Title: In The Stars</p>
          <p className="text-info text-center">Artist: Benson Boone</p>
          <p className="text-info text-center">Album: Starry Nights</p>
          <p className="text-info text-center">Genre: Pop</p>
          <p className="text-info text-center">Duration: 300</p>
          <p className="text-info text-center">Popularity: 89</p>
          <p className="text-info text-center">
            Song Pic: https://alltraxs.com/collection/tracks/pic1
          </p>
          <p className="text-info text-center">
            Song Url: https://alltraxs.com/collection/tracks/url1
          </p>
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
