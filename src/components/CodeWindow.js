import React from "react";
import '../App.css';


const CodeWindow = ({project, view}) => {

    const renderMedia = () => {
        if(view === 'img'){
            return <img src={project.img} alt='Website Snapshot'/>
        } else {
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