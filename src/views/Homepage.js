import React from 'react';
import Nav from '../components/Nav';
import Dodo from '../assets/images/dodo-home-page.svg';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Homepage = () => {

    let sound = new Audio('/sounds/dodo-audio.mp3')

    return (
        <div className='homepage'>
                <Nav />
                <div className='titles-wrapper'>
                    <Link to="/rules">Règles du jeu</Link>
                    <Link to="/game">Nouvelle partie</Link>
                </div>

                <button onClick={() => sound.play()}><img src={Dodo} alt="Le dodo n'a jamais froid !" /></button>

                <Footer />
        </div>
    );
};

export default Homepage;