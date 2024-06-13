import React from "react";

const DevCard = ({ imageSrc, title, profile, responsibilities, location }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100 text-light bg-dark border-success mt-1 rounded">
        <img
          src={imageSrc}
          className="card-img-top rounded"
          alt={title}
          style={{ width: "100%", height: "30vh" }}
        />
        <div className="card-body bg-dark border-success">
          <h5 className="card-title text-wrap text-center text-primary">
            {title}
          </h5>
          <p className="card-text text-wrap text-center text-info">{profile}</p>
          <p className="card-text text-secondary text-center text-wrap ">
            {responsibilities}
          </p>
          <p className="card-text text-success text-center text-wrap mt-2">
            {location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DevCard;
