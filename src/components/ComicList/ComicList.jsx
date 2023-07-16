import { useContext } from "react"
import { ComicsContext } from "../../context/ComicsContext"
import Loader from "../commons/Loader/Loader";


const ComicList = () => {
    const { loading, comics } = useContext(ComicsContext);
  return (
    <>
        {loading ? <Loader loading={loading}/> : <div> {comics.map((comic)=> <li key={comic.id}>{comic.title}</li>)} </div>}
    </>
    
  )
}

export default ComicList