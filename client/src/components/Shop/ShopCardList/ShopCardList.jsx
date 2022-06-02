import { useEffect } from 'react'
import ShopCard from '../ShopCard/ShopCard'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../../features/Shop/shopSlice'
import './ShopCardList.scss'

const ShopCardList = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.products.productList)
  
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  

  return (
    <div className='shop-card-list'>
      {productData.map((product) => (

        <ShopCard product={product} key={`${product.id}${product.name}`}/>
      ))}
    </div>
  )
}

export default ShopCardList