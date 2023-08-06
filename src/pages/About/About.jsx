import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Banner from '../../components/banner/banner'
import Collapse from '../../components/collapse/collapse'
import { useAboutData } from '../../utils/hookAboutData'
import aboutBanner from '../../assets/about_banner.png'

export default function About() {

  const { data, isLoading, error } = useAboutData();
  document.title = 'À propos - Kasa'

  return (
    <div>
        <Header />
        <Banner
            title=''
            src={aboutBanner}
        />
            { isLoading && <div>En cours de traitement...</div>}
            { error && <div>{error}</div>}
            { data && 
                data.map((item) => (
                    <div key={item.id} className="about_main_collapse">
                      <Collapse style={{margin:'30px 0'}}  title={item.title} description={item.description} />
                    </div>
                ))}
        <Footer />
    </div>
  )
}
