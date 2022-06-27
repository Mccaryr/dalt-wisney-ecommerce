import {Routes, Route} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Header from './components/Header/Header';
import Home from './Home';
import SignInModal from './components/SignInModal/SignInModal'
import DisneyPlus from './components/DisneyPlus/DisneyPlus';
import Cart from './components/Cart/Cart';
import ShopCardList from './components/Shop/ShopCardList/ShopCardList';
import ParksAndTravel from './components/ParksAndTravel/ParksAndTravel';

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
        <Route path='/shop' element={<ShopCardList />} />
        <Route path='/parks&travel' element={<ParksAndTravel />} />
        <Route path='/disney+' element={<DisneyPlus />} />
        <Route path='/mycart' element={<Cart />} />

    </Routes>
    </div>
        
  );
}

export default App;
