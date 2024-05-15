import React from "react";
import PlaySong from "./PlaySong";

const Cards = (props) => {
  // Assuming your images are located in a directory called "images"
  // const importAll = (r) => {
  //   let images = {};
  //   r.keys().map((item, index) => {
  //     images[item.replace("./", "")] = r(item);
  //     return null;
  //   });
  //   return images;
  // };

  // const images = importAll(
  //   require.context("../images", false, /\.(png|jpe?g|svg)$/)
  // );

  return (
    <>
      <div className={`bg-${props.mode}`}>
        <div className="container mt-3">
          <div className="row row-cols-md-8 g-2">
            <div className="col">
              <div
                className="card h-100 text-light bg-dark border-success"
                style={{ maxWidth: "360px" }}
              >
                <img
                  // src={images[props.imageName]}
                  src={props.images}
                  className="card-img-top rounded"
                  alt="songpic"
                  style={{ height: 240 }}
                />
                <div className="card-body text-light bg-dark border-success">
                  <h5 className="card-title">{props.title}</h5>
                  <p className="card-text">{props.description}</p>
                </div>
                <div className="card-footer bg-dark border-success">
                <small className="text-secondary">{props.status}</small>
                &nbsp;
                  <button
                    onClick={PlaySong}
                    type="button"
                    className="btn btn-success"
                  >
                    Play now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
