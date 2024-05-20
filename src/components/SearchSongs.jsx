import React, { useState } from "react";
import "../styles/searchsongs.css";

// Song array with song names
const songs = [
  "In the stars",
  "Let her go",
  "Hurts so good",
  "Dandelions",
  "Until i found you",
  "A thousand years",
  "IDFC",
  "Feel it",
  "I wanna be yours",
  "Those eyes",
  "No surprises",
  "Starboy",
  "Night Changes",
  "The Night We Met",
  "Another Love",
  "Fairytale",
  "Here With Me",
  "Romantic Homicide",
];
// Song object with song name,artist,pic
// const songs = [
//   {
//     song: "Stay",
//     artist: "The Kid LAROI & Justin Bieber",
//     pic: "stay_cover.jpg",
//   },
//   {
//     song: "Industry Baby",
//     artist: "Lil Nas X & Jack Harlow",
//     pic: "industry_baby_cover.jpg",
//   },
//   { song: "Good 4 U", artist: "Olivia Rodrigo", pic: "good_4_u_cover.jpg" },
//   {
//     song: "Kiss Me More",
//     artist: "Doja Cat ft. SZA",
//     pic: "kiss_me_more_cover.jpg",
//   },
//   {
//     song: "Montero (Call Me By Your Name)",
//     artist: "Lil Nas X",
//     pic: "montero_cover.jpg",
//   },
//   {
//     song: "Levitating",
//     artist: "Dua Lipa ft. DaBaby",
//     pic: "levitating_cover.jpg",
//   },
//   { song: "Butter", artist: "BTS", pic: "butter_cover.jpg" },
//   {
//     song: "Save Your Tears",
//     artist: "The Weeknd & Ariana Grande",
//     pic: "save_your_tears_cover.jpg",
//   },
// ];

const SearchSongs = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);
    handleSubmit(inputValue);
  };

  const handleSubmit = (value) => {
    const filteredResults = songs.filter((name) =>
      name.toLowerCase().includes(value.toLowerCase())
    );
    setResults(filteredResults);
    setShowResults(true);
  };

  return (
    <div className="search-container d-flex">
      <form
        role="search"
        className="search-form d-flex"
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          className="search-input form-control form-control-dark w-100"
          type="search"
          placeholder="Search songs or artists..."
          aria-label="Search"
          value={query}
          onChange={handleInputChange}
          onFocus={() => setShowResults(true)}
        />
        <button
          className="btn btn-outline-success mx-2"
          type="submit"
          onClick={() => setShowResults(!showResults)}
        >
          <i className="fa fa-search"></i>
        </button>
      </form>
      {showResults && (
        <div className="results">
          {results.length ? (
            results.map((name, index) => <div key={index}>{name}</div>)
          ) : (
            <div className="no-results">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};
export default SearchSongs;
