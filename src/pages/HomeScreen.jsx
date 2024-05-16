import React from "react";
import "../App.css";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardList from "./../components/CardList";
import MusicPlayer from "./../components/MusicPlayer";

const HomeScreen = () => {
  let [mode, setMode] = useState(`light`); //Dark mode

  let toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };
  return (
    <>
      <Header mode={mode} toggleMode={toggleMode} />
      <CardList mode={mode} toggleMode={toggleMode} />
      <MusicPlayer />
      <Footer mode={mode} toggleMode={toggleMode} />
    </>
  );
};

export default HomeScreen;
