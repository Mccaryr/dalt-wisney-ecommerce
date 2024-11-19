import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, getCart } from '../../features/Shop/shopSlice'
import axios from 'axios'
import './Cart.scss'


const Cart = () => {
    const userCart = useSelector(state => state.products.cart)
    const [salesTax, setSalesTax] = useState(0)
    const [subTotal, setSubTotal] = useState(0)
    const [totalCost, setTotalCost] = useState(0)
    const dispatch = useDispatch();

    const getUserCart = async () => {
        const user_id = JSON.parse(sessionStorage.getItem('user'))._id
        
        try {
            await axios.get(`http://localhost:5001/api/cart/${user_id}`).then((response) => {
              if(response.data.cart){
                dispatch(getCart(response.data.cart))
              } 

                
            })
        } catch (err) {
            console.log(err)
        }
    }

    const calculateOrder = () => {
      const shipping = 5.99
      const tax = 0.06
      let subTotal = 0.00
      userCart.map((item) => {
        subTotal += (parseFloat(item.price) * item.qty)
        
      })
      const total = ((shipping + (subTotal * tax) + subTotal)).toFixed(2)
      setSubTotal(subTotal.toFixed(2))
      setSalesTax((subTotal * tax).toFixed(2))
      setTotalCost(total)
    }

    useEffect(() => {
        if(sessionStorage.getItem('user')){
          getUserCart();
          
        }
    }, [])

    useEffect(() => {
     calculateOrder(); 
    })

  return (
    <>
    {userCart.length > 0 ?
    <div className="outer-cart-container">
       
      <h1>My Bag ({userCart.length})</h1>
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
          <h3 style={{textAlign:'center'}}>Order Summary</h3>
          <p>Est. Shipping and Handling: $5.99 </p>
          <p>Est. Sales Tax: ${salesTax}</p>
          <p>Subtotal: ${subTotal}</p>
          <p>Total: ${totalCost}</p>
        <button style={{cursor:'pointer', padding:'15px'}}>Checkout</button>
        </div>
      </div>
      

    </div>
      : 
      <div className="outer-cart-container"><h1>No Items in Cart!</h1></div>
       
        
    // <p style={{color:'white', fontSize:'50px', marginTop:'40vh', zIndex:'999'}}>No Items in Cart!</p>
}
    </>
  )
}

export default Cart