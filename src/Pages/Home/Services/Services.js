import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('fakedb.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="container" id="services">
            <h2 className="section-title">Our Services</h2>
            <div className="row">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services; <h2>Our services</h2>