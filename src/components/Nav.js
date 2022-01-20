import React from "react";
import '../App.css';
import { Link } from "react-router-dom";
import logo from '../Utility/Images/logo.png';


const Nav = () => {

    return(
        <div className="side-bar">
            <img id='logo' src={logo} alt="Portfolio Logo" />
            <ul className="nav-list">
                <Link className="link" to="/"><li>About</li></Link>
                <Link className="link" to="/game-of-war"><li>Game of War</li></Link>
                <Link className="link" to="/calculator"><li>Calculator</li></Link>
                <Link className="link" to="/front-page"><li>Front Page</li></Link>
                <Link className="link" to="/more"><li>More</li></Link>
            </ul>
        </div>
    )
};

export default Nav;