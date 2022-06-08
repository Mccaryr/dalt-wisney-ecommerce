import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.scss'

const NavBar = () => {
  return (
    <div className='navbar'>
          <Link to="/disney+">DISNEY+</Link>
          <Link to="/parks&travel">PARKS & TRAVEL</Link>
          {/* <Link to="/movies">MOVIES</Link> */}
          <Link to="/shop">SHOP</Link>
          {/* <Link to="/more">MORE</Link> */}

    </div>
  )
}

export default NavBar