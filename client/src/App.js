import {Routes, Route} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Header from './components/Header/Header';
import Home from './Home';
import Shop from './components/Shop/Shop';
import SignInModal from './components/SignInModal/SignInModal'
import UnderConstruction from './components/UnderConstruction/UnderConstruction';
import DisneyPlus from './components/DisneyPlus/DisneyPlus';
import Cart from './components/Cart/Cart';

const App = () => {

  const [modalStatus, setModalStatus] = useState(false)
  const [signedIn, setSignedIn] = useState(false)


  useEffect (() => {
    if(sessionStorage.getItem('user')) {
      setSignedIn(true)
    }
  }, [])
  

  return (
    <div>
      {modalStatus &&<SignInModal closeModal={setModalStatus} setSignedInStatus={setSignedIn}/>}
          <Header openModal={setModalStatus} signedInStatus={signedIn} setSignedInStatus={setSignedIn}  />
    <Routes>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/parks&travel' element={<UnderConstruction />} />
        <Route path='/movies' element={<UnderConstruction />} />
        <Route path='/disney+' element={<DisneyPlus />} />
        <Route path='/more' element={<UnderConstruction />} />
        <Route path='/mycart' element={<Cart />} />

    </Routes>
    </div>
        
  );
}

export default App;
