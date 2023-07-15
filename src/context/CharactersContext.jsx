import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react"
import { API_URL, AUTH_QUERIES, TOTAL_CHARACTERS } from "../constants";
import { getRandomInt } from "../utils/getRandomInt";
import qs from "query-string";

export const CharactersContext = createContext();

const CharactersProvider = ({children}) => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [limit, setLimit] = useState(20);
    const [search, setSearch] = useState(null);
    const [urlCharacters, setUrlCharacters] = useState([]);

    useEffect(() => {
      if (!window.location.search) return;  
      const urlQueries = qs.parseUrl(window.location.search).query;
      const queryCharacters = urlQueries.character ? qs.parse(`character=${urlQueries.character}`, { arrayFormat: 'comma' }).character : [];      
      let charactersByNameResponse = [];  
      const getUrlCharacter = async name => {
        const characterByName = await axios.get(`${API_URL}/characters?name=${name}&${AUTH_QUERIES}`);
        charactersByNameResponse.push(characterByName.data.data.results[0]);
      };
      queryCharacters.forEach(character => getUrlCharacter(character.replace('"', '')));
      setLoading(false);
      setUrlCharacters(charactersByNameResponse);
    }, []);

    useEffect(() => {
      const searchQueries = () => search ? `&nameStartsWith=${search}` : `&offset=${getRandomInt(0, TOTAL_CHARACTERS)}`;
      const getCharacters = async() => {
        const charactersResponse = await axios.get(`${API_URL}/characters?${AUTH_QUERIES}${searchQueries()}&limit=${limit}`);
        setLoading(false);
        setCharacters(charactersResponse.data.data.results);
      };
      getCharacters();
    }, [search]);   

  return (
    <CharactersContext.Provider value={{ characters, loading, urlCharacters, setLoading, setLimit, setSearch, setUrlCharacters }}>
        {children}
    </CharactersContext.Provider>
  )
}

export default CharactersProvider;