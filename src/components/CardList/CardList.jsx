import { useContext } from "react"
import { CharactersContext } from "../../context/CharactersContext"
import Card from "../Card/Card";


const CardList = () => {
    const { characters } = useContext(CharactersContext);

  return (
    <div>
        { characters.map((character)=> (<Card key={character.id} character={character}/>)) }
    </div>
  )
}

export default CardList