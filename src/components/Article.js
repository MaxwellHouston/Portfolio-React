import React from "react";
import '../App.css';
import CodeViewer from "./CodeViewer";



const Article = ({project}) => {

    return (
        <div className="project-body">
            <div className="info">
                <h1>{project.header}</h1>
                <p className="article">{project.article}</p>
                {project.email ? <p className="email-github">{project.email}  {project.github}</p> : <p className="github">{project.github}</p>}
            </div>
            <CodeViewer project={project} />
        </div>
        
    )
};

export default Article;