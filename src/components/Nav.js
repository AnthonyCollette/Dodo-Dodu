import { NavLink } from 'react-router-dom';
import cloudNav from '../assets/images/cloud-nav.svg';
import profilIcon from '../assets/images/profil-icon.svg';
import { useSelector } from 'react-redux';
import { auth } from '../firebase/firebase';

const Nav = () => {

    const checkAuth = useSelector((state) => state?.user?.isAuthenticated)

    const displayName = () => {
        if (checkAuth) {
            const name = auth.currentUser.displayName

            return <p>Bonjour {name} !</p>
        } else {
            return <p>Bonjour invité !</p>
        }
    }

    return (
        <nav>
            <NavLink to="/">DODO DODU</NavLink>
            <div className='nav__right'>
                {displayName()}
                <NavLink to="/login">
                    <img src={profilIcon} alt="Icone de profil" />
                </NavLink>
            </div>
            <img src={cloudNav} alt="Nuage" />
        </nav>
    );
};

export default Nav;