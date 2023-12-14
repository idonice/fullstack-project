import React, { useState } from 'react';
import './Auth.css';
import { log } from 'console';
const SignUp: React.FC = () => {
    const [accountDetails, setAccountDetails] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })
    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setAccountDetails((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };
    const signupHandler = (): void => {
        if (accountDetails.password === accountDetails.password2)
            console.log(accountDetails);
        else
            console.log('Check the password re-entering');


    }
    return <div className="signIn-wrapper">
        <div className='signIn-form__wrapper'>
            <h1 className="signIn__title">Sign up</h1>

            <label className='email-label' htmlFor="" >Your name</label>
            <input type="text" name="name" className='auth-input' onChange={inputHandler}></input>
            <label className='email-label' htmlFor="">Email</label>
            <input type="email" name="email" className='auth-input' onChange={inputHandler}></input>
            <label className='email-label' htmlFor="">Password</label>
            <input type="password" name="password" className='auth-input' onChange={inputHandler}></input>
            <label className='email-label' htmlFor="">Re-enter password</label>
            <input type="password" name="password2" className='auth-input' onChange={inputHandler}></input>
            <button className="bg-btn yellow-btn" id='auth-button' onClick={signupHandler}>SIGN UP</button>
        </div>
    </div >
};

export default SignUp;