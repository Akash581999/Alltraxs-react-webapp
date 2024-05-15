import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../components/Login";
import "../App.css";
import { useState } from "react";

const LoginScreen = () => {
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
      <Login mode={mode} toggleMode={toggleMode} />
      <Footer mode={mode} toggleMode={toggleMode} />
    </>
  );
};

export default LoginScreen;
