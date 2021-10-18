import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, picture, description } = service;
    return (
        <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="cart p-2 m-3">
                <div>
                    <img className="w-75" src={picture} alt="" />
                </div>
                <div>
                    <h5>{name}</h5>
                    <p>{description}</p>
                    <div className="btn btn-primary">See Details</div>
                </div>
            </div>
        </div>
    );
};

export default Service;