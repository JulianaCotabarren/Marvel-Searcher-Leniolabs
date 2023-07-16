import { useState } from "react";
import { createContext } from "react";
import useFavorites from "../hooks/useFavorites";

export const FavoritesContext = createContext();

const FavoritesProvider = ({children}) => {
  const { 
    favorites, 
    addFavorite, 
    removeFavorite 
  } = useFavorites();

  return (
    <FavoritesContext.Provider 
      value={{ 
        favorites, 
        addFavorite, 
        removeFavorite 
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesProvider