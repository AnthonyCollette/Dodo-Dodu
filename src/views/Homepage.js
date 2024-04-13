import React from 'react';
import Nav from '../components/Nav';

const Homepage = () => {

    return (
        <div className='homepage'>
                <Nav />
                <div className='titles-wrapper'>
                    <h2>Règles du jeu</h2>
                    <h2>Nouvelle partie</h2>
                </div>
        </div>
    );
};

export default Homepage;