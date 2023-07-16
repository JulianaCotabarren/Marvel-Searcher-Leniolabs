import { useState } from "react";
import { createContext } from "react";


export const FavoritesContext = createContext();

const FavoritesProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = character => {
        setFavorites([...favorites, character]);
    }

    const removeFavorite = character => {
        setFavorites([...favorites.filter(favorite => favorite.id !== character.id)]);
    }

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
        {children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesProvider