import React from 'react'
// import {Link} from 'react-router-dom'
import './Navbar.scss'

const NavBar = () => {
  return (
    <div className='navbar'>
          {/* <Link><img src="https://static-mh.content.disney.io/matterhorn/assets/goc/disney_logo_dark@2x-45d70f7dd57b.png" alt="disney logo"></img></Link>
          <Link>DISNEY+</Link>
          <Link>PARKS & TRAVEL</Link>
          <Link>MOVIES</Link>
          <Link>SHOP</Link>
          <Link>MORE</Link> */}
          <img style={{width:'95px', height:'40px', padding:'15px'}} src="https://static-mh.content.disney.io/matterhorn/assets/goc/disney_logo_dark@2x-45d70f7dd57b.png" alt="disney logo"></img>
          <a href="http://localhost:3000/">DISNEY+</a>
          <a href="http://localhost:3000/">PARKS & TRAVEL</a>
          <a href="http://localhost:3000/">MOVIES</a>
          <a href="http://localhost:3000/">SHOP</a>
          <a href="http://localhost:3000/">MORE</a>

    </div>
  )
}

export default NavBar