import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ClassSchedule from './ClassSchedule';
import fakeData from './fakeData';
import checkmark from '../../Images/checkmark.png';
import './ClassDescription.scss';
import Footer from '../Footer/Footer';

const ClassDescription = () => {

    const { className } = useParams()
    const classDescription = fakeData.find(cd => cd.name === className)


    return (
        <section>
            <div className="jumbotron jumbotron2-height">

                <nav className="navbar navbar-expand-lg navbar-dark bg-color">
                    <div className="container">
                        <a className="navbar-brand text-white" href="/">POWER <span className="logoX">X</span></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/home">Home<span className="sr-only">(current)</span></a>
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

                <div className="container d-flex align-items-center justify-content-center  text-white intro-Style">
                    <h1 className='ourClasses'>{className}</h1>
                </div>
            </div>



            <div className='container classDetails'>
                <div className='row mt-5'>
                    <div className='col-md-6 mt-4'>
                        <img className='classDescription' style={{ width: '100%', height: '50%' }} src={classDescription.img}></img>

                        <p className='mt-5 mb-5'>
                            {classDescription.description}
                        </p>

                        <div className='ml-3'>
                            <div className='row'>
                            <p><img className='checkMark' src={checkmark}></img><b>Having slimmer shapely thigh</b></p>
                            </div>
                            <div className='row'>
                                <p><img className='checkMark' src={checkmark}></img><b>Getting Stronger Body</b></p>
                            </div>
                            <div className='row'><p><img className='checkMark' src={checkmark}></img><b>Increased Metabolism</b></p></div>
                            <div className='row'><p><img className='checkMark' src={checkmark}></img><b>Increase Muscular Indurance</b></p></div>
                            <div className='row'><p><img className='checkMark' src={checkmark}></img><b>Maximum Results in less time</b></p></div>
                            <div className='row'><p><img className='checkMark' src={checkmark}></img><b>Firm hips and tummy</b></p></div>
                        </div>

                    </div>

                    <div className='col-md-6 text-center mt-4'>
                        <h2 className="mb-4"><span style={{ color: '#FCD842' }}>CLASS</span> SCHEDULE</h2>
                        <div>
                            <ClassSchedule></ClassSchedule>

                        </div>

                        <div className="joinButton">
                                <Link to="/pricing">
                                <button className="btn btn-warning btn-lg">JOIN US</button>
                                </Link>
                            </div>

                    </div>
                </div>
            </div>

            <Footer></Footer>



        </section>
    );
};

export default ClassDescription;