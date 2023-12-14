import React, { useState } from 'react';

import './Auth.css';
interface ChildProps {
    signup: () => void;
}
const SignIn: React.FC<ChildProps> = ({ signup }) => {
    const [inputStep, setInputStep] = useState(0);
    const [user, setUser] = useState({ email: '', password: '' });
    const onContinue = (): void => {
        if (inputStep) {
            submit(user)
        } else
            setInputStep(1)
    }
    const submit = (user: { email: string, password: string }): void => {
        console.log(user);
    }
    const signupClicked = (): void => {
        signup();
    }
    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };
    return <div className="signIn-wrapper">
        <div className='signIn-form__wrapper'>
            <h1 className="signIn__title">Sign in</h1>
            {inputStep ? '' : <><label className='email-label' htmlFor="">Email or mobile phone number</label>
                <input type="email" name='email' className='auth-input' value={user.email} onChange={inputHandler}></input></>}
            {inputStep ? <><label className='email-label' htmlFor="">Enter a password</label>
                <input type="password" name='password' className='auth-input' value={user.password} onChange={inputHandler}></input></> : ''}
            <button className="bg-btn yellow-btn" id='auth-button' onClick={onContinue}>Continue</button>
        </div>
        <div className="signUp__title">
            <div className='line'></div>
            <span className='signUp__text'>New to Amazon?</span>
            <div className='line'></div>
        </div>
        <button className="bg-btn" id='signup-button' onClick={signupClicked}>Create your account</button>
    </div>
}

export default SignIn;