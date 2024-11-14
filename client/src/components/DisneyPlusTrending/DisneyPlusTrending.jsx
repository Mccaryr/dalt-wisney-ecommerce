import React from 'react'
import './DisneyPlusTrending.scss'
import MoonKnightPromo from '../../assets/moon_knight_promo.png'
import BobaFettPromo from '../../assets/boba_fett_promo.png'


const DisneyPlusTrending = () => {
  return (
    <div className='disney-plus-section'>
      <h1>Trending on Disney+</h1>
    <div className='disney-plus-trending-container'>
          <div className="card-container">
            <img src={MoonKnightPromo} alt="Moon Knight"/>
            <div className='disney-plus-trending-text-container'>
              <h4>Marvel Studios' Moon Knight</h4>
            </div>
          </div>
          <div className="card-container">
            <img src={BobaFettPromo} alt="Boba Fett"/>
            <div className='disney-plus-trending-text-container'>
              <h4>Disney Gallery: The Book of Boba Fett</h4>
            </div>
          </div>
    </div>
    </div>
  )
}

export default DisneyPlusTrending