import React from 'react'
import './FicheLogement.css'
import Header from '../../components/header/header'
import { useParams } from 'react-router-dom'
import { useHouseList } from '../../utils/hookJson'
import Slideshow from '../../components/slideshow/slideshow'
import Redstar from '../../assets/red_star.png'
import Greystar from '../../assets/grey_star.png'
import Collapse from '../../components/collapse/collapse'
import Page404 from '../Page404/Page404'
import Footer from '../../components/footer/footer'


export default function FicheLogement() {
  document.title = 'Fiche Logement - Kasa'

  const { data, isLoading, error } = useHouseList();
  
  const id = useParams();
  const ficheLogement = data && data.find(logement => logement.id === id.id);

  if (!data || isLoading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Une erreur est survenue lors du chargement des données</div>; 
  }
  if (!ficheLogement) return(<Page404 />)

  const arrayStars = [1, 2, 3, 4, 5]

  const equipements = ficheLogement.equipments.map((element, index) => (
        <li className='description_content' key={index.toString()}>{element}</li>
      ))

  return (
      <div className='logement'>
              <Header />
              <Slideshow pictures={ficheLogement.pictures}/>

              <div className='ficheLogement'>
                  <div className='description'>
                      <h1>{ficheLogement.title}</h1>
                      <h4>{ficheLogement.location}</h4>
                      <div className='div_tags'>
                          { ficheLogement.tags.map((element, index) => {
                              return(<p className='tags' key={index}>{element}</p>)
                          })}
                      </div>
                  </div>

                  <div className='main_stars'>
                      <div className='div_etoiles'>
                          <p>{ficheLogement.host.name}</p>
                          <img src={ficheLogement.host.picture} alt={ficheLogement.title} />
                      </div>
                      
                      <div className="stars">
                        {arrayStars.map((element) => {
                          const nbreEtoiles = parseInt(ficheLogement.rating);
                          return (
                            <img
                              key={element}
                              className={element <= nbreEtoiles ? 'red_star' : 'grey_star'}
                              src={element <= nbreEtoiles ? Redstar : Greystar}
                              alt="Étoiles"
                            />
                          );
                        })}
                      </div>
                  </div>
              </div>

              <div className='logement_collapse'>
                  <div className='logement_collapse_item'>
                    <Collapse style={{margin:'30px 0'}} title="Description" description={ficheLogement.description} />
                  </div>
                  <div className='logement_collapse_item'>
                    <Collapse style={{margin:'30px 0'}} title="Équipements" description={equipements} />
                  </div>
              </div>
          <Footer />
      </div>
  )
}