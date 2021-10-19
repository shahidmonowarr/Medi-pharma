import React, { useState } from 'react';
import useAuth from '../../../context/useAuth';

const Login = () => {

    const [isTrue, setIsTrue] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signInUsingGoogle, createUserAccount, userLogin } = useAuth();

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    // const auth = getAuth();
    const handleRegistration = () => {
        createUserAccount(email, password);
    }
    const handleLogin = () => {
        userLogin(email, password);
    }
    return (
        <div className="container">
            <form >
                {
                    !isTrue ? (
                        <div>
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
                            <button onClick={handleRegistration} type="button" className="btn btn-primary">Register</button>
                            <p>Already have an account? <span onClick={() => setIsTrue(true)}>click here</span></p>
                        </div>
                    ) : (
                        <div>
                            <h2>Please Login</h2>
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
                            <button onClick={handleLogin} type="button" className="btn btn-primary">Login</button>
                            <p>Don't have an Account? <span onClick={() => setIsTrue(false)}>click here</span></p>
                        </div>
                    )
                }


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

