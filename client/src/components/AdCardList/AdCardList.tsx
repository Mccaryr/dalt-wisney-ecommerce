import React from 'react'
import BobaFett from '../../assets/boba_fett.png'
import DeathStar from '../../assets/death_star.png'
import ShopDisney from '../../assets/shop_disney.png'
import DisneyPlusAnime from '../../assets/disney_plus_anime.png'
import './AdCardList.scss'



const AdCardList: React.FC = () => {
  return (
    <div className='card-list'>
        <div className='card'>
            <img src={BobaFett} alt="Boba Fett" />
            <div className="card-text">
            <h3>The Book of Boba Fett</h3>
            <p>All episodes are Streaming on Disney+</p>
            </div>
        </div>
        <div className='card'>
            <img src={DeathStar} alt="Star Wars Collection" />
            <div className="card-text">
            <h3>The Star Wars Collection</h3>
            <p>Stream All of Your Star Wars Favorites Now on Disney+</p>
            </div>
        </div>
        <div className='card'>
            <img src={ShopDisney} alt="Shop" />
            <div className="card-text">
            <h3>shopDisney</h3>
            <p>Star Wars Day is Here! Celebrate in True Jedi Fashion with our Out-of-This-World Finds</p>
            </div>
        </div>
        <div className='card'>
            <img src={DisneyPlusAnime} alt="Disney Star Wars Anime" />
            <div className="card-text">
            <h3>Streaming on Disney+</h3>
            <p>Seven Japanese Anime Studios Bring Their Unique Talent and Perspective to Star Wars: Visions</p>
            </div>
        </div>
    </div>
  )
}

export default AdCardList