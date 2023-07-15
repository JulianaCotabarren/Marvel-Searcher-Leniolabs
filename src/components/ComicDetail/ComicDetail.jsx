import { useContext } from "react"
import { ComicDetailContext } from "../../context/ComicDetailContext"

const ComicDetail = () => {
    const { comicDetail: { thumbnail, title, dates, description }} = useContext(ComicDetailContext);
    const parsedDate = new Date(dates[0].date).toDateString().slice(4);

  return (
    <div>
        <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} />
        <h2>{title}</h2>
        <h3>Published: {parsedDate}</h3>
        <p>{description ? description : 'No description'}</p>
    </div>
  )
}

export default ComicDetail