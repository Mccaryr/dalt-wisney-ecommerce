import React from 'react'
import NavBar from '../NavBar/NavBar'
import SignIn from '../SignIn/SignIn'
import SearchBar from '../SearchBar/SearchBar'
import './Header.scss'

const Header = () => {
  return (
    <div className='header-container'>
        <NavBar />
        <SignIn />
        <SearchBar />
    </div>
  )
}

export default Header