import React, { useEffect, useState, useRef } from "react";
import useSound from "use-sound"; // for handling the sound
import song from "../audios/song1.mp3"; // importing the music
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // icons for next and previous track
// import { IconContext } from "react-icons"; // for customizing the icons
import "../styles/audioplayer.css"; // for audioplayer css

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause, duration }] = useSound(song);
  const [currTime, setCurrTime] = useState({
    min: 0,
    sec: 0,
  }); // current position of the audio in minutes and seconds

  const [seconds, setSeconds] = useState(0); // current position of the audio in seconds
  const audioRef = useRef(null);

  useEffect(() => {
    if (duration) {
      const interval = setInterval(() => {
        if (isPlaying) {
          const currentPosition = audioRef.current.currentTime;
          const min = Math.floor(currentPosition / 60);
          const sec = Math.floor(currentPosition % 60);
          setCurrTime({
            min,
            sec,
          });
          setSeconds(currentPosition);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, duration]);

  const playingButton = () => {
    if (isPlaying) {
      pause(); // this will pause the audio
      setIsPlaying(false);
    } else {
      play(); // this will play the audio
      setIsPlaying(true);
    }
  };

  const handleSeek = (e) => {
    const newPosition = parseFloat(e.target.value);
    audioRef.current.currentTime = newPosition;
    setSeconds(newPosition);
    // If audio is playing, pause and play again to apply seek
    if (isPlaying) {
      pause();
      play();
    }
  };

  return (
    <div className="component bg-dark text-light">
      <h2>Playing Now</h2>
      <img
        className="musicCover"
        src={"https://picsum.photos/100/100"}
        alt="songpic"
      />
      <div>
        <h3 className="title">In the stars</h3>
        <span className="subTitle text-light">Benson Boone</span>
      </div>
      {/* Play buttons */}
      {/* <div>
        <button className="playButton">
          <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>
        {!isPlaying ? (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </button>
        ) : (
          <button className="playButton" onClick={playingButton}>
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
      </div> */}
      {/*Old Play buttons */}
      <div className="d-flex flex-row">
        <button className="btn btn-success mx-1">
          <BiSkipPrevious />
        </button>
        <button className="btn btn-success mx-1" onClick={playingButton}>
          {isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
        </button>
        <button className="btn btn-success mx-1">
          <BiSkipNext />
        </button>
      </div>
      <div>
        <div className="time">
          <p>
            {currTime.min}:
            {currTime.sec < 10 ? `0${currTime.sec}` : currTime.sec}
          </p>
          <p>
            {Math.floor(duration / 60)}:{Math.floor((duration % 60).toFixed())}
          </p>
        </div>
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={seconds}
          className="timeline"
          onChange={handleSeek}
        />
      </div>
      <audio ref={audioRef} src={song} />
    </div>
  );
};

export default AudioPlayer;
