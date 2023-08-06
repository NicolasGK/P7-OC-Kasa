import './header.css'
import Logo from '../../assets/LOGO.png'
import Navbar from '../navbar/navbar'
import { Link } from 'react-router-dom'

export default function Header () {
    return (
        <header className='header'>
			<h1>
                <Link to="/">
				    <img src={Logo} alt="Logo de Kasa" />
                </Link>
			</h1>
			<Navbar />
		</header>
    )
}
