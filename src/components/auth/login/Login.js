import React, { useState, useRef } from 'react';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../../firebase/auth';
import { Navigate } from 'react-router-dom';

const Login = () => {

    const [isSigninIn, setIsSigninIn] = useState('')
    const [userLoggedIn, setUserLoggedIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const email = useRef()
    const password = useRef()


    const onSubmit = async (e) => {
        e.preventDefault()
        if (!isSigninIn) {
            setIsSigninIn(true)
            await doSignInWithEmailAndPassword(email.current.value, password.current.value).then(() => setUserLoggedIn(true))
        }
    }

    // const onGoogleSignIn = (e) => {
    //     e.preventDefault()
    //     if (isSigninIn) {
    //         setIsSigninIn(true)
    //         doSignInWithGoogle().catch(err => {
    //             setIsSigninIn(false)
    //         })
    //     }
    // }

    return (
        <div>
            {userLoggedIn && <Navigate to="/" replace={true} />} 
            <div>
                <label>E-mail</label>
                <input type="email" ref={email} />

                <label>Mot de passe</label>
                <input type="password" ref={password} />

                <button onClick={onSubmit}>Me connecter</button>
            </div>

        </div>
    );
};

export default Login;