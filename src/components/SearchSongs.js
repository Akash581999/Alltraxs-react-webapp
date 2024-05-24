import React, { useState, useEffect } from "react";
import "../styles/searchsongs.css";

const SearchSongs = ({ onSearch }) => {
  const [songs, setSongs] = useState([]);
  const [token, setToken] = useState("");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    getToken();
  }, []);
  const getToken = async () => {
    try {
      const clientId = "100f567839434193a748e863eefd7ce5";
      const clientSecret = "fff3195cb1d1428faee5a8059e17f988";

      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${btoa(clientId + ":" + clientSecret)}`,
        },
        body: "grant_type=client_credentials",
      });

      const data = await response.json();
      setToken(data.access_token);
    } catch (error) {
      console.error("Error fetching token:", error);
    }
  };
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);
    if (inputValue.trim() === "") {
      setResults([]);
      setShowResults(false);
    } else {
      handleSearch(inputValue);
    }
  };

  const handleSearch = async (searchValue) => {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${searchValue}&type=track`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const data = await response.json();
      setResults(data.tracks.items.map((item) => item.name));
      setShowResults(true);
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
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
          type="button"
          onClick={() => setShowResults(!showResults)}
        >
          <i className="fa fa-search"></i>
        </button>
      </form>
      {showResults && (
        <div className="results">
          {results.length ? (
            results.map((name, index) => (
              <div
                key={index}
                className="result"
                onClick={() => console.log(name)}
              >
                {name}
              </div>
            ))
          ) : (
            <div className="no-results">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchSongs;
