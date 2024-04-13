import React from 'react';
import Nav from '../components/Nav';
import Dodo from '../assets/images/dodo-home-page.svg';
import Footer from '../components/Footer';

const Homepage = () => {

    let sound = new Audio('/sounds/dodo-audio.mp3')

    return (
        <div className='homepage'>
                <Nav />
                <div className='titles-wrapper'>
                    <h2>Règles du jeu</h2>
                    <h2>Nouvelle partie</h2>
                </div>

                <button onClick={() => sound.play()}><img src={Dodo} alt="Le dodo n'a jamais froid !" /></button>
                <Footer />
        </div>
    );
};

export default Homepage;