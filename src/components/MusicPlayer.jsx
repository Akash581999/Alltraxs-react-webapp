import React, { useEffect, useState } from "react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import PlaylistAdd from "./PlaylistAdd";
import playingif from "../images/playing.gif";
import "../styles/musicplayer.css";

const songs = [...Array(8)].map((_, index) =>
  require(`../audios/song${index + 1}.mp3`)
);
const MusicPlayer = ({ song }) => {
  const [audio] = useState(new Audio(song.preview_url));
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentVolume, setCurrentVolume] = useState(0.5);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [playlist, setPlaylist] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audio.play();
      setIsVisible(true);
    } else {
      audio.pause();
      setIsVisible(false);
    }
  }, [isPlaying, audio]);

  useEffect(() => {
    const updateCurrentTime = () => setCurrentTime(audio.currentTime);
    audio.addEventListener("timeupdate", updateCurrentTime);
    return () => audio.removeEventListener("timeupdate", updateCurrentTime);
  }, [audio]);

  const addToPlaylist = (song) => {
    setPlaylist([...playlist, song]);
  };

  const removeFromPlaylist = (song) => {
    setPlaylist(playlist.filter((item) => item !== song));
  };

  const isInPlaylist = (song) => {
    return playlist.includes(song);
  };

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
    <div className="component bg-dark text-light border-success navbar fixed-bottom z-1">
      <div className="d-flex flex-row justify-content-evenly align-items-center flex-nowrap">
        <h2 className="text-success p-2">Playing</h2>
        <div className="rounded align-self-center">
          <img
            className="musicCover"
            style={{ width: 100, height: 100 }}
            src={song.album.images[0].url}
            alt="songpic"
          />
        </div>
        <div className="mx-1 mt-3">
          <h3 className="title text-light">{song.name}</h3>
          <p className="subTitle text-light py-3">{song.artists[0].name}</p>
        </div>
      </div>
      {/* Add to playlist button */}
      <div className="mx-1">
        <PlaylistAdd
          currentSong={song}
          addToPlaylist={addToPlaylist}
          removeFromPlaylist={removeFromPlaylist}
          isInPlaylist={isInPlaylist}
        />
        <ul className="list-group">
          {playlist.map((index) => (
            <li className="list-group-item selected text-center" key={index}>
              Added to Liked songs
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-1">
        <button className="playButton" onClick={playPreviousSong}>
          <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>
        <button
          className="playButton"
          onClick={() => {
            togglePlay();
          }}
        >
          <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
            {isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
          </IconContext.Provider>
        </button>
        <button className="playButton" onClick={playNextSong}>
          <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
            <BiSkipNext />
          </IconContext.Provider>
        </button>
      </div>
      <button className="btn btn-outline-success" type="button">
        <span className="text-success">Like</span>&nbsp;
        <i className="fa fa-thumbs-up text-success"></i>
      </button>
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
      {isVisible && (
        <img src={playingif} alt="playingif" style={{ height: "8vh" }} />
      )}
      <div className="mb-1 d-flex flex-row">
        <Link to="/SubscriptionScreen" className="text-success">
          Get subscription for <br />
          premium features
        </Link>
      </div>
    </div>
  );
};

export default MusicPlayer;
