import React from "react";
import '../App.css';
import projectData from '../Utility/projectData';


const CodeWindow = ({project, view}) => {

    const renderMedia = () => {
        if(view === 'img'){
            return <img src={project.img} alt='Website Snapshot'/>
        } else {
            if(!project[view]){
                return <object data={projectData.empty.txt}>code</object>
            }
            return <object data={project[view]}>code</object>
        }
    }
    return(
        <div className="code-window">
            {renderMedia()}
        </div>
    )
}

export default CodeWindow;