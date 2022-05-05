import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.scss'

const NavBar = () => {
  return (
    <div className='navbar'>
          <Link to="/"><img style={{width:'95px', height:'40px', padding:'15px'}} src="https://static-mh.content.disney.io/matterhorn/assets/goc/disney_logo_dark@2x-45d70f7dd57b.png" alt="disney logo"></img></Link>
          <a href="http://localhost:3000/">DISNEY+</a>
          <a href="http://localhost:3000/">PARKS & TRAVEL</a>
          <a href="http://localhost:3000/">MOVIES</a>
          <Link to="/shop">SHOP</Link>
          <a href="http://localhost:3000/">MORE</a>

    </div>
  )
}

export default NavBar