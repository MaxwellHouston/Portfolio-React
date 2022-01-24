import React, {useState, useEffect} from "react";
import '../App.css';
import { Link } from "react-router-dom";
import logo from '../Utility/Images/logo.png';
import { useLocation } from "react-router-dom";


const Nav = () => {

    const location = useLocation();
    const [page, setpage] = useState('/');
    
    useEffect(() => {
        setpage(location.pathname)
    },[location])

    const highlighted = {
        textDecoration: 'underline #4266a1'
    }
    
    return(
        <div className="side-bar">
            <img id='logo' src={logo} alt="Portfolio Logo" />
            <ul className="nav-list">
                <Link className="link" to="/" style = {page === '/' ? highlighted : null}><li>About</li></Link>
                <Link className="link" to="/game-of-war" style = {page === '/game-of-war' ? highlighted : null} ><li>Game of War</li></Link>
                <Link className="link" to="/calculator" style = {page === '/calculator' ? highlighted : null} ><li>Calculator</li></Link>
                <Link className="link" to="/front-page" style = {page === '/front-page' ? highlighted : null} ><li>Front Page</li></Link>
                <Link className="link" to="/more" style = {page === '/more' ? highlighted : null} ><li>More</li></Link>
            </ul>
        </div>
    )
};

export default Nav;