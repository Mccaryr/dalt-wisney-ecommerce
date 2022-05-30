import DisneyAccount from '../../assets/disney_account.png'
// import { signInWithGooglePopup } from '../../firebase'
import { useState } from 'react'
import './SignInModal.scss'
import axios from 'axios'

const SignInModal = ({closeModal, setSignedInStatus}) => {
  const [emailInput, setEmailInput] = useState('')

  const loginUser = async () => {

    try {
      await axios.get(`http://localhost:5000/user/${emailInput}`).then((response) => {
        sessionStorage.setItem('user', JSON.stringify(response.data[0]));
        setSignedInStatus(true)
        closeModal(false)
      }).catch((error) =>{
        console.log(error)
      })
      
    }

    catch(error) {
      console.log(error.message)
    }
  }

  return (
    <div className='modal-background'>
    <div className='modal-container'>
      <div className='close-button'>
      <button style={{float:'right', backgroundColor:'transparent', color:'#6EBAF2', fontSize:'25px', border:'none' }} onClick={()=> closeModal(false)}>X</button>
      </div>
      <img src={DisneyAccount} alt="disney account logo"/>
      <input type="text" placeholder="email" onChange={(e)=> setEmailInput(e.target.value)}/>
      <button style={{backgroundColor:'#6EBAF2', width:'300px', borderRadius:'5px', padding:'10px', color:'white', marginTop:'20px'}} onClick={loginUser}>Login with Email</button>
    </div>
    </div>
  )
}

export default SignInModal