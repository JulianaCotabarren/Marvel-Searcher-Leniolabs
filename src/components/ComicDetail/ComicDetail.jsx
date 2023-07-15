import { useContext } from "react"
import { ComicDetailContext } from "../../context/ComicDetailContext"
import ComicDetailWrapper from "./styles/ComicDetailWrapper";
import ComicDetailImageWrapper from "./styles/ComicDetailImageWrapper";
import ComicDetailTitleWrapper from "./styles/ComicDetailTitleWrapper";
import ComicDetailInfo from "./styles/ComicDetailInfoWrapper";
import ComicDetailSubTitle from "./styles/ComicDetailSubtitleWrapper";
import ComicDetailDescription from "./styles/ComicDetailDescription";

const ComicDetail = () => {
    const { comicDetail: { thumbnail, title, dates, description }} = useContext(ComicDetailContext);
    const parsedDate = new Date(dates[0].date).toDateString().slice(4);

  return (
    <ComicDetailWrapper>
        <ComicDetailImageWrapper src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} />
        <ComicDetailInfo>
            <ComicDetailTitleWrapper>{title}</ComicDetailTitleWrapper>
            <ComicDetailSubTitle>Published: {parsedDate}</ComicDetailSubTitle>
            <ComicDetailDescription>{description ? description : 'No description'}</ComicDetailDescription>    
        </ComicDetailInfo>
    </ComicDetailWrapper>
  )
}

export default ComicDetail