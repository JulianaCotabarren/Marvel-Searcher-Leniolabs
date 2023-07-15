import CardImageWrapper from "./styles/CardImageWrapper";
import CardTitleWrapper from "./styles/CardTitleWrapper";
import CardWrapper from "./styles/CardWrapper";

const Card = ({character}) => {
    const { id, name, thumbnail } = character;

  return (
    <CardWrapper>
        <CardImageWrapper src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
        <CardTitleWrapper>{name}</CardTitleWrapper>
    </CardWrapper>
  )
}

export default Card