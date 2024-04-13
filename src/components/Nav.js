import { NavLink } from 'react-router-dom';
import cloudNav from '../assets/images/cloud-nav.svg';
import profilIcon from '../assets/images/profil-icon.svg';

const Nav = () => {
    return (
        <nav>
            <NavLink to="/">DODO DODU</NavLink>
            <NavLink to="/login">
                <img src={profilIcon} alt="Icone de profil" />
            </NavLink>
            <img src={cloudNav} alt="Nuage" />
        </nav>
    );
};

export default Nav;