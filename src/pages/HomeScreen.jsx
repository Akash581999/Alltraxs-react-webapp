import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Album from "../components/Album";
// import CardList from "./../components/CardList";
import "../App.css";

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
      <Album mode={mode} toggleMode={toggleMode} />
      {/* <CardList mode={mode} toggleMode={toggleMode} /> */}
      <Footer mode={mode} toggleMode={toggleMode} />
    </>
  );
};

export default HomeScreen;
