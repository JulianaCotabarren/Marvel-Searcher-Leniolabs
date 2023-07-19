import { useContext, useState } from 'react';
import { ComicsContext } from '../../context/ComicsContext';
import { FavoritesContext } from '../../context/FavoritesContext';
import Modal from '../Modal/Modal';
import Star from '../commons/Star/Star';
import CardImageWrapper from './styles/CardImageWrapper';
import CardTitleWrapper from './styles/CardTitleWrapper';
import CardWrapper from './styles/CardWrapper';
import CardStarWrapper from './styles/CardStarWrapper';
import marvelCharacters from '../../assets/images/marvelCharacters.jpg';

const Card = ({ character }) => {
  const { id, name, thumbnail, comics } = character;
  const [showModal, setShowModal] = useState(false);
  const { setLoading, setCollectionUri } = useContext(ComicsContext);
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

  const isFavorite = favorites.some((favorite) => favorite.id === id);
  const thumbnailPath = thumbnail.path.replace('http', 'https');

  const imgSrc = thumbnailPath.includes('image_not_available')
    ? `${marvelCharacters}`
    : `${thumbnailPath}.${thumbnail.extension}`;

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
        <CardImageWrapper src={imgSrc} alt={name} />
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
