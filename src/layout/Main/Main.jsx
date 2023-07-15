import { useContext } from "react"
import { CharactersContext } from "../../context/CharactersContext"
import Loader from "../../components/commons/Loader/Loader";


const Main = () => {
    const {characters, loading: charactersLoading } = useContext(CharactersContext);

  return (
    <>
        { charactersLoading ? ( <Loader/> ) : 
            <div> { characters.map((character)=> (<li key={character.id}>{character.name}</li>)) } </div>
        }
    </>    
  )
}

export default Main