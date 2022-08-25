import ReactModal from "react-modal";
import CloseIcon from '@mui/icons-material/Close';

ReactModal.setAppElement('#root');


export const ImageModal = ({show, closeModal, url}) => {

    const imgSrc = require(url);

    return(
        <ReactModal>
            <img src={imgSrc} alt='Expanded snapshot' />
            <button className="close-btn">
                <CloseIcon />
            </button>
        </ReactModal>
    )
}