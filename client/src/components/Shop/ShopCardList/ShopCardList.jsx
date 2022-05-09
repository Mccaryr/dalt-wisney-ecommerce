import React from 'react'
import ShopCard from '../ShopCard/ShopCard'
import './ShopCardList.scss'

const ShopCardList = () => {
  return (
    <div className='shop-card-list'>
      <ShopCard/>
      <ShopCard/>
      <ShopCard/>
      <ShopCard/>
      <ShopCard/>
    </div>
  )
}

export default ShopCardList