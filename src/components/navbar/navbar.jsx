import './navbar.css'
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav id='navbar'>
            <ul className='nav-list'>
                <li className='nav-element'>
                    <NavLink to="/" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""}>Accueil
                    </NavLink>
                </li>
                <li className='navel-ement'>
                    <NavLink to="/about" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""}>À Propos
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
