import React from "react";
import '../App.css';
import CodeViewer from "./CodeViewer";



const Article = ({project}) => {

    return (
        <div className="project-body">
            <div className="info">
                <h1>{project.header}</h1>
                <p className="article">{project.article}</p>
                {project.email && <p className="email">Email: <a href={`mailto:${project.email}`}>{project.email}</a></p>}
                <p className="github">Github: <a href={project.github}>{project.github}</a></p>
            </div>
            <CodeViewer project={project} />
        </div>
        
    )
};

export default Article;