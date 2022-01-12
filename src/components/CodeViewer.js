import React, { useState } from "react";
import '../App.css';
import CodeNav from "./CodeNav";
import CodeWindow from "./CodeWindow";


const CodeViewer = ({project}) => {
    const [viewType, setViewType] = useState('img');

    const changeViews = (input) => {
        setViewType(input);
    }



    return(
        <div className='code-viewer'>
            <div className='code-title'>
                <h2>Code Viewer</h2>
            </div>
            <CodeWindow project={project} view={viewType}/>
            <CodeNav view={viewType} changeViews={changeViews} />
        </div>
    )
}

export default CodeViewer;