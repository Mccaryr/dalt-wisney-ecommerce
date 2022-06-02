import NavBar from '../NavBar/NavBar'
import SearchBar from '../SearchBar/SearchBar'
import ShoppingCartIcon from '../../assets/shopping_cart_icon.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Header.scss'

const Header = ({openModal, signedInStatus, setSignedInStatus}) => {
  const cartCount = useSelector((state) => state.products.cart.length)

  const logout = () => {
    sessionStorage.clear();
    setSignedInStatus(false);
    
  }

  return (
    <div className='header-container'>
        <NavBar />
        {signedInStatus ?
        <>
        <Link to='/'><button style={{color:'white'}} onClick={() => logout()}>LOGOUT</button></Link>
        <Link to='/mycart'><button style={{padding:'8px'}}><img src={ShoppingCartIcon} alt="Shopping Cart" />My Cart ({cartCount})</button></Link>
        </>
        : <button onClick={()=> openModal(true)} style={{padding:'8px'}}>SIGN IN</button>
        }
        
        <SearchBar />
    </div>
  )
}

export default Header