import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    let { serviceId } = useParams();
    // const [details, setDetails] = useState([])
    // useEffect(() => {
    //     fetch('fakedb.json')
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [])
    return (
        <div>
            <h2>this is details {serviceId}</h2>
        </div>
    );
};

export default ServiceDetails;