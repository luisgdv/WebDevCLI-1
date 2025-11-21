import React from 'react';
import '../styles/Shows.css';

function Favorites({ favorites, onShowSelect, onToggleFavorite }) {
  return (
    <div className="favorites-section">
      <h2 className="favorites-title">My Favorite Shows</h2>
      {favorites.length > 0 ? (
        <div className="favorites-grid">
          {favorites.map((show) => (
            <div key={show.id} className="favorite-card">
              <div onClick={() => onShowSelect(show)}>
                {show.image && <img src={show.image.medium} alt={show.name} />}
                <h3 className="show-name">{show.name}</h3>
              </div>
              <button onClick={() => onToggleFavorite(show)} className="remove-favorite-button">
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>(You haven't added any favorite shows yet.)</p>
      )}
    </div>
  );
}

export default Favorites;