import React, { useState } from "react";
// import Header from "../components/Header";
import Admin from "../components/Admin";
import Footer from "../components/Footer";
import "../App.css";

const AdminPage = () => {
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
      {/* <Header /> */}
      <Admin mode={mode} toggleMode={toggleMode} />
      <Footer />
    </>
  );
};

export default AdminPage;
