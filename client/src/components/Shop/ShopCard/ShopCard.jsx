import React from 'react'
import DrStrangeBackground from '../../../assets/drstrange_background.png'
import './ShopCard.scss'

const ShopCard = () => {
  return (
    <div className='shop-card'>
        <img alt="disney product" src={DrStrangeBackground} />
        <div>
            <span>Name</span>
            <br />
            <span>Price</span>
        </div>
    </div>
  )
}

export default ShopCard