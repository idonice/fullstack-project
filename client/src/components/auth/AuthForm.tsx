import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const AuthForm: React.FC = () => {

    const [isRegistered, setIsRegistered] = useState(true);

    const signupHandler = (): void => {
        setIsRegistered(false);
    }
    return <div>
        {isRegistered ? <SignIn signup={signupHandler} /> : <SignUp />}
    </div>;
};

export default AuthForm;