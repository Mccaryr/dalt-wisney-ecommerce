import React from 'react'
import DrStrangeBackground from '../../../assets/drstrange_background.png'

const ShopCard = () => {
  return (
    <div>
        <img src={DrStrangeBackground} />
        <div>
            <p>Name</p>
            <p>Price</p>
        </div>
    </div>
  )
}

export default ShopCard