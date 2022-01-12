import React from "react";
import '../App.css';



const Article = ({project}) => {

    return (
        <div className="project-body">
            <h1>{project.header}</h1>
            <p className="article">{project.article}</p>
            {project.email ? <p className="email-github">{project.email}  {project.github}</p> : <p className="github">{project.github}</p>}
        </div>
    )
};

export default Article;