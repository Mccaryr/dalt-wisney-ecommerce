import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { addToCart } from '../../../features/Shop/shopSlice'
import './ShopCard.scss'

const ShopCard = ({product}) => {
  const dispatch = useDispatch();

  const addToCartDB = () => {
    dispatch(addToCart(product));
    
    console.log(JSON.parse(sessionStorage.getItem('cart')))
  
    
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_email: sessionStorage.getItem('user'), cart: sessionStorage.getItem('cart')})
  };
  fetch('http://localhost:5000/api/cart', requestOptions)
      .then(response => response.json())
      .then(console.log('sent to backend'))
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