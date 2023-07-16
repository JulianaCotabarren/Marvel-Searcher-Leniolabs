import { useContext, useRef, useState } from "react"
import { CharactersContext } from "../../context/CharactersContext";
import HeaderWrapper from "./styles/HeaderWrapper";
import HeaderInput from "./styles/HeaderInput";
import HeaderInputWrapper from "./styles/HeaderInputWrapper";
import { ComicDetailContext } from "../../context/ComicDetailContext";
import HeaderLogo from "./styles/HeaderLogo";
import marvelLogo from "../../assets/images/marvelLogo.svg";
import searchIcon from '../../assets/images/search-icon.png';
import SearchIcon from "./styles/SearchIcon";
import Star from "../../components/commons/Star/Star";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    let searchTimer;
    const inputRef = useRef(null);
    const { pathname } = useLocation();
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
        <HeaderLogo src={marvelLogo} alt="Marvel logo"/>
        <HeaderInputWrapper>
            <SearchIcon src={searchIcon}/>
            <HeaderInput 
                type="text" 
                placeholder="Search"
                ref={inputRef}
                aria-activedescendant={isInputActive}
                onChange={handleInputChange}
                onClick={() => setInputActive(true)}
            />
        </HeaderInputWrapper>
        <Link to="/favorites">
            <Star fill={pathname === '/favorites'}/>        
        </Link>
    </HeaderWrapper>
  )
}

export default Header;