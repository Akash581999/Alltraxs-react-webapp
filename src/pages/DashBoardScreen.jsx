import React, { useState } from "react";
import DashBoard from "../components/DashBoard";
import "../App.css";

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
    </>
  );
};

export default DashBoardScreen;
