import React, { useState } from 'react';
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
    const validateInputs = (): string | null => {
        const { name, email, password, password2 } = accountDetails;

        // Check if passwords match
        if (password !== password2) {
            return 'Passwords do not match';
        }

        // Check password length and pattern
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;
        if (!passwordPattern.test(password)) {
            return 'Password must be 8-16 characters and contain letters and numbers';
        }

        // Check email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            return 'Invalid email address';
        }

        // Check if name is not empty and contains only letters
        const namePattern = /^[a-zA-Z\s]+$/;
        if (!name || !namePattern.test(name)) {
            return 'Name must not be empty and should contain only letters';
        }

        // All validations passed
        return null;
    };

    const signupHandler = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const validationError = validateInputs();

        if (validationError) {
            console.log('Validation Error:', validationError);
            return;
        }

        // All validations passed, proceed to create the account
        console.log('Account created successfully:', accountDetails);
    };


    return <div className="signIn-wrapper">
        <div className='signIn-form__wrapper'>
            <h1 className="signIn__title">Sign up</h1>
            <form onSubmit={signupHandler} action="">
                <label className='email-label' htmlFor="" >Your name</label>
                <input type="text" name="name" className='auth-input' onChange={inputHandler}></input>
                <label className='email-label' htmlFor="">Email</label>
                <input type="email" name="email" className='auth-input' onChange={inputHandler}></input>
                <label className='email-label' htmlFor="">Password</label>
                <input type="password" name="password" className='auth-input' onChange={inputHandler}></input>
                <label className='email-label' htmlFor="">Re-enter password</label>
                <input type="password" name="password2" className='auth-input' onChange={inputHandler}></input>
                <button className="bg-btn yellow-btn" id='auth-button'>SIGN UP</button>
            </form>
        </div>
    </div >
};

export default SignUp;