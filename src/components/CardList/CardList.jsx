import { useContext } from "react"
import { CharactersContext } from "../../context/CharactersContext"
import Card from "../Card/Card";
import CardsListWrapper from "./styles/CardListWrapper";


const CardList = () => {
    const { characters } = useContext(CharactersContext);

  return (
    <CardsListWrapper>
        { characters.map((character)=> (<Card key={character.id} character={character}/>)) }
    </CardsListWrapper>
  )
}

export default CardList;