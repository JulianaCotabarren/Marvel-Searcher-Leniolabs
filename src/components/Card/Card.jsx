
const Card = ({character}) => {
    const { id, name, thumbnail } = character;

  return (
    <div>
        <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
        <h2>{name}</h2>
    </div>
  )
}

export default Card