import React, { useState } from "react";
import '../App.css';
import projectData from "../Utility/projectData";
import CodeViewer from "./CodeViewer";
import ProjectTable from "./ProjectTable"


const MoreArticles = () => {
    const [moreArticle, setMoreArticle] = useState(projectData.more.flexbox);

    const toggleArticle = (input) => {
        setMoreArticle(input);
    }
    
    return (
        <div className="project-body">
            <div className="info">
                <h1>Additonal Projects</h1>
                <ProjectTable toggleArticle={toggleArticle} />
            </div>
            <CodeViewer project={moreArticle} />
        </div>
    )
}

export default MoreArticles;