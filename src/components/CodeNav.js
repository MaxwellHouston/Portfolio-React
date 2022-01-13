import React from "react";
import '../App.css';

const CodeNav = ({view, changeViews}) => {

    
    const handleViewClick = ({target}) => {
        changeViews(target.value);
    }

    return (
        <div className="code-nav">
            <ul>
                <li><button onClick={handleViewClick} value='img'>Image</button></li>
                <li><button onClick={handleViewClick} value='html'>HTML</button></li>
                <li><button onClick={handleViewClick} value='css'>CSS</button></li>
                <li><button onClick={handleViewClick} value='js'>JS</button></li>
            </ul>
        </div>
    )
}

export default CodeNav;