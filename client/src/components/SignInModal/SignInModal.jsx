import React from 'react'
import DisneyAccount from '../../assets/disney_account.png'
import { signInWithGooglePopup } from '../../firebase'
import './SignInModal.scss'

const SignInModal = ({closeModal, signedInStatus}) => {

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    signedInStatus(true);
    closeModal(false)
  }

  return (
    <div className='modal-background'>
    <div className='modal-container'>
      <div className='close-button'>
      <button style={{float:'right', backgroundColor:'transparent', color:'#6EBAF2', fontSize:'25px', border:'none' }} onClick={()=> closeModal(false)}>X</button>
      </div>
      <img src={DisneyAccount} alt="disney account logo"/>
      <button style={{backgroundColor:'#6EBAF2', width:'300px', borderRadius:'5px', padding:'10px', color:'white', marginTop:'20px'}} onClick={logGoogleUser}>Login with Gooogle</button>
    </div>
    </div>
  )
}

export default SignInModal