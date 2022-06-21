import React from 'react'
import { useDispatch} from 'react-redux'
import { addToCart, getCart } from '../../../features/Shop/shopSlice'
import './ShopCard.scss'


const ShopCard = ({product}) => {
  const dispatch = useDispatch();


    

  const addToCartDB = () => {
    if(sessionStorage.getItem('user')) {
      dispatch(addToCart({_id: product._id, name: product.name, price: product.price, url: product.url, qty: 1}));
    }
    else {
      alert("Please sign in to add items to cart, you can try test@email.com to demo")
    }
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