import './App.css'
import React, { useState } from 'react';
import Shows from './components/Shows';
import ShowDetails from './components/ShowDetails';
import Favorites from './components/Favorites';
import './styles/Shows.css';

function App() {
  const [selectedShow, setSelectedShow] = useState(null);
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);

  const handleSelectShow = (show) => {
    setSelectedShow(show);
  };

  const handleCloseDetails = () => {
    setSelectedShow(null);
  };

  const handleToggleFavorite = (show) => {
    const isFavorite = favorites.find((fav) => fav.id === show.id);
    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = favorites.filter((fav) => fav.id !== show.id);
    } else {
      updatedFavorites = [...favorites, show];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="App">
      <div className='container'>
        <h1 className="titulo">TV Show Search</h1>
        
        <Shows onShowSelect={handleSelectShow} />

        {selectedShow && (
          <ShowDetails 
            show={selectedShow} 
            onClose={handleCloseDetails} 
            onToggleFavorite={handleToggleFavorite}
            isFavorite={!!favorites.find((fav) => fav.id === selectedShow.id)}
          />
        )}
        
        <Favorites favorites={favorites} onShowSelect={handleSelectShow} onToggleFavorite={handleToggleFavorite} />
      </div>
    </div>
  );
}

export default App;