import React from "react";
import ReactPlayer from "react-player";
import "../styles/playsong.css";

const PlaySong = () => {
  return (
    <div className="audio-player-container">
      <ReactPlayer
        url={require("../audios/song1.mp3")}
        controls
        playing
        className="react-player"
      />
    </div>
  );
};

export default PlaySong;
