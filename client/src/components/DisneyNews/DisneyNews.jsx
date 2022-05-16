import React from 'react'
import PolarBear from '../../assets/polar_bear.png'
import Buzz from '../../assets/buzz_lightyear.png'
import MoonKnight from '../../assets/moon_knight.png'
import CheaperByTheDozen from '../../assets/cheaper_by_the_dozen.png'
import './DisneyNews.scss'

const DisneyNews = () => {
  return (
    <div style={{paddingBottom:'5rem'}}>
        <h1 style={{color:'white', display:'grid', alignContent:'center', justifyContent:'center'}}>Disney News</h1>
        <div className='news-card-container'>
            <div className='news-card'>
                <img src={PolarBear} alt="test" />
                <div className='news-card-text'>
                <h5>NEWS DISNEY+</h5>
                <span>Disneynature's Look Inside the Cold Life of a Polar Bear</span>
                <p>April 26,2022</p> 
                </div>   
            </div>
            <div className='news-card'>
                <img src={Buzz} alt="test" />
                <div className='news-card-text'>
                <h5>NEWS DISNEY, PIXAR</h5>
                <span>Not Your Parent's Buzz: Disney and Pixar's Lightyear Is Nothing to Toy With</span>
                <p>April 23,2022</p> 
                </div>   
            </div>
            <div className='news-card'>
                <img src={MoonKnight} alt="test" />
                <div className='news-card-text'>
                <h5>NEWS DISNEY+</h5>
                <span>Oscar Isaac Shines as Dual Characters in Marvel Studios' Moon Knight</span>
                <p>April 13, 2022</p>
                </div>    
            </div>
            <div className='news-card'>
                <img src={CheaperByTheDozen} alt="test" />
                <div className='news-card-text'>
                <h5>NEWS DISNEY+</h5>
                <span>Cheaper by the Dozen Offers a Fresh Take on the Classic Hit</span>
                <p>April 6, 2022</p>
                </div>    
            </div>
        </div>
    </div>
  )
}

export default DisneyNews