import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <a className="navbar-brand mt-2 mt-lg-0" href="/">
            <img
            src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
            height="15"
            alt="MDB Logo"
            loading="lazy"
            />
        </a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="nav-link" href="about">About</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Team</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Projects</a>
            </li>
        </ul>
        </div>
        <form className="d-flex input-group w-auto">
        <i className="fa fa-shopping-cart"></i>
            <input
                type="search"
                className="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
            />
            <span className="input-group-text border-0" id="search-addon">
                <i className="fa fa-search"></i>
            </span>
        </form>
    </div>
    </nav>
    )
}

export default Navbar;