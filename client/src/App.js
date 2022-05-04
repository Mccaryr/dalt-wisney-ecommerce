import { useState } from 'react';
import Header from './components/Header/Header';
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainContent from './components/MainContent/MainContent';
import AdCardList from './components/AdCardList/AdCardList';
import SignInModal from './components/SignInModal/SignInModal';
import './App.scss';

function App() {
  const [modalStatus, setModalStatus] = useState(false)


  return (
    <div> 
        {modalStatus &&<SignInModal closeModal={setModalStatus}/>}
        <Header openModal={setModalStatus}/>
        <MainContent />
        <AdCardList />
    </div>
  );
}

export default App;
