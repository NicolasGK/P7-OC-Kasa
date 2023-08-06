import React, { useState } from 'react'
import ArrowBack from "../../assets/arrow_back.png"
import ArrowForward from "../../assets/arrow_forward.png"
import './slideshow.css'


export default function Slideshow({pictures}) { 

    const [currentId, setCurrentId] = useState(0)

    const nextSlide = () => {
        setCurrentId(currentId + 1)
        if(currentId === pictures.length - 1)
            setCurrentId(0)
    }

    const previousSlide = () => {
        setCurrentId(currentId - 1)
        if(currentId === 0)
            setCurrentId(pictures.length - 1)
    }

    return (
        <section style={{backgroundImage : `url(${pictures[currentId]})`}} className='slideshow'>
            {pictures.length > 1 && 
                <>
                    <img 
                        className='slideshow_arrow slideshow_arrow_back' 
                        src={ArrowBack} 
                        alt="Voir l'image précédente" 
                        onClick={previousSlide}
                    />
                    <img 
                        className='slideshow_arrow slideshow_arrow_forward' 
                        src={ArrowForward} 
                        alt="Voir l'image suivante" 
                        onClick={nextSlide}
                    />
                    
                    <p className='slideCount'>{currentId + 1} / {pictures.length}</p>
                </>
            } 
        </section>
    )
}