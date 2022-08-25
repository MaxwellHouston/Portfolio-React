import React from "react";
import '../App.css';
import { SnapshotImage } from "./SnapshotImage";

const Article = ({project}) => {

    const renderPhotos = () => {
        let images = [];
        for(let i = 1; i < 7; i++){
            images.push(<SnapshotImage key={i} path={project.imgPath} number={i} />)
        };
        return images;
    }

    return (
        <div className="project-body">
            <div className="info">
                <h1>{project.header}</h1>
                <p className="article">{project.article}</p>
                {project.email && <p className="email">Email: <a href={`mailto:${project.email}`}>{project.email}</a></p>}
                <p className="github">Github: <a href={project.github}>{project.github}</a></p>
            </div>
            <div className="snapshot-container">
                <h2>Project Snapshot</h2>
                <div className="img-grid">
                    {renderPhotos()}
                </div>
            </div>
        </div>
    )
};

export default Article;