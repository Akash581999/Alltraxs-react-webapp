import React from "react";

const DevCard = ({ imageSrc, title, profile, responsibilities, location }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card">
        <img
          src={imageSrc}
          className="card-img-top"
          alt={title}
          style={{ width: "100%", height: "30vh" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{profile}</p>
          <p className="card-text">{responsibilities}</p>
          <p className="card-text">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default DevCard;
