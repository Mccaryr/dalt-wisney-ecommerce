import React from 'react'
import DeathStar from '../../assets/death_star.png'
import './DisneyNews.scss'

const DisneyNews = () => {
  return (
    <div>
        <h1 style={{color:'white', display:'grid', alignContent:'center', justifyContent:'center'}}>Disney News</h1>
        <div className='news-card-container'>
            <div className='news-card'>
                <img src={DeathStar} alt="test" />
                <div className='news-card-text'>
                <p>NEWS DISNEY+</p>
                <h3>Disneynature's Look Inside the Cold Life of a Polar Bear</h3>
                <p>April 26,2022</p> 
                </div>   
            </div>
            <div className='news-card'>
                <img src={DeathStar} alt="test" />
                <div className='news-card-text'>
                <p>news</p>
                <h3>title</h3>
                <p>date</p> 
                </div>   
            </div>
            <div className='news-card'>
                <img src={DeathStar} alt="test" />
                <div className='news-card-text'>
                <p>news</p>
                <h3>title</h3>
                <p>date</p>
                </div>    
            </div>
            <div className='news-card'>
                <img src={DeathStar} alt="test" />
                <div className='news-card-text'>
                <p>news</p>
                <h3>title</h3>
                <p>date</p>
                </div>    
            </div>
        </div>
    </div>
  )
}

export default DisneyNews