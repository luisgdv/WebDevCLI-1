import React from 'react';
import '../styles/Shows.css';

function ShowDetails({ show, onClose, onToggleFavorite, isFavorite }) {
  if (!show) return null;

  const stripHtml = (html) => {
    let doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <h2 className="show-title">{show.name}</h2>
        <div className="details-flex">
          {show.image && <img src={show.image.medium} alt={show.name} className="show-image-large"/>}
          <div className="details-text">
            <p className="summary">{show.summary ? stripHtml(show.summary) : "No summary available."}</p>
            <p><strong>Genres:</strong> {show.genres?.join(', ')}</p>
            <p><strong>Language:</strong> {show.language}</p>
            <p><strong>Status:</strong> {show.status}</p>
            <p><strong>Rating:</strong> {show.rating?.average ? show.rating.average : "N/A"}</p>
            <button onClick={() => onToggleFavorite(show)} className="favorite-button">
              {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowDetails;