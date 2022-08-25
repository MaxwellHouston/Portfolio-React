import ReactModal from "react-modal";
import CloseIcon from '@mui/icons-material/Close';

ReactModal.setAppElement('#root');


export const ImageModal = ({show, closeModal, path, number}) => {

    const imgSrc = path && number ? require(`../Utility/Images/${path}/snapshot-${number}.jpg`) : '#';

    return(
        <ReactModal isOpen={show} className='img-modal' >
            <img className="modal-img" src={imgSrc} alt='Expanded snapshot' />
            <button className="close-btn" onClick={closeModal}>
                <CloseIcon fontSize="large" sx={{ '&:hover': { color: 'red' } }} />
            </button>
        </ReactModal>
    )
}