import React from 'react';
import BackgroundImage from '../assets/images/footer.svg';
import Palmier from '../assets/images/palmier.svg';
import Dodo from '../assets/images/dodo-home-page.svg';

const Footer = ({customClass}) => {
    return (
        <footer className={customClass}>

            <img src={BackgroundImage} alt="Image de plage" />
            <img src={Palmier} alt="Image de palmier" />
            <img src={Dodo} alt="Image de dodo" />
        </footer>
    );
};

export default Footer;