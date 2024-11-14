import NavBar from '../NavBar/NavBar'
import ShoppingCartIcon from '../../assets/shopping_cart_icon.png'
import MobileNavbar from '../NavBar/MobileNavbar'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Header.scss'
const Header = ({openModal, signedInStatus, setSignedInStatus}) => {
  const cartCount = useSelector(state => state.products.cartCount)


  const logout = () => {
    sessionStorage.clear();
    setSignedInStatus(false);
    
  }

  return (
    
    <div className='header-container'>
        <MobileNavbar />
        <div className="nav-container">
          <NavBar className='navbar'/>
        </div>

        {signedInStatus ?
        <div>
        <Link to='/'><button style={{padding:'5px', fontWeight:'bold', fontSize:'14px', fontFamily:'Lato, sans-serif'}} onClick={() => logout()}>LOGOUT</button></Link>
        <Link to='/mycart'><button style={{padding:'8px'}}><img src={ShoppingCartIcon} alt="Shopping Cart" />My Cart ({cartCount})</button></Link>
        </div>
        : <button onClick={()=> openModal(true)} style={{padding:'8px', fontWeight:'bold', fontSize:'14px', fontFamily:'Lato, sans-serif'}}>SIGN IN</button>
        }
    </div>
  )
}

export default Header