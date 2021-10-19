import React, { useState } from 'react';
import useAuth from '../../../context/useAuth';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signInUsingGoogle, } = useAuth();

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    // const auth = getAuth();
    const handleRegistration = e => {
        console.log(email, password);
        // createUserWithEmailAndPassword(auth, email, password)
        //     .then(result => {
        //         const user = result.user;
        //         console.log(user);
        //     })
        e.preventDefault();

    }
    return (
        <div className="container">
            <form onClick={handleRegistration}>
                <h2>Please Register</h2>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onChange={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>

            <div>
                <h2>Please Log in with</h2>
                <br />
                <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;

