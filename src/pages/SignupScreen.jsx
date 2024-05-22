import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SignUp from "../components/SignUp";
import "../App.css";

const SignupScreen = () => {
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
      <SignUp mode={mode} toggleMode={toggleMode} />
      <Footer mode={mode} toggleMode={toggleMode} />
    </>
  );
};

export default SignupScreen;
