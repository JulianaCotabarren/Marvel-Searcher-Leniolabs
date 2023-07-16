import ComicList from "../ComicList/ComicList"


const Modal = ({handleClose, title}) => {
  return (
    <div>
        <button onClick={handleClose}>close</button>
        <h1>{title}</h1>
        <div>
            <img src="" alt="Comic img" />
            <h2>Comic title</h2>
            <p>Publication date</p>
            <ComicList/>
        </div>
    </div>
  )
}

export default Modal