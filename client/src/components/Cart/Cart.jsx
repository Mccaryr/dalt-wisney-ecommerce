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
        // try {
        //     await axios.get(`http://localhost:5000/api/cart/${user_id}`).then((response) => {
        //         setUserCart(response.data.cart)
        //         console.log(userCart)
        //     })
        // } catch (err) {
        //     console.log(err)
        // }
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
    <div className="cart-container">
        <div>
            {userCart.map(cartItem => (
                <div key={cartItem.name}>
                <h3>{cartItem.name}</h3>
                <img src={cartItem.url} alt={cartItem.name} />
                <p>${cartItem.price}</p>
                <p>Qty: {cartItem.qty}</p>
                <button style={{color:"white", backgroundColor:"red"}} onClick={() => dispatch(removeFromCart(cartItem))}>Remove from Cart</button>
                </div>
            ))}
        </div>
        <button>Continue to checkout</button>
    </div>
  )
}

export default Cart