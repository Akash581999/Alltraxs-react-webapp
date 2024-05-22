import React from "react";
import MusicPlayer from "./MusicPlayer";

const Cards = (props) => {
  return (
    <>
      <div className={`bg-${props.mode}`}>
        <div className="container mt-3">
          <div className="row row-cols-md-8 g-2">
            <div className="col">
              <div
                className="card h-100 text-light bg-dark border-success mt-1"
                style={{ maxWidth: 360 }}
              >
                <img
                  src={props.images}
                  className="card-img-top rounded"
                  alt="songimage"
                  style={{ height: 260 }}
                />
                <div className="card-body text-light bg-dark border-success">
                  <h5 className="card-title text-wrap">{props.title}</h5>
                  <p className="card-text text-wrap">{props.description}</p>
                  <span className="text-secondary text-wrap">
                    {props.album}
                  </span>
                </div>
                <div className="card-footer border-success d-flex flex-row justify-content-between">
                  <small className="text-secondary mt-2">
                    {Math.floor(props.duration_ms / 60 / 60 / 24)}:
                    {Math.floor(props.duration_ms % 60)} mins
                  </small>
                  <small className="text-secondary text-wrap mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-fire"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
                    </svg>
                    {props.popularity}
                  </small>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={MusicPlayer}
                  >
                    Play now
                  </button>
                </div>
                <audio controls className="d-none mb-3 mx-3">
                  <source src={props.preview_url} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
