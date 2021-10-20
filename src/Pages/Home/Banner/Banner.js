import './Banner.css'
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="test-section ">
                <br />
                <h2 className="banner-title ">A Better Way For Medicine</h2>
                <p className="banner-detail">Best services available for the best customers<br />
                    and help choose the best group course.</p>

                <Link to='/doctors'>
                    <Button variant="info fw-bold fs-5 my-3 p-3 text-white">Take a Look</Button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;