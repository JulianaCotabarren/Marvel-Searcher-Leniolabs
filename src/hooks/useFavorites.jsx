import { useState } from 'react';

const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (character) => {
    setFavorites([...favorites, character]);
  };
  const removeFavorite = (character) => {
    setFavorites([...favorites.filter((favorite) => favorite.id !== character.id)]);
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
  };
};

export default useFavorites;
