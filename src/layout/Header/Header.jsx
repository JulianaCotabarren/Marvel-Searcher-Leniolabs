import { useContext, useRef, useState } from "react"
import { CharactersContext } from "../../context/CharactersContext";

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
    <div>
        <button>Marvel</button>
        <input 
            type="text" 
            placeholder="Search"
            ref={inputRef}
            aria-activedescendant={isInputActive}
            onChange={handleInputChange}
            onClick={() => setInputActive(true)}
        />
        <button>Favourites</button>
    </div>
  )
}

export default Header;