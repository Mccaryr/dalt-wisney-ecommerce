import NavBar from '../NavBar/NavBar'
import SearchBar from '../SearchBar/SearchBar'
import './Header.scss'

const Header = ({openModal, signedInStatus}) => {
  return (
    <div className='header-container'>
        <NavBar />
        {signedInStatus ?
        <p style={{color:'white'}}>SIGNED IN</p>
        : <button onClick={()=> openModal(true)}>SIGN IN</button>
        }
        <SearchBar />
    </div>
  )
}

export default Header