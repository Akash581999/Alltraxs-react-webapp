import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Slider from "../components/Slider";
import ImageGallery from "../components/ImageGallery";
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
      {/* <Slider mode={mode} toggleMode={toggleMode} /> */}
      <ImageGallery mode={mode} toggleMode={toggleMode} />
      <Footer mode={mode} toggleMode={toggleMode} />
    </>
  );
};

export default AboutScreen;
