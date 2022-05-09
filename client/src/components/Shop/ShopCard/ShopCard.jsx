import React from 'react'
import './ShopCard.scss'

const ShopCard = ({product}) => {
  return (
          <div className='shop-card'> 
          <img alt="disney product" src={product.url} />
        <div>
            <span>{product.name}</span>
            <br />
            <span>{product.price}</span>
        </div>
        </div>
  )
}

export default ShopCard