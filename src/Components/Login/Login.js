import React from 'react';
import './Login.css'

const Login = () => {
    const handleGoogleLogin = () => {
        console.log('google')
    }
    return (
        <div className="login-container">
            <button onClick={handleGoogleLogin}>Login with Google</button>
        </div>
    );
};

export default Login;