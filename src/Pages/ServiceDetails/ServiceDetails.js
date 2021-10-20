import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetails = () => {
    let { serviceId } = useParams();
    const [details, setDetails] = useState([]);

    const [matchedDetail, setMatchedDetail] = useState({});

    console.log(matchedDetail)

    useEffect(() => {
        fetch('/fakedb.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    useEffect(() => {
        const foundEmployee = details.find(detail => detail._id === serviceId)
        setMatchedDetail(foundEmployee);
    }, [details]);


    return (
        <div className="container">
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={matchedDetail?.picture} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title pb-3 fs-1 text-success fw-bold">{matchedDetail?.name}</h3>
                            <p className="card-text">{matchedDetail?.description}</p>
                            <Link to='/home'>
                                <Button variant="success fw-bold fs-5 my-3 p-3 text-white">Go back Home</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;