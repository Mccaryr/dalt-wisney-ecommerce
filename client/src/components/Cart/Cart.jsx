import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, getCart } from '../../features/Shop/shopSlice'
import axios from 'axios'
import './Cart.scss'


const Cart = () => {
    const userCart = useSelector(state => state.products.cart)
    const dispatch = useDispatch();

    const getUserCart = async () => {
        const user_id = JSON.parse(sessionStorage.getItem('user'))._id
        
        try {
            await axios.get(`http://localhost:5000/api/cart/${user_id}`).then((response) => {
              if(response.data.cart){
                dispatch(getCart(response.data.cart))
              } 

                
            })
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if(sessionStorage.getItem('user')){
          getUserCart();
          userCart.forEach(item => {
              console.log(item)
          })
        }
    }, [])

  return (
    <div className="outer-cart-container">
      <h1>My Bag ({sessionStorage.getItem('cartCount')})</h1>
      <p>____________________________________________</p>
      <div className='inner-cart-container'>
        <div className='bag-container'>
            {userCart.map(cartItem => (
                <div className='cart-item' key={cartItem.name}>
                  <img className='cart-image' src={cartItem.url} alt={cartItem.name} />
                <div className='bag-text'>
                  <h4>{cartItem.name}</h4>
                  <p>${cartItem.price}</p>
                  <p>Qty: {cartItem.qty}</p>
                  <button onClick={() => dispatch(removeFromCart(cartItem))}>Remove from Cart</button>
                </div>
                </div>
            ))}
            </div>
        <div className='order-container'>
          <h3>Order Summary</h3>
          <p>Subtotal</p>
          <p>Est.Shipping and Handling </p>
          <p>Est. Sales Tax</p>
          <p>Total</p>
        <button>Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart