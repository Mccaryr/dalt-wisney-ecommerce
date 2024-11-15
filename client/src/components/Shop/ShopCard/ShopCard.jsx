import React from 'react'
import { useDispatch} from 'react-redux'
import { addToCart } from '../../../features/Shop/shopSlice'
import './ShopCard.scss'


const ShopCard = ({product}) => {
  const dispatch = useDispatch();

  const truncateText = (str) => {
      if(str.length > 50) {
          return str.substring(0, 50) + '...'
      } else {
          return str
      }
  }
    

  const addToCartDB = () => {
    if(sessionStorage.getItem('user')) {
      dispatch(addToCart({_id: product.id, name: product.title, price: product.price, url: product.image, qty: 1}));
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