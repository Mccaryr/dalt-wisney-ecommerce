import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.scss'

const NavBar = () => {
  return (
    <div className='navbar'>
          <Link to="/"><img style={{width:'95px', height:'40px', padding:'15px'}} src="https://static-mh.content.disney.io/matterhorn/assets/goc/disney_logo_dark@2x-45d70f7dd57b.png" alt="disney logo"></img></Link>
          <Link to="/disney+">DISNEY+</Link>
          <Link to="/parks&travel">PARKS & TRAVEL</Link>
          <Link to="/movies">MOVIES</Link>
          <Link to="/shop">SHOP</Link>
          <Link to="/more">MORE</Link>

    </div>
  )
}

export default NavBar