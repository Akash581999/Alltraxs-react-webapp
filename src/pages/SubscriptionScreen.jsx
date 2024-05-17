import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Subscription from "../components/Subscription";
import "../App.css";

const SubscriptionScreen = () => {
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
      <Subscription mode={mode} toggleMode={toggleMode} />
      <Footer mode={mode} toggleMode={toggleMode} />
    </>
  );
};

export default SubscriptionScreen;
