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
    // <div className='header-container'>
    //     <MobileNavbar />
    //     <Link to="/"><img style={{width:'95px', height:'40px', padding:'15px'}} src="https://static-mh.content.disney.io/matterhorn/assets/goc/disney_logo_dark@2x-45d70f7dd57b.png" alt="disney logo"></img></Link>
    //     <NavBar className='navbar'/>
    //     {signedInStatus ?
    //     <>
    //     <Link to='/'><button style={{padding:'5px'}} onClick={() => logout()}>LOGOUT</button></Link>
    //     <Link to='/mycart'><button style={{padding:'8px'}}><img src={ShoppingCartIcon} alt="Shopping Cart" />My Cart ({cartCount})</button></Link>
    //     </>
    //     : <button onClick={()=> openModal(true)} style={{padding:'8px'}}>SIGN IN</button>
    //     }
    // </div>


    <div className='header-container'>
        <MobileNavbar />
        <div className="nav-container">
          <Link to="/"><img style={{width:'95px', height:'40px', padding:'15px'}} src="https://static-mh.content.disney.io/matterhorn/assets/goc/disney_logo_dark@2x-45d70f7dd57b.png" alt="disney logo"></img></Link>
          <NavBar className='navbar'/>
        </div>
        
        {signedInStatus ?
        <>
        <Link to='/'><button style={{padding:'5px'}} onClick={() => logout()}>LOGOUT</button></Link>
        <Link to='/mycart'><button style={{padding:'8px'}}><img src={ShoppingCartIcon} alt="Shopping Cart" />My Cart ({cartCount})</button></Link>
        </>
        : <button onClick={()=> openModal(true)} style={{padding:'8px'}}>SIGN IN</button>
        }
    </div>
  )
}

export default Header