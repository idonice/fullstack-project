import React from 'react';
import '../components/auth/Auth.css'
import logo from '../components/auth/a-logo.png'
import AuthForm from '../components/auth/AuthForm';
const AuthPage: React.FC = () => {
    return <div className='auth-page'>
        <div>
            <img src={logo} style={{ width: "100px" }} alt="" />
        </div>
        <AuthForm />
    </div >;
};

export default AuthPage;