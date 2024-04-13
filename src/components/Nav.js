import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <NavLink to="/">DODO DODU</NavLink>
            <NavLink to="/login">
                <img src='' alt="Icone de profil" />
            </NavLink>
        </nav>
    );
};

export default Nav;