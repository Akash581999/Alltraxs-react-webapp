import React from "react";
// import notfound from "../images/bgimgnotfound.jpg";

const NotFoundScreen = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh", backgroundColor: "rgb(139, 8, 255)" }}
    >
      <h1 className="text-danger">Error 404</h1>
      <h2 className="text-light">Requested page not found....</h2>
      {/* <img
        src={notfound}
        alt="bgimgnotfound"
        style={{ height: "100vh", width: "100vw", objectFit: "contain" }}
      /> */}
    </div>
  );
};

export default NotFoundScreen;
