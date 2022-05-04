import React from 'react'
import DrStrangeBackground from '../../assets/drstrange_background.png'
import DrStrangeLogo from '../../assets/drstrange_logo.png'
import './MainContent.scss'

const MainContent = () => {
  return (
    <div className='background-image' style={{backgroundImage:`url(${DrStrangeBackground})`}}>
        <div className='main-content-container'>
            <img src={DrStrangeLogo} alt="Dr Strange Multiverse of Madness" style={{width:'50%', opacity:'1'}}/>
            <p>Tickets are now on sale. Experience it ony in theaters May 6.</p>
            <button className='get-tix-button'>Get Tickets</button>
            <button className='button' style={{backgroundColor:'transparent'}}>Watch Trailer</button>
        </div>

    </div>
  )
}

export default MainContent