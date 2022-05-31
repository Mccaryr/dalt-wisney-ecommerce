import React from 'react'
import { useDispatch} from 'react-redux'
import { addToCart } from '../../../features/Shop/shopSlice'
import './ShopCard.scss'


const ShopCard = ({product}) => {
  const dispatch = useDispatch();

  const addToCartDB = () => {
    dispatch(addToCart(product));
    
    
  }

  

  return (
          <div className='shop-card' key={product.id}> 
          <img alt="disney product" src={product.url} />
        <div>
            <span>{product.name}</span>
            <br />
            <span>${product.price}</span>
            <button className='on-hover-visible-button' onClick={()=> addToCartDB()}>Add To Cart</button>
        </div>
        </div>
  )
}

export default ShopCard