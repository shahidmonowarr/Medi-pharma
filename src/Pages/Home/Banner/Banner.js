import './Banner.css'
import React from 'react';
import { Button } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <div className="test-section ">
                <br />
                <h2 className="test-section-title">Take Our Free Language Test</h2>
                <p className="test-details">This quick and free online test will tell your language level <br />
                    and help choose the best group course.</p>
                <Button variant="info fw-bold fs-5 my-3 p-3 text-white">Shop Now</Button>
            </div>
        </div>
    );
};

export default Banner;