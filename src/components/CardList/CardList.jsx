import { useContext } from 'react';
import { useLocation } from 'react-router';
import { CharactersContext } from '../../context/CharactersContext';
import { FavoritesContext } from '../../context/FavoritesContext';
import Card from '../Card/Card';
import CardsListWrapper from './styles/CardListWrapper';

const CardList = () => {
  const { pathname } = useLocation();
  const { characters, urlCharacters } = useContext(CharactersContext);
  const { favorites } = useContext(FavoritesContext);

  const filteredCharacters = () => {
    if (pathname === '/') {
      if (urlCharacters.length) return urlCharacters;
      if (characters.length) return characters;
      return 'No results';
    }
    if (favorites.length) return favorites;
    return 'No favorites';
  };

  return (
    <CardsListWrapper>
      {typeof filteredCharacters() === 'string'
        ? filteredCharacters()
        : filteredCharacters().map((character) => (
            <Card key={character.id} character={character} />
          ))}
    </CardsListWrapper>
  );
};

export default CardList;
