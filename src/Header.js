
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className="ui secondary menu"> 
            <Link to="/" className="title item"> Home </Link>
            <div className="right menu">
                <Link to="/about" className="title item"> About Me </Link>
                <Link to="/projects" className="title item "> Projects </Link>
                <Link to="/work" className="title item"> Work Experience </Link>
                <Link to="/contact" className="title item"> Contact </Link>
            </div>
        </div>
    )
}

export default Header; 
