import React, { useEffect, useState } from "react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";
import "../styles/musicplayer.css";
import "../styles/audioplayer.css";
import song1 from "../audios/song1.mp3";
import song2 from "../audios/song2.mp3";
import song3 from "../audios/song3.mp3";
import song4 from "../audios/song4.mp3";
import song5 from "../audios/song5.mp3";
import song6 from "../audios/song6.mp3";
import song7 from "../audios/song7.mp3";
import song8 from "../audios/song8.mp3";

const songs = [song1, song2, song3, song4, song5, song6, song7, song8];

const MusicPlayer = (props) => {
  const [audio] = useState(new Audio(songs[0]));
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentVolume, setCurrentVolume] = useState(0.5);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

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

  const playNextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    audio.src = songs[nextIndex];
    setIsPlaying(true);
    audio.play();
  };

  const playPreviousSong = () => {
    const previousIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(previousIndex);
    audio.src = songs[previousIndex];
    setIsPlaying(true);
    audio.play();
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    audio.volume = newVolume;
    setCurrentVolume(newVolume);
  };

  const decreaseVolume = () => {
    const newVolume = Math.max(0, currentVolume - 0.1);
    audio.volume = newVolume;
    setCurrentVolume(newVolume);
  };

  const increaseVolume = () => {
    const newVolume = Math.min(1, currentVolume + 0.1);
    audio.volume = newVolume;
    setCurrentVolume(newVolume);
  };

  return (
    <div
      className="component bg-dark text-light border-success"
      style={{ position: "sticky" }}
    >
      <h2 className="text-light">Playing Now</h2>
      <div className="d-flex">
        <div className="rounded">
          <img
            className="musicCover"
            src={"https://picsum.photos/100/100"}
            alt="songpic"
          />
        </div>
        <div className="mx-3 mt-3">
          <h3 className="title text-light">{props.song}Song</h3>
          <p className="subTitle text-light py-3">{props.artist}Artist</p>
        </div>
      </div>
      <div className="mx-1">
        <button className="playButton" onClick={playPreviousSong}>
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
        <button className="playButton" onClick={playNextSong}>
          <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
            <BiSkipNext />
          </IconContext.Provider>
        </button>
      </div>
      <div className="bg-dark">
        <div className="p-1 mb-3">
          <button className="playButton" onClick={decreaseVolume}>
            <i className="fa fa-volume-down text-light"></i>
          </button>
          <input
            className="my-1"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={currentVolume}
            onChange={handleVolumeChange}
          />
          <button className="playButton" onClick={increaseVolume}>
            <i className="fa fa-volume-up text-light"></i>
          </button>
        </div>
        <div className="time">
          <p className="text-light">
            {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60)}
          </p>
          <input
            className="mb-3 mx-1"
            type="range"
            min="0"
            max={audio.duration || 0}
            value={currentTime}
            onChange={handleSeek}
          />
          <p className="text-light">
            {Math.floor(audio.duration / 60)}:{Math.floor(audio.duration % 60)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
