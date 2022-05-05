import {Routes, Route} from 'react-router-dom'
import {useState} from 'react'
import Header from './components/Header/Header';
import Home from './Home';
import Shop from './components/Shop/Shop';
import SignInModal from './components/SignInModal/SignInModal'

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
    </Routes>
    </div>
        
  );
}

export default App;
