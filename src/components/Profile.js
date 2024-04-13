import React, { useRef, useState } from 'react';
import { doDeleteUser, doSignOut, doUpdateUser } from '../firebase/auth';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    const [isModifying, setIsModifying] = useState('')
    const [isDeleting, setIsDeleting] = useState('')
    const [wantToDeleteUser, setWantToDeleteUser] = useState(false)
    
    const navigate = useNavigate()

    const name = useRef()

    const onSubmit = async (e) => {
        e.preventDefault()
        if (!isModifying) {
            setIsModifying(true)
            await doUpdateUser({
                displayName: name.current.value
            })
        }
    }

    const deleteUser = async (e) => {
        e.preventDefault()
        if (!isDeleting) {
            setIsDeleting(true)
            doDeleteUser().then(() => navigate("/register"))
        }
    }

    const seeUser = () => {
        const user = getAuth().currentUser;
        console.log(user)
    }

    const disconnect = () => {
        doSignOut()
        navigate("/")
    }

    return (
        <div>
            {}
            <label htmlFor='name'>Pseudo</label>
            <input type='text' name='name' ref={name} />

            <button onClick={onSubmit}>Modifier mon profil</button>

            <button onClick={() => setWantToDeleteUser(true)}>Supprimer mon compte</button>

            <button onClick={seeUser}>Voir user</button>

            <button onClick={disconnect}>Disconnect</button>

            {wantToDeleteUser && <div className='modal'>
                <p>Êtes-vous sur de vouloir supprimer votre compte ?</p>
                <button onClick={deleteUser}>Oui</button>
                <button onClick={() => setWantToDeleteUser(false)}>Non</button>
            </div>}

        </div>
    );
};

export default Profile;