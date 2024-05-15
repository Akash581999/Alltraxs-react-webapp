import React, { useEffect, useState } from "react";
import song from "../audios/song1.mp3"; // importing the music
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // icons for next and previous track
import { IconContext } from "react-icons"; // for customizing the icons
import "../styles/musicplayer.css"; // for musicplayer css
import "../styles/audioplayer.css"; // for audioplayer css

const SimpleMusicPlayer = () => {
  const [audio] = useState(new Audio(song));
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, audio]);

  useEffect(() => {
    const updateCurrentTime = () => setCurrentTime(audio.currentTime);
    audio.addEventListener("timeupdate", updateCurrentTime);
    return () => audio.removeEventListener("timeupdate", updateCurrentTime);
  }, [audio]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const handleSeek = (e) => {
    const newPosition = parseFloat(e.target.value);
    audio.currentTime = newPosition;
    setCurrentTime(newPosition);
  };

  return (
    <div
      className="component bg-dark text-light border-success"
      style={{ position: "sticky" }}
    >
      <h2 className="">Playing Now</h2>
      <div className="d-flex">
        <div className="">
          <img
            className="musicCover rounded"
            src={"https://picsum.photos/100/100"}
            alt="songpic"
          />
        </div>
        <div className="mx-3 mt-3">
          <h3 className="title text-light">In the stars</h3>
          <p className="subTitle text-light py-3">Benson Boone</p>
        </div>
      </div>
      {/* Play buttons */}
      <div className="">
        <button className="playButton">
          <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>
        {!isPlaying ? (
          <button className="playButton" onClick={togglePlay}>
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </button>
        ) : (
          <button className="playButton" onClick={togglePlay}>
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <AiFillPauseCircle />
            </IconContext.Provider>
          </button>
        )}
        <button className="playButton">
          <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
            <BiSkipNext />
          </IconContext.Provider>
        </button>
      </div>
      {/* <div className="d-flex flex-row">
        <button className="btn btn-success mx-1">
          <BiSkipPrevious />
        </button>
        <button className="btn btn-success mx-1" onClick={togglePlay}>
          {isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
        </button>
        <button className="btn btn-success mx-1">
          <BiSkipNext />
        </button>
      </div> */}
      <div className="bg-dark">
        <div className="time">
          <p className="text-light">
            {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60)}
          </p>
          <p className="text-light">
            {Math.floor(audio.duration / 60)}:{Math.floor(audio.duration % 60)}
          </p>
        </div>
        <input
          className=""
          type="range"
          min="0"
          max={audio.duration || 0}
          value={currentTime}
          onChange={handleSeek}
        />
      </div>
    </div>
  );
};

export default SimpleMusicPlayer;
