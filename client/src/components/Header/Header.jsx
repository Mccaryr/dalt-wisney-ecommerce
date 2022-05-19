import NavBar from '../NavBar/NavBar'
import SearchBar from '../SearchBar/SearchBar'
import ShoppingCartIcon from '../../assets/shopping_cart_icon.png'
import './Header.scss'

const Header = ({openModal, signedInStatus, setSignedInStatus}) => {

  const logout = () => {
    localStorage.removeItem('user');
    setSignedInStatus(false)
    console.log(signedInStatus)
  }

  return (
    <div className='header-container'>
        <NavBar />
        {signedInStatus ?
        <button style={{color:'white'}} onClick={() => logout()}>LOGOUT</button>
        : <button onClick={()=> openModal(true)} style={{padding:'8px'}}>SIGN IN</button>
        }
        <button style={{padding:'8px'}}><img src={ShoppingCartIcon} alt="Shopping Cart" />My Cart (0)</button>
        <SearchBar />
    </div>
  )
}

export default Header