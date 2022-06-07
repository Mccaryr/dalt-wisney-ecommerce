import React from 'react'
import DrStrangeBackground from '../../assets/drstrange_background.png'
import DrStrangeLogo from '../../assets/drstrange_logo.png'
import './MainContent.scss'

const MainContent = () => {
  return (
    <div className='main-content-container'>
    <div className='background-image' style={{backgroundImage:`url(${DrStrangeBackground})`}}>
        <div className='background-image-container'>
            <img src={DrStrangeLogo} className='drstrange-logo' alt="Dr Strange Multiverse of Madness"/>
            <button className='get-tix-button'>Get Tickets</button>
            <button className='button' style={{backgroundColor:'transparent', borderColor:'white'}}>Watch Trailer</button>
        </div>

    </div>
    </div>
  )
}

export default MainContent