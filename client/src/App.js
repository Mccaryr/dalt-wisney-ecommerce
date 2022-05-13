import {Routes, Route} from 'react-router-dom'
import {useState} from 'react'
import Header from './components/Header/Header';
import Home from './Home';
import Shop from './components/Shop/Shop';
import SignInModal from './components/SignInModal/SignInModal'
import UnderConstruction from './components/UnderConstruction/UnderConstruction';
import DisneyPlus from './components/DisneyPlus/DisneyPlus';

const App = () => {

  const [modalStatus, setModalStatus] = useState(false)
  const [signedIn, setSignedIn] = useState(false)
  

  return (
    <div>
      {modalStatus &&<SignInModal closeModal={setModalStatus} signedInStatus={setSignedIn}/>}
          <Header openModal={setModalStatus} signedInStatus={signedIn} />
    <Routes>
      <Route path='/' element={<Header />} />
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/parks&travel' element={<UnderConstruction />} />
        <Route path='/movies' element={<UnderConstruction />} />
        <Route path='/disney+' element={<DisneyPlus />} />
        <Route path='/more' element={<UnderConstruction />} />

    </Routes>
    </div>
        
  );
}

export default App;
