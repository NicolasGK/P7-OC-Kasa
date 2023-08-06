import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer';
import { Link } from 'react-router-dom';
import './Page404.css'

export default function Page404() {
  document.title = 'Erreur 404'
  return (
    <div>
        <Header />
        <div className="infos">
          <h1 className='big-title'>404</h1>
          <p className='content'>La page que vous recherchez n'existe pas.</p>
			  </div>
				<Link className='redirection' to='/'>Retourner sur la page d'accueil</Link>
        <Footer />
    </div>
  )
}
