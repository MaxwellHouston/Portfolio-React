import React, { useState } from "react";
import '../App.css';
import { ImageModal } from "./ImageModal";
import { Snapshots } from "./Snapshots";
const Article = ({project}) => {

    const [showModal, setShowModal] = useState(false);
    const [modalImg, setModalImg] = useState({path: '', number: null});

    const closeModal = () => {
        setShowModal(false);
        setModalImg({path: '', number: null});
    };

    const openModal = (path, number) => {
        setModalImg({path: path, number: number});
        setShowModal(true);
    };

    return (
        <div className="project-body">
            <ImageModal show={showModal} closeModal={closeModal} path={modalImg.path} number={modalImg.number} />
            <div className="info">
                <h1>{project.header}</h1>
                <p className="article">{project.article}</p>
                {project.email && <p className="email">Email: <a href={`mailto:${project.email}`}>{project.email}</a></p>}
                <p className="github">Github: <a href={project.github}>{project.github}</a></p>
            </div>
            <Snapshots project={project} openModal={openModal} />
        </div>
    )
};

export default Article;