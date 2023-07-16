import ComicList from "../ComicList/ComicList"
import ModalCardWrapper from "./styles/ModalCardWrapper"
import ModalCloseBtnWrapper from "./styles/ModalCloseBtnWrapper"
import ModalTitleWrapper from "./styles/ModalTitleWrapper"
import ModalWrapper from "./styles/ModalWrapper"


const Modal = ({handleClose, title, show}) => {
  return (
    <ModalWrapper show={show} onClick={handleClose}>
        <ModalCardWrapper onClick={event => event.stopPropagation()}>
            <ModalTitleWrapper>
                {title}
                <ModalCloseBtnWrapper onClick={handleClose}>
                    <span aria-hidden="true">&times;</span>
                </ModalCloseBtnWrapper>
            </ModalTitleWrapper>                
            <ComicList/>
        </ModalCardWrapper>        
    </ModalWrapper>
  )
}

export default Modal