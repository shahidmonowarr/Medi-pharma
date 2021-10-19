import React from 'react';
import useAuth from '../../../context/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth()
    return (
        <div>
            <h2>Please Log in</h2>
            <br />
            <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>
        </div>
    );
};

export default Login;