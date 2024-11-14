import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.scss'
import '../../App.scss'

const NavBar = () => {
  return (
    <div className='navbar'>
         <Link to="/">
            <span style={{fontFamily: 'Waltograph, sans-serif', fontSize:'30px'}}>Wisney</span>
          </Link>
          <Link to="/disney+">DISNEY+</Link>
          <Link to="/parks&travel">PARKS & TRAVEL</Link>
          <Link to="/shop">SHOP</Link>

    </div>
  )
}

export default NavBar