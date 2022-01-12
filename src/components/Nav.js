import React from "react";
import '../App.css';
import { Link } from "react-router-dom";


const Nav = () => {

    return(
        <div className="side-bar">
            <div className="logo">

            </div>
            <ul>
                <Link to="/"><li>About</li></Link>
                <Link to="/game-of-war"><li>GameOfWar</li></Link>
                <Link to="/calculator"><li>Calculator</li></Link>
                <Link to="/front-page"><li>Front Page</li></Link>
                <Link to="/more"><li>More</li></Link>
            </ul>
        </div>
    )
};

export default Nav;