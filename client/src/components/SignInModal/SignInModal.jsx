import React from 'react'
import DisneyAccount from '../../assets/disney_account.png'
import './SignInModal.scss'

const SignInModal = ({closeModal}) => {
  return (
    <div className='modal-background'>
    <div className='modal-container'>
      <div className='close-button'>
      <button style={{justifyContent:'flex-end', display:'flex'}} onClick={()=> closeModal(false)}>X</button>
      </div>
      <img src={DisneyAccount} alt="disney account logo"/>
      <h3 style={{color:'#6EBAF2'}}>Enter Your Email Address</h3>
      <input type="text" placeholder='Email Address' />
      <button style={{backgroundColor:'#6EBAF2', width:'300px', borderRadius:'5px', padding:'10px', color:'white', marginTop:'20px'}}>Continue</button>
    </div>
    </div>
  )
}

export default SignInModal