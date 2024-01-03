import React, { useState } from 'react';
import validateInputs from '../helpers/helpers';
import './Auth.css';
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

    const signupHandler = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const validationError = validateInputs(accountDetails);
        if (validationError) {
            console.log('Validation Error:', validationError);
            return;
        } else {
            console.log('Account created successfully:', accountDetails);
            setAccountDetails({ name: '', email: '', password: '', password2: '' })
        }
    };


    return <div className="signIn-wrapper">
        <div className='signIn-form__wrapper'>
            <h1 className="signIn__title">Sign up</h1>
            <form onSubmit={signupHandler} action="">
                <label className='email-label' htmlFor="" >Your name</label>
                <input type="text" name="name" className='auth-input' value={accountDetails.name} onChange={inputHandler}></input>
                <label className='email-label' htmlFor="">Email</label>
                <input type="email" name="email" className='auth-input' value={accountDetails.email} onChange={inputHandler}></input>
                <label className='email-label' htmlFor="">Password</label>
                <input type="password" name="password" className='auth-input' value={accountDetails.password} onChange={inputHandler}></input>
                <label className='email-label' htmlFor="">Re-enter password</label>
                <input type="password" name="password2" className='auth-input' value={accountDetails.password2} onChange={inputHandler}></input>
                <button className="bg-btn yellow-btn" id='auth-button'>SIGN UP</button>
            </form>
        </div>
    </div >
};

export default SignUp;