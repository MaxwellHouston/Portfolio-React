import React, { useState } from "react";
import '../App.css';
import { ImageModal } from "./ImageModal";
import { Snapshots } from "./Snapshots";
import CloseIcon from '@mui/icons-material/Close';
const Article = ({project}) => {

    const [showModal, setShowModal] = useState(false);
    const [modalImg, setModalImg] = useState('');

    const closeModal = () => {
        setShowModal(false);
        setModalImg('');
    };

    const openModal = (url) => {
        setModalImg(url);
        setShowModal(true);
    }

    return (
        <div className="project-body">
            <ImageModal show={showModal} closeModal={closeModal} imgUrl={modalImg} />
            <CloseIcon />
            <div className="info">
                <h1>{project.header}</h1>
                <p className="article">{project.article}</p>
                {project.email && <p className="email">Email: <a href={`mailto:${project.email}`}>{project.email}</a></p>}
                <p className="github">Github: <a href={project.github}>{project.github}</a></p>
            </div>
            <Snapshots project={project} showModal={showModal} />
        </div>
    )
};

export default Article;