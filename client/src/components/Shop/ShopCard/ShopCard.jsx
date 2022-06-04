import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux'
import { addToCart, getCart } from '../../../features/Shop/shopSlice'
import axios from 'axios'
import './ShopCard.scss'


const ShopCard = ({product}) => {
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

    

  const addToCartDB = () => {
    if(sessionStorage.getItem('user')) {
      dispatch(addToCart({_id: product._id, name: product.name, price: product.price, url: product.url, qty: 1}));
    }
    else {
      alert("Please sign in to add items to cart")
    }
  }

  useEffect(() => {
    if(sessionStorage.getItem('user')){
      getUserCart()
    }
}, [])

  

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