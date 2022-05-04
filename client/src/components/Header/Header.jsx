import NavBar from '../NavBar/NavBar'
import SearchBar from '../SearchBar/SearchBar'
import './Header.scss'

const Header = ({openModal}) => {
  return (
    <div className='header-container'>
        <NavBar />
        <button onClick={()=> openModal(true)}>SIGN IN</button>
        {/* <a href="/" style={{color:'white', lineHeight: '4em', textDecoration:'none', display:'flex', justifyContent:'flex-end'}} onClick={()=> setOpenModal(true)}>SIGN IN</a> */}
        <SearchBar />
    </div>
  )
}

export default Header