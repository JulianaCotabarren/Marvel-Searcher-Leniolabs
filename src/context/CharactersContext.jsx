import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react"
import { API_URL, AUTH_QUERIES } from "../constants";

export const CharactersContext = createContext();

const CharactersProvider = ({children}) => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
      const getCharacters = async() => {
        const charactersResponse = await axios.get(`${API_URL}/characters?${AUTH_QUERIES}`);
        setCharacters(charactersResponse.data.data.results);
      };
      getCharacters();
    }, []);   

  return (
    <CharactersContext.Provider value={{ characters }}>
        {children}
    </CharactersContext.Provider>
  )
}

export default CharactersProvider