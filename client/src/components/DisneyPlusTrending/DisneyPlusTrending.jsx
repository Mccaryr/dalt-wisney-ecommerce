import React from 'react'
import './DisneyPlusTrending.scss'
import MoonKnightPromo from '../../assets/moon_knight_promo.png'
import BobaFettPromo from '../../assets/boba_fett_promo.png'


const DisneyPlusTrending = () => {
  return (
    <div className='disney-plus-trending-container'>
        <h1>Trending on Disney+</h1>
        <div className='disney-images-trending'>
            <img src={MoonKnightPromo} alt="Moon Knight"/>
            <img src={BobaFettPromo} alt="Boba Fett"/>
        </div>
        <div className='disney-plus-trending-text-container'>
        <div>
            <h4>Marvel Studios' Moon Knight</h4>
            <p>Relive the journey of Marvel Studios' Moon Knight and watch all episodes, now streaming on Disney+.</p>
            <a>STREAM NOW</a>
        </div>
        <div>
        <h4>Disney Gallery: The Book of Boba Fett</h4>
            <p>Now streaming on Disney+.</p>
            <a>STREAM NOW</a>
        </div>
        </div>
    </div>
  )
}

export default DisneyPlusTrending