import React from 'react';
import './Footer.scss';
import youtube from '../../Images/bxl-youtube.png';
import fb from '../../Images/bxl-facebook.png';
import instra from '../../Images/bxl-instagram.png';
import twiter from '../../Images/bxl-twitter.png';
import whatsapp from '../../Images/bxl-whatsapp.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <a className="text-white" href="/">POWER <span className="logoX">X</span></a>
                    </div>
                    <div className="col-md-3">
                    <h5><a className="text-white" href="https://www.google.com/#">Need Help?</a></h5>
                    <h5><a className="text-white" href="https://www.google.com/">Help Center</a></h5>
                    <h5><a className="text-white" href="https://www.google.com/">Email Support</a></h5>
                    <h5><a className="text-white" href="https://www.google.com/">Live Chat</a></h5>
                    <h5><a className="text-white" href="https://www.google.com/">Gift Certificates</a></h5>
                    <h5><a className="text-white" href="https://www.google.com/">Send Us Feedback</a></h5> 

                    </div>
                    <div className="col-md-2 ">
                        <h5><a className="text-white" href="https://www.google.com/">Digital Resources</a></h5>
                        <h5><a className="text-white" href="https://www.google.com/">Articles</a></h5>
                        <h5><a className="text-white" href="https://www.google.com/">E-books</a></h5>
                    </div>
                    <div className="col-md-2 text-white socialLogo">
                        <h5>Connect with Us</h5>
                        <a href="https://www.google.com/"><img src={youtube}alt=""/></a>
                        <a href="https://www.google.com/"><img src={fb} alt=""/></a>
                        <a href="https://www.google.com/"><img src={instra} alt=""/></a>
                        <a href="https://www.google.com/"><img src={twiter} alt=""/></a>
                        <a href="https://www.google.com/"><img src={whatsapp} alt=""/></a>
                        <a className="text-white" href="https://www.google.com/">Forums</a>
                    </div>
                    <div className="col-md-2 text-white ">
                        <h5>Join Our Newsletter</h5>
                        <h6>Get exclusive news, features, and updates from the Shredder Weight Loss Academy</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;