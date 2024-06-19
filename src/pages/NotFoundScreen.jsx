import React from "react";
import notfound from "../images/bgimgnotfound.jpg";

const NotFoundScreen = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      {/* <h1 className="text-danger">Error 404</h1>
      <h2 className="text-dark">Requested page not found</h2> */}
      <img
        src={notfound}
        alt="bgimgnotfound"
        style={{ height: "100vh", width: "100vw" }}
      />
    </div>
  );
};

export default NotFoundScreen;
