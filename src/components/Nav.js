import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <li>
                <NavLink to="/">DODO DODU</NavLink>
            </li>
            <NavLink to="/login">
                <img src='' alt="Icone de profil" />
            </NavLink>
        </nav>
    );
};

export default Nav;