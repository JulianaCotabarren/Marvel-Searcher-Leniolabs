import { useContext, useRef, useState } from "react"
import { CharactersContext } from "../../context/CharactersContext";
import HeaderWrapper from "./styles/HeaderWrapper";
import HeaderInput from "./styles/HeaderInput";
import HeaderInputWrapper from "./styles/HeaderInputWrapper";
import { ComicDetailContext } from "../../context/ComicDetailContext";

const Header = () => {
    let searchTimer;
    const inputRef = useRef(null);   
    const [isInputActive, setInputActive] = useState(false);
    const { setLoading: setLoadingCharacters, setSearch, setUrlCharacters, setUrlComics } = useContext(CharactersContext);
    const { setLoading: setLoadingComicDetail, setComicId } = useContext(ComicDetailContext);

    const handleInputChange = () => {
        setLoadingCharacters(true);    
        clearInterval(searchTimer);
        searchTimer = setTimeout(() => {
            setUrlCharacters([]);
            setUrlComics([]);
            const search = inputRef.current.value;
            const isComic = search.includes('comics/');
            if (isComic) {
                setLoadingComicDetail(true);
                setLoadingCharacters(false);
                setComicId(search.split('/')[5]);
                return;
            }
            setComicId(null);
            setSearch(search);
        }, 600);
      };

  return (
    <HeaderWrapper>
        <button>Marvel</button>
        <HeaderInputWrapper>
            <HeaderInput 
                type="text" 
                placeholder="Search"
                ref={inputRef}
                aria-activedescendant={isInputActive}
                onChange={handleInputChange}
                onClick={() => setInputActive(true)}
            />
        </HeaderInputWrapper>        
        <button>Favourites</button>
    </HeaderWrapper>
  )
}

export default Header;