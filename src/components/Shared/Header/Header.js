import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({name}) => {
    return (
        <div className="jumbotron ">
            <nav className="navbar navbar-expand-lg navbar-dark bg-color">
                <div className="container">
                    <a className="navbar-brand text-white" href="/">POWER <span className="logoX">X</span></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/">Home<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/ourClasses">Our Classes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/aboutUs">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/blog">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/pricing">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/contactUs">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div >
               <h1 align="center" className="p-5 text-light display-4 text-uppercase font-weight-bold mt-5">{name}</h1>
            </div>
        </div>
    );
};

export default Header;