import React, { useState } from 'react';
import "./Classes.scss";
import ClassesData from './ClassesData';
import Footer from '../Footer/Footer';
import fakeData from './fakeData';
import { Link } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';



const Classes = () => {
    
const [classesData,setClassData]=useState([])
useEffect(() => {
    fetch('http://localhost:5000/AllClacess')
    .then(res => res.json())
    .then(data =>setClassData(data))
}, [])
   
    return (
        <section>
            <div className="jumbotron jumbotron2-height">

                <nav className="navbar navbar-expand-lg navbar-dark bg-color">
                    <div className="container">
                        <Link className="navbar-brand text-white" to="/">POWER <span className="logoX">X</span></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/">Home<span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/services">Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/ourClasses">Our Classes</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/aboutUs">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/blog">Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/pricing">Pricing</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/contactUs">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="container d-flex align-items-center justify-content-center  text-white intro-Style">
                <h1 className='ourClasses'>OUR CLASSES</h1>
                </div>
            </div>





            <div className="container">
                <div className="row mb-5 mt-5">



                    {
                        classesData.map(info => <ClassesData info={info}></ClassesData>)
                    }


                </div>


            </div>
            <Footer></Footer>
        </section>
    );
};

export default Classes;