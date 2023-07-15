import { useContext } from "react"
import { CharactersContext } from "../../context/CharactersContext"
import Loader from "../../components/commons/Loader/Loader";
import CardList from "../../components/CardList/CardList";


const Main = () => {
    const {characters, loading: charactersLoading } = useContext(CharactersContext);

  return (
    <>
        { charactersLoading ? ( <Loader/> ) : (<CardList/>) }
    </>    
  )
}

export default Main