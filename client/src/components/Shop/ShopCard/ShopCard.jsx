import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { addToCart } from '../../../features/Shop/shopSlice'
import './ShopCard.scss'
import axios from 'axios'

const ShopCard = ({product}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.products.cart)

  const addToCartDB = () => {
    dispatch(addToCart(product));
    const user_email = sessionStorage.getItem('user')
    axios.put(`http://localhost:5000/api/cart/${user_email}`, {user_email: user_email, cart: cartItems})
    
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ user_email: sessionStorage.getItem('user'), cart: cartItems})
  // };
  // fetch('http://localhost:5000/api/cart', requestOptions)
  //     .then(response => response.json())
  //     .then(console.log('sent to backend'))
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