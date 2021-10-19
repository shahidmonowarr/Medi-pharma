import React, { useEffect, useState } from 'react';

const About = () => {
    const [about, setAbout] = useState([]);
    useEffect(() => {
        fetch('aboutdb.json')
            .then(res => res.json())
            .then(data => setAbout(data))
    }, [])
    return (
        <div className="container">
            <h6 className="pt-3 fs-5 fw-bold text-success">Our Promises</h6>
            <h2 className="section-title">Why You Should Choose Us!</h2>
            <div className="row">
                {
                    about.map(ab => (
                        <div key={ab._id} className="col-md-6 col-lg-4 col-sm-12">
                            <div className="cart p-2 m-3">
                                <div>
                                    <img className="w-75" src={ab.picture} alt="" />
                                </div>
                                <div>
                                    <h3 className="card-title">{ab.name}</h3>
                                    <p>{ab.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default About;