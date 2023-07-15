import { useContext } from "react"
import { CharactersContext } from "../../context/CharactersContext"
import Loader from "../../components/commons/Loader/Loader";
import CardList from "../../components/CardList/CardList";
import MainWrapper from "./styles/MainWrapper";


const Main = () => {
    const {characters, loading: charactersLoading } = useContext(CharactersContext);

  return (
    <MainWrapper>
        { charactersLoading ? ( <Loader/> ) : (<CardList/>) }
    </MainWrapper>    
  )
}

export default Main