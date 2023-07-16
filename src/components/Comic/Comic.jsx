

const Comic = ({comic}) => {
    const { title, description, thumbnail } = comic;

  return (
    <div>
        <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  )
}

export default Comic