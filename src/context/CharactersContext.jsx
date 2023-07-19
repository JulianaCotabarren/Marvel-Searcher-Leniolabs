import { createContext } from 'react';
import useCharacters from '../hooks/useCharacters';

export const CharactersContext = createContext();

const CharactersProvider = ({ children }) => {
  const {
    characters,
    loading,
    limit,
    search,
    urlCharacters,
    urlComics,
    setLoading,
    setLimit,
    setSearch,
    setUrlCharacters,
    setUrlComics,
  } = useCharacters();

  return (
    <CharactersContext.Provider
      value={{
        characters,
        loading,
        limit,
        search,
        urlCharacters,
        urlComics,
        setLoading,
        setLimit,
        setSearch,
        setUrlCharacters,
        setUrlComics,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export default CharactersProvider;
