import { useContext, useState } from 'react';
import CardImageWrapper from './styles/CardImageWrapper';
import CardTitleWrapper from './styles/CardTitleWrapper';
import CardWrapper from './styles/CardWrapper';
import { ComicsContext } from '../../context/ComicsContext';
import Modal from '../Modal/Modal';
import Star from '../commons/Star/Star';
import { FavoritesContext } from '../../context/FavoritesContext';
import CardStarWrapper from './styles/CardStarWrapper';

const Card = ({ character }) => {
  const { id, name, thumbnail, comics } = character;
  const [showModal, setShowModal] = useState(false);
  const { setLoading, setCollectionUri } = useContext(ComicsContext);
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

  const isFavorite = favorites.some((favorite) => favorite.id === id);

  const handleOpen = () => {
    setLoading(true);
    setCollectionUri(comics.collectionURI);
    setShowModal(true);
  };
  const handleClose = () => {
    setCollectionUri(null);
    setShowModal(false);
  };
  const handleStarClick = (event) => {
    event.stopPropagation();
    isFavorite ? removeFavorite(character) : addFavorite(character);
  };

  return (
    <>
      <CardWrapper onClick={handleOpen}>
        <CardImageWrapper src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
        <CardTitleWrapper>{name}</CardTitleWrapper>
        <CardStarWrapper onClick={handleStarClick}>
          <Star fill={isFavorite} />
        </CardStarWrapper>
      </CardWrapper>
      {showModal && <Modal show={showModal} handleClose={handleClose} title={name} />}
    </>
  );
};

export default Card;
