

const Modal = ({handleClose}) => {
  return (
    <div>
        <button onClick={handleClose}>close</button>
        <h1>Hero name</h1>
        <div>
            <img src="" alt="Comic img" />
            <h2>Comic title</h2>
            <p>Publication date</p>
        </div>
    </div>
  )
}

export default Modal