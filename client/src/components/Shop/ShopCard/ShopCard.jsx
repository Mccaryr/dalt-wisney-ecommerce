import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addProductToDBCart, addToCart} from '../../../features/Shop/shopSlice'
import './ShopCard.scss'
import {setToastDetails} from "../../../features/Toast/toastSlice";


const ShopCard = ({product}) => {
  const dispatch = useDispatch();
  const userCart = useSelector((state) => state.products.cart)

  const truncateText = (str) => {
      if(str.length > 50) {
          return str.substring(0, 50) + '...'
      } else {
          return str
      }
  }
    

  const addToCartDB = () => {
    if(sessionStorage.getItem('user')) {
      let cartItem = {
          _id: product.id,
          name: product.title,
          price: product.price,
          url: product.image,
          qty: 1
      }
    let newCart = [...userCart]
    newCart.push(cartItem)
      dispatch(addProductToDBCart({newCart})).then((resp) => {
          if(resp) {
              dispatch(addToCart(cartItem))
              dispatch(setToastDetails({visible: true, status: "Success", message:"Added to Cart!"}))
          } else {
              dispatch(setToastDetails({visible: true, status: "Failed"}))
          }
      })
    }
    else {
      alert("Please sign in to add items to cart, you can try test@email.com to demo")
    }
  }


  

  return (
          <div className='shop-card' key={product.id}> 
          <img alt="disney product" src={product.image} />
        <div>
            <span>{truncateText(product.title)}</span>
            <br />
            <span>${product.price}</span>
            <button className='on-hover-visible-button' onClick={()=> addToCartDB()}>Add To Cart</button>
        </div>
        </div>
  )
}

export default ShopCard