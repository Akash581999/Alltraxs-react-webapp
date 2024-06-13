import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutGallery from "../components/AboutGallery";
import "../App.css";

const AboutScreen = () => {
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
      <AboutGallery mode={mode} toggleMode={toggleMode} />
      <Footer mode={mode} toggleMode={toggleMode} />
    </>
  );
};

export default AboutScreen;
