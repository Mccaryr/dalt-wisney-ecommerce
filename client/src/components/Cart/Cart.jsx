import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Cart.scss'


const Cart = () => {
    const [userCart, setUserCart] = useState([])

    const getUserCart = async () => {
        const user_id = JSON.parse(sessionStorage.getItem('user'))._id
        try {
            await axios.get(`http://localhost:5000/api/cart/${user_id}`).then((response) => {
                setUserCart(response.data.cart)
            })
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if(sessionStorage.getItem('user')) {
            getUserCart()
        }
    }, [])

  return (
    <div className="cart-container">
        <div>
            {userCart.map(cartItem => (
                <div key={cartItem.name}>
                <h3>{cartItem.name}</h3>
                <img src={cartItem.url} alt={cartItem.name} />
                <p>{cartItem.price}</p>
                <button style={{color:"white", backgroundColor:"red"}}>Remove from Cart</button>
                </div>
            ))}
        </div>
        <button>Continue to checkout</button>
    </div>
  )
}

export default Cart