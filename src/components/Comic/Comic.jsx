import ComicDescriptionWrapper from './styles/ComicDescriptionWrapper';
import ComicImageWrapper from './styles/ComicImageWrapper';
import ComicInfoWrapper from './styles/ComicInfoWrapper';
import ComicTitleWrapper from './styles/ComicTitleWrapper';
import ComicWrapper from './styles/ComicWrapper';

const Comic = ({ comic }) => {
  const { title, description, thumbnail } = comic;

  return (
    <ComicWrapper>
      <ComicImageWrapper src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} />
      <ComicInfoWrapper>
        <ComicTitleWrapper>{title}</ComicTitleWrapper>
        <ComicDescriptionWrapper>
          {description ? description : 'No description'}
        </ComicDescriptionWrapper>
      </ComicInfoWrapper>
    </ComicWrapper>
  );
};

export default Comic;
