import React from 'react';
import homeIcon from '../assets/images/return.svg';
import toTopIcon from '../assets/images/arrow_up.svg';
import { useNavigate } from 'react-router-dom';

const RedirectButton = ({ text, redirection }) => {

    const navigate = useNavigate()

    const icon = () => {
        switch (redirection) {
            case 'home':
                return <img src={homeIcon} alt="Retour à l'accueil" />
            case 'top':
                return <img src={toTopIcon} alt="Retour en haut de la page" />
            default:
                return
        }
    }

    const handleClick = () => {
        switch (redirection) {
            case 'home':
                return navigate("/")
            case 'top':
                return window.scrollTo(0, 0)
        }
    }

    return (
        <>
            <button onClick={handleClick}>
                {icon()}
                {text}
            </button>
        </>
    );
};

export default RedirectButton;