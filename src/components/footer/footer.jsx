import Logo from '../../assets/LOGO_WHITE.png'
import './footer.css'

export default function Footer() {
	return (
		<footer className='footer'>
			<img src={Logo} alt="Logo Kasa" />
			<p className='footer_copyright'>© 2020 Kasa. All rights reserved</p>
		</footer>
	)
}
