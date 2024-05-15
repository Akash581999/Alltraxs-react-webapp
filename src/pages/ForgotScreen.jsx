import React from "react";
import { useState } from "react";
import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ResetForm from "../components/ResetForm";

const ForgotScreen = () => {
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
      <ResetForm mode={mode} toggleMode={toggleMode} />
      <Footer mode={mode} toggleMode={toggleMode} />
    </>
  );
};

export default ForgotScreen;
