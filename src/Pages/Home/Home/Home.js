import React from 'react';
import { Accordion, Button, Card, Carousel } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import './Home.css';
import carousel1 from '../../../images/carousel/carocel1.jpg';
import carousel2 from '../../../images/carousel/carocel2.jpg';
import carousel3 from '../../../images/carousel/carocel3.jpg';
import allTest from '../../../images/alltest.jpg';

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
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            {/* <div>
                <div className="row">
                    <div className="col=md-6">
                        <img className="img-fluid w-75" src={allTest} alt="" />
                    </div>
                    <div className="col=md-6">
                        <div>
                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    );
};

export default Home;