import {useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import './MobileNavbar.scss'

const MobileNavbar = () => {
    const [openHamburger, setOpenHamburger] = useState(false);

  return (
    <div>
        <GiHamburgerMenu   className='hamburger-menu' size='25px' onClick={() => setOpenHamburger(!openHamburger)}/>
    </div>
  )
}

export default MobileNavbar
