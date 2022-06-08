import React from 'react'
import HeadlinerAd from '../../assets/./DisneyPlus/headliner_ad.png'
import './DisneyPlus.scss'

const DisneyPlus = () => {
  return (
    <div className='container'>
      <div className="disney-bundle-container">
        <pre><h1>Hulu     Disney+     ESPN+</h1></pre>
        <strong><p style={{fontSize:'2vw'}}>Enter your email to create or restart you subscription</p></strong>
        <div className="email-container">
          <input type="text" placeholder="Email" /><button>GET THE DISNEY BUNDLE</button>
        </div>
      </div>
      <div className="headliner-ad">
        <img src={HeadlinerAd} alt="headliner ad" />
        <div className="text-container">
        <h1>Watch the way you want</h1>
        <ul>
          <li>Host virtual movie nights with GroupWatch. Pause, rewind and react with up to six friends. Subscription is required to join GroupWatch.</li>
          <li>Download any movie or series and watch on-the-go.</li>
          <li>Enjoy an ever-growing range of titles in stunning 4K UHD and Dolby Atmos sound on compatible devices.</li>
          <li>Stream on up to four devices at the same time.</li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default DisneyPlus