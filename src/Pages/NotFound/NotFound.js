import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notfound from '../../images/2660465.png'

const NotFound = () => {
    return (
        <div className="container">
            <div>
                <img style={{ width: '75%' }} src={notfound} alt="" />
            </div>
            <Link to="/"><Button variant="success">Go To Home</Button></Link>
        </div>
    );
};

export default NotFound; <h1>404 error</h1>