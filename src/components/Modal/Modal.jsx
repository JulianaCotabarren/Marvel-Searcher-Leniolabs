import ComicList from "../ComicList/ComicList"


const Modal = ({handleClose, title}) => {
  return (
    <div>
        <button onClick={handleClose}>close</button>
        <h1>{title}</h1>
        <ComicList/>
    </div>
  )
}

export default Modal