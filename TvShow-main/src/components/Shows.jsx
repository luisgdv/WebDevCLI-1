import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Shows.css';

function Shows({ onShowSelect }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    try {
      setError(null);
      const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching shows:", error);
      setError("Could not fetch shows. Please try again.");
    }
  };

  return (
    <div className="shows-container">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a TV show..."
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      {error && <p className="error-message">{error}</p>}

      <div className="results-grid">
        {results.map(({ show }) => (
          <div key={show.id} className="show-card" onClick={() => onShowSelect(show)}>
            {show.image && <img src={show.image.medium} alt={show.name} />}
            <h3 className="show-name">{show.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shows;