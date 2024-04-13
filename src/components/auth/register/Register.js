import React, { useRef, useState } from 'react';
import { doCreateUserWithEmailAndPassword } from '../../../firebase/auth';
import { Navigate } from 'react-router-dom';

const Register = () => {

    const [userLoggedIn, setUserLoggedIn] = useState(false)
    const [isRegistering, setIsRegistering] = useState('')

    const email = useRef()
    const password = useRef()

    const onSubmit = async (e) => {
        e.preventDefault()

        if (!isRegistering) {
            setIsRegistering(true)
            await doCreateUserWithEmailAndPassword(email?.current.value, password?.current.value).then(() => setUserLoggedIn(true))
        }
    }

    return (
        <div>
            {userLoggedIn && <Navigate to="/" replace={true} />}
            <div>
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" ref={email} />

                <label htmlFor="password">Mot de passe</label>
                <input type="password" name="password" ref={password} />

                <button onClick={onSubmit}>M'inscrire</button>
            </div>
        </div>
    );
};

export default Register;