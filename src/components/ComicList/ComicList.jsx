import { useContext } from "react"
import { ComicsContext } from "../../context/ComicsContext"
import Loader from "../commons/Loader/Loader";
import { CharactersContext } from "../../context/CharactersContext";
import Comic from "../Comic/Comic";


const ComicList = () => {
    const { loading, comics } = useContext(ComicsContext);
    const { urlComics } = useContext(CharactersContext);

    const filterComics = () => {
       return urlComics.length ? 
        comics.filter(comic => urlComics.includes(comic.title)) 
        : comics;
    };

  return (
    <>
        {loading ? 
            <Loader loading={loading}/> 
            : filterComics().length 
            ? (comics.map((comic)=> <Comic key={comic.id} comic={comic}/>)) 
            : ( 'No comics' )}
    </>    
  );
};

export default ComicList;