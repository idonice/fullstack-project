import React, { useState } from 'react';

import './Auth.css';
interface ChildProps {
    signup: () => void;
}
const SignIn: React.FC<ChildProps> = ({ signup }) => {
    const [signinStep, setsigninStep] = useState(0);
    const [user, setUser] = useState({ email: '', password: '' });

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const onContinue = (): void => {
        if (signinStep) {
            submit(user)
        } else
            setsigninStep(1)
    }

    const submit = (user: { email: string, password: string }): void => {
        console.log(user);
    }

    const signupClicked = (): void => {
        signup();
    }

    return <div className="signIn-wrapper">
        <div className='signIn-form__wrapper'>
            <h1 className="signIn__title">Sign in</h1>
            {signinStep ? '' : <><label className='email-label' htmlFor="">Email or mobile phone number</label>
                <input type="email" name='email' className='auth-input' value={user.email} onChange={inputHandler}></input></>}
            {signinStep ? <><label className='email-label' htmlFor="">Enter a password</label>
                <input type="password" name='password' className='auth-input' value={user.password} onChange={inputHandler}></input></> : ''}
            <button className="bg-btn yellow-btn" id='auth-button' onClick={onContinue}>{signinStep ? 'Sign in' : 'Continue'}</button>
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