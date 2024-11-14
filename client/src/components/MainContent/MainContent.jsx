import React from 'react'
import DrStrangeBackground from '../../assets/strange_background.webp'
import DrStrangeLogo from '../../assets/drstrange_logo.png'
import './MainContent.scss'

const MainContent = () => {
  return (
    <div className='main-content-container'>
    <div className='background-image' style={{backgroundImage:`url(${DrStrangeBackground})`}}>
        <div className='background-image-container'>
            <img src={DrStrangeLogo} className='drstrange-logo' alt="Dr Strange Multiverse of Madness"/>
           <button className='button' style={{backgroundColor:'transparent', borderColor:'white', marginTop:'30px'}} onClick={() => window.open(`https://www.youtube.com/watch?v=aWzlQ2N6qqg`, '_blank')}>
               Watch Trailer
           </button>
        </div>

    </div>
    </div>
  )
}

export default MainContent