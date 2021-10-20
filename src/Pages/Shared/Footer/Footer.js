import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare, faFacebookSquare, faTwitterSquare, faYoutube, faCreativeCommonsRemix } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="left-container text-start">
                                <h1>MediPharma</h1>
                                <div className="icons-container d-flex text-center">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faInstagramSquare} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faFacebookSquare} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faTwitterSquare} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="right-footer-container">
                                <div className="phone d-flex align-items-center justify-content-center mt-5">
                                    <p >Shahid Ⓒ. All rights reserved</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div >
                                <ul>
                                    <li className="footer-menu">Home</li>
                                    <li className="footer-menu">Services</li>
                                    <li className="footer-menu">About us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;