import { Link, NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <h2 className="siteName"><NavLink to = '/'><span>Marvel</span></NavLink> information portal</h2>
            <nav className="menu">
                <ul>
                    <li className='active'><NavLink className={({isActive}) => "route" + (isActive ? " active" : "")} to='/'>Caracters</NavLink></li>
                    <li className="dash">/</li>
                    <li><NavLink to = 'comics'  className={({isActive}) => "route" + (isActive ? " active" : "")}>Comics</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header