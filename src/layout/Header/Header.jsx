import { useContext, useRef, useState } from "react"
import { CharactersContext } from "../../context/CharactersContext";
import HeaderWrapper from "./styles/HeaderWrapper";
import HeaderInput from "./styles/HeaderInput";
import HeaderInputWrapper from "./styles/HeaderInputWrapper";

const Header = () => {
    let searchTimer;
    const inputRef = useRef(null);   
    const [isInputActive, setInputActive] = useState(false);
    const { setLoading: setLoadingCharacters, setSearch, setUrlCharacters } = useContext(CharactersContext);

    const handleInputChange = () => {
        setLoadingCharacters(true);    
        clearInterval(searchTimer);
        searchTimer = setTimeout(() => {
            setUrlCharacters([]);
            const search = inputRef.current.value;    
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