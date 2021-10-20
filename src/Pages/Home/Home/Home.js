import React from 'react';
import { Accordion, Button, Card, Carousel } from 'react-bootstrap';
import { faCreativeCommonsRemix, faSkype } from '@fortawesome/free-brands-svg-icons';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import './Home.css';
import carousel1 from '../../../images/carousel/carocel1.jpg';
import carousel2 from '../../../images/carousel/carocel2.jpg';
import carousel3 from '../../../images/carousel/carocel3.jpg';
import allTest from '../../../images/alltest.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
    return (
        <div className="container" id="home">
            <Banner></Banner>
            <Services></Services>
            <div className="mb-5">
                <h2 className="section-title" >Blog Archives</h2>
                <Carousel>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carousel1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className="carousel-title">Vision and eye health in children</h3>
                            <Button variant="success fw-bold my-1 p-2 text-white">Read More</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carousel2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3 className="carousel-title">Haematopoietic stem cell transplant in children</h3>
                            <Button variant="success fw-bold my-1 p-2 text-white">Read More</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carousel3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 className="carousel-title">Children and their families require more help with medicines</h3>
                            <Button variant="success fw-bold my-1 p-2 text-white">Read More</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div>
                <h2 className="section-title">Frequently Ask Questions.</h2>
                <div className="row mb-5">
                    <div className="col-md-6">
                        <img className="img-fluid rounded-3 " src={allTest} alt="" />
                    </div>
                    <div className="col-md-6">
                        <div >
                            <h2 className="text-success pt-2"><FontAwesomeIcon icon={faCreativeCommonsRemix} /> Most common asked questions</h2>
                            <h2 ><i class="fas fa-angle-double-down text-danger"></i></h2>
                            <div className="questions pb-2">

                                <h4><i class="fas fa-check-circle text-primary"></i> What is this medication designed to do to me?</h4>
                                <h4><i class="fas fa-check-circle text-primary"></i> Who should or should not be using this drug?</h4>
                                <h4><i class="fas fa-check-circle text-primary"></i> How will my use of this medication be monitored?</h4>
                                <h4><i class="fas fa-check-circle text-primary"></i> What is this medication designed to do to me?</h4>
                                <h4><i class="fas fa-check-circle text-primary"></i> Why should I need to take vaccine?</h4>
                            </div>
                            <h4 className="pb-3 fw-bold text-success "><FontAwesomeIcon icon={faSkype} /> If You have the same questions to asked. Please join to our support session</h4>

                            <Button variant="success fw-bold my-1 p-2 text-white">Click Here</Button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;