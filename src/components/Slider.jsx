import React from "react";
import BgImg1 from "../covers/bgcover1.jpg";
import BgImg2 from "../covers/bgcover2.jpg";
import BgImg3 from "../covers/bgcover3.jpg";
import BgImg4 from "../covers/bgcover4.webp";

const covers = [
  {
    url: BgImg1,
    title: "First Slide",
    description: "Some description for the first slide",
  },
  {
    url: BgImg2,
    title: "Second Slide",
    description: "Some description for the second slide",
  },
  {
    url: BgImg3,
    title: "Third Slide",
    description: "Some description for the third slide",
  },
  {
    url: BgImg4,
    title: "Fourth Slide",
    description: "Some description for the Fourth slide",
  },
];

const Slider = ({ mode }) => {
  return (
    <div className={`bg-${mode}`}>
      <div className="container border-success">
        <div
          id="carouselExampleCaptions"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators rounded">
            {covers.map((_cover, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="carousel-inner rounded">
            {covers.map((cover, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  className="musicCover rounded"
                  src={cover.url}
                  alt={`Slide ${index + 1}`}
                  style={{ width: "100%", height: "70vh" }}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{cover.title}</h5>
                  <p>{cover.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="visually-hidden">Previous</span>
            <i className="fas fa-chevron-left fa-2x"></i>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="visually-hidden">Next</span>
            <i className="fas fa-chevron-right fa-2x"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
