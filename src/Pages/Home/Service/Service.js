import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { _id, name, picture, description } = service;
    return (
        <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="cart p-2 m-3">
                <div>
                    <img className="w-75 rounded-3" src={picture} alt="" />
                </div>
                <div>
                    <h4 className="text-success fw-bold p-2">{name}</h4>
                    <p>{description}</p>
                    <Link to={`/serviceDetails/${_id}`}>
                        <button className="btn btn-warning">See Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;