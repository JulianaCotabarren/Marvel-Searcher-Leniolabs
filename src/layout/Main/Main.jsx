import { useContext } from "react"
import { CharactersContext } from "../../context/CharactersContext"


const Main = () => {
    const {characters} = useContext(CharactersContext);

  return (
    <div>
        { characters.map((character)=> (<li key={character.id}>{character.name}</li>)) }
    </div>
  )
}

export default Main