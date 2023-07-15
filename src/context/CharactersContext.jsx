import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react"
import { API_URL, AUTH_QUERIES, TOTAL_CHARACTERS } from "../constants";
import { getRandomInt } from "../utils/getRandomInt";

export const CharactersContext = createContext();

const CharactersProvider = ({children}) => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [limit, setLimit] = useState(20);

    useEffect(() => {
      const getCharacters = async() => {
        const charactersResponse = await axios.get(`${API_URL}/characters?${AUTH_QUERIES}&offset=${getRandomInt(0, TOTAL_CHARACTERS)}&limit=${limit}`);
        setLoading(false);
        setCharacters(charactersResponse.data.data.results);
      };
      getCharacters();
    }, []);   

  return (
    <CharactersContext.Provider value={{ characters, loading, setLoading, setLimit }}>
        {children}
    </CharactersContext.Provider>
  )
}

export default CharactersProvider;