import { useContext } from 'react';
import { ComicDetailContext } from '../../context/ComicDetailContext';
import ComicDetailWrapper from './styles/ComicDetailWrapper';
import ComicDetailImageWrapper from './styles/ComicDetailImageWrapper';
import ComicDetailTitleWrapper from './styles/ComicDetailTitleWrapper';
import ComicDetailInfoWrapper from './styles/ComicDetailInfoWrapper';
import ComicDetailSubTitleWrapper from './styles/ComicDetailSubtitleWrapper';
import ComicDetailDescriptionWrapper from './styles/ComicDetailDescriptionWrapper';

const ComicDetail = () => {
  const {
    comicDetail: { thumbnail, title, dates, description },
  } = useContext(ComicDetailContext);
  const parsedDate = new Date(dates[0].date).toDateString().slice(4);

  return (
    <ComicDetailWrapper>
      <ComicDetailImageWrapper
        src={`${thumbnail.path.replace('http', 'https')}.${thumbnail.extension}`}
        alt={title}
      />
      <ComicDetailInfoWrapper>
        <ComicDetailTitleWrapper>{title}</ComicDetailTitleWrapper>
        <ComicDetailSubTitleWrapper>Published: {parsedDate}</ComicDetailSubTitleWrapper>
        <ComicDetailDescriptionWrapper>
          {description ? description : 'No description'}
        </ComicDetailDescriptionWrapper>
      </ComicDetailInfoWrapper>
    </ComicDetailWrapper>
  );
};

export default ComicDetail;
