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
