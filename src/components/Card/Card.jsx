import { useContext, useState } from "react";
import CardImageWrapper from "./styles/CardImageWrapper";
import CardTitleWrapper from "./styles/CardTitleWrapper";
import CardWrapper from "./styles/CardWrapper";
import { ComicsContext } from "../../context/ComicsContext";
import Modal from "../Modal/Modal";

const Card = ({character}) => {
    const { id, name, thumbnail, comics } = character;
    const { setLoading, setCollectionUri } = useContext(ComicsContext);
    const [showModal, setShowModal] = useState(false);

    const handleOpen = () => {
      setLoading(true);
      setCollectionUri(comics.collectionURI);
      setShowModal(true);
    };
    const handleClose = () => {
      setCollectionUri(null);
      setShowModal(false);
    };

  return (
    <>
      <CardWrapper onClick={handleOpen}>
          <CardImageWrapper src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
          <CardTitleWrapper>{name}</CardTitleWrapper>
      </CardWrapper>
      { showModal && <Modal show={showModal} handleClose={handleClose} /> }
    </>  
  );
};

export default Card;