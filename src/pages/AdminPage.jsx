import React, { useState } from "react";
import AdminNav from "../components/AdminNav";
import AdminHome from "../components/AdminHome";
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
      <AdminNav mode={mode} toggleMode={toggleMode} />
      <AdminHome mode={mode} toggleMode={toggleMode} />
      <Footer mode={mode} toggleMode={toggleMode} />
    </>
  );
};

export default AdminPage;
