import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Banner from '../../components/banner/banner'
import Gallery from '../../components/gallery/gallery'
import homeBanner from '../../assets/home_banner.png'

export default function Home() {
  document.title = 'Accueil - Kasa'
  return (
    <div>
        <Header />
        <Banner
            title='Chez vous, partout et ailleurs'
            src={homeBanner}
        />
        <Gallery />
        <Footer />
    </div>
  )
}
