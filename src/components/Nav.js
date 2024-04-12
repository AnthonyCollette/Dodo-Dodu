import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <NavLink to="/">LOGO</NavLink>
            <ul>
                <li>
                    <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Accueil</NavLink>
                </li>
                <li>
                    <NavLink to="/questions" className={({isActive}) => isActive ? 'active' : ''}>Questions</NavLink>
                </li>
                <li>
                    <NavLink to="/rules" className={({isActive}) => isActive ? 'active' : ''}>Règles</NavLink>
                </li>
                <li>
                    <NavLink to="/account" className={({isActive}) => isActive ? 'active' : ''}>Mon compte</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;