import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

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
            {/* <h2>this is details {serviceId}</h2> */}
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={matchedDetail?.picture} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{matchedDetail?.name}</h5>
                            <p className="card-text">{matchedDetail?.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;