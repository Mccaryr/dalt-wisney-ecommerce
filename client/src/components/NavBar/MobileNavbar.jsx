import {useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdClose} from 'react-icons/md'
import { Link } from 'react-router-dom';
import './MobileNavbar.scss'

const MobileNavbar = () => {
    const [openHamburger, setOpenHamburger] = useState(false);

    const hamburgerIcon = <GiHamburgerMenu   className='hamburger-menu' size='25px' onClick={() => setOpenHamburger(!openHamburger)}/>

    const closeIcon = <MdClose className='hamburger-menu' size='25px' onClick={() => setOpenHamburger(!openHamburger)}/>

  return (
    <>
        {openHamburger ? closeIcon : hamburgerIcon}
        {openHamburger && <div className='mobile-navbar'><Link to="/disney+">DISNEY+</Link>
                                <hr />
                                <Link to="/parks&travel">PARKS & TRAVEL</Link>
                                <hr />
                                <Link to="/movies">MOVIES</Link>
                                <hr />
                                <Link to="/shop">SHOP</Link>
                                <hr />
                            </div>
        }
    </>
  )
}

export default MobileNavbar
