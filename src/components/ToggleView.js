import React, { useState, useEffect } from "react";
import "../styles/toggleview.css";

const ToggleView = () => {
  const [isGrid, setIsGrid] = useState(true);

  useEffect(() => {
    const toggleView = () => {
      setIsGrid(!isGrid);
    };

    const container = document.querySelector(".container");
    if (container) {
      if (isGrid) {
        container.classList.remove("tiles-view");
        container.classList.add("grid-view");
      } else {
        container.classList.remove("grid-view");
        container.classList.add("tiles-view");
      }
    }

    // Cleanup function to remove event listener
    return () => {
      const button = document.querySelector(".toggle-button");
      if (button) {
        button.removeEventListener("click", toggleView);
      }
    };
  }, [isGrid]);

  return (
    <div>
      <button className="toggle-button" onClick={() => setIsGrid(!isGrid)}>
        {isGrid ? "Switch to Tiles View" : "Switch to Grid View"}
      </button>
      <div className="container grid-view">
        {/* Hardcoded card items */}
        <div className="card">
          <img src="song1.jpg" alt="Song 1" />
          <div>
            <h3>Song 1</h3>
            <p>Artist 1</p>
          </div>
        </div>
        <div className="card">
          <img src="song2.jpg" alt="Song 2" />
          <div>
            <h3>Song 2</h3>
            <p>Artist 2</p>
          </div>
        </div>
        <div className="card">
          <img src="song3.jpg" alt="Song 3" />
          <div>
            <h3>Song 3</h3>
            <p>Artist 3</p>
          </div>
        </div>
        <div className="card">
          <img src="song1.jpg" alt="Song 1" />
          <div>
            <h3>Song 1</h3>
            <p>Artist 1</p>
          </div>
        </div>
        <div className="card">
          <img src="song2.jpg" alt="Song 2" />
          <div>
            <h3>Song 2</h3>
            <p>Artist 2</p>
          </div>
        </div>
        <div className="card">
          <img src="song3.jpg" alt="Song 3" />
          <div>
            <h3>Song 3</h3>
            <p>Artist 3</p>
          </div>
        </div>
        <div className="card">
          <img src="song1.jpg" alt="Song 1" />
          <div>
            <h3>Song 1</h3>
            <p>Artist 1</p>
          </div>
        </div>
        <div className="card">
          <img src="song2.jpg" alt="Song 2" />
          <div>
            <h3>Song 2</h3>
            <p>Artist 2</p>
          </div>
        </div>
        <div className="card">
          <img src="song3.jpg" alt="Song 3" />
          <div>
            <h3>Song 3</h3>
            <p>Artist 3</p>
          </div>
        </div>
        <div className="card">
          <img src="song3.jpg" alt="Song 3" />
          <div>
            <h3>Song 3</h3>
            <p>Artist 3</p>
          </div>
        </div>
        <div className="card">
          <img src="song1.jpg" alt="Song 1" />
          <div>
            <h3>Song 1</h3>
            <p>Artist 1</p>
          </div>
        </div>
        <div className="card">
          <img src="song2.jpg" alt="Song 2" />
          <div>
            <h3>Song 2</h3>
            <p>Artist 2</p>
          </div>
        </div>
        <div className="card">
          <img src="song3.jpg" alt="Song 3" />
          <div>
            <h3>Song 3</h3>
            <p>Artist 3</p>
          </div>
        </div>
        <div className="card">
          <img src="song1.jpg" alt="Song 1" />
          <div>
            <h3>Song 1</h3>
            <p>Artist 1</p>
          </div>
        </div>
        <div className="card">
          <img src="song2.jpg" alt="Song 2" />
          <div>
            <h3>Song 2</h3>
            <p>Artist 2</p>
          </div>
        </div>
        <div className="card">
          <img src="song3.jpg" alt="Song 3" />
          <div>
            <h3>Song 3</h3>
            <p>Artist 3</p>
          </div>
        </div>
        <div className="card">
          <img src="song1.jpg" alt="Song 1" />
          <div>
            <h3>Song 1</h3>
            <p>Artist 1</p>
          </div>
        </div>
        <div className="card">
          <img src="song2.jpg" alt="Song 2" />
          <div>
            <h3>Song 2</h3>
            <p>Artist 2</p>
          </div>
        </div>
        <div className="card">
          <img src="song3.jpg" alt="Song 3" />
          <div>
            <h3>Song 3</h3>
            <p>Artist 3</p>
          </div>
        </div>
        <div className="card">
          <img src="song3.jpg" alt="Song 3" />
          <div>
            <h3>Song 3</h3>
            <p>Artist 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToggleView;
