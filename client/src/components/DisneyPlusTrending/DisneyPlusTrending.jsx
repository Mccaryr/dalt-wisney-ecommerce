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
              <p>Relive the journey of Marvel Studios' Moon Knight and watch all episodes, now streaming on Disney+.</p>
              <a href="https://www.disneyplus.com/series/moon-knight/4S3oOF1knocS">STREAM NOW</a>
            </div>
          </div>
          <div className="card-container">
            <img src={BobaFettPromo} alt="Boba Fett"/>
            <div className='disney-plus-trending-text-container'>
              <h4>Disney Gallery: The Book of Boba Fett</h4>
              <p>Now streaming on Disney+.</p>
              <a href="https://www.disneyplus.com/series/the-book-of-boba-fett/57TL7zLNu2wf">STREAM NOW</a>
            </div>
          </div>
    </div>
    </div>
  )
}

export default DisneyPlusTrending