import React from "react";
import "../App.css";
import { useState } from "react";
import DashBoard from "../components/DashBoard";
import MusicPlayer from "../components/MusicPlayer";

const DashBoardScreen = () => {
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
      <DashBoard mode={mode} toggleMode={toggleMode} />
      <MusicPlayer mode={mode} toggleMode={toggleMode} />
    </>
  );
};

export default DashBoardScreen;
