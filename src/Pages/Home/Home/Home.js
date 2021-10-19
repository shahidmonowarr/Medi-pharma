import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import './Home.css'
import carousel1 from '../../../images/carousel/carocel1.jpg';
import carousel2 from '../../../images/carousel/carocel2.jpg';
import carousel3 from '../../../images/carousel/carocel3.jpg';

const Home = () => {
    return (
        <div className="container" id="home">
            <Banner></Banner>
            <Services></Services>
            <div className="mb-5">
                <h2 className="section-title">Blog Archives</h2>
                <Carousel>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carousel1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className="card-title">Vision and eye health in children</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carousel2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3 className="card-title">Haematopoietic stem cell transplant in children</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carousel3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3 className="card-title">Children and their families require more help with medicines</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

        </div>
    );
};

export default Home;