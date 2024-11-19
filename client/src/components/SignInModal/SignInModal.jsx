import DisneyAccount from '../../assets/disney_account.png'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { getCart } from '../../features/Shop/shopSlice'
import './SignInModal.scss'
import axios from 'axios'

const SignInModal = ({closeModal, setSignedInStatus}) => {
  const [emailInput, setEmailInput] = useState('test@email.com')
  const dispatch = useDispatch();
  let hostUrl = 'https://dalt-wisney-ecommerce.onrender.com'


  if(window.location.hostname === 'localhost'){
    console.log("local dev sign on")
    hostUrl = 'http://localhost:5001'
  }

  const loginUser = async () => {

    try {
      await axios.get(`${hostUrl}/user/${emailInput}`).then((response) => {
        sessionStorage.setItem('user', JSON.stringify(response.data[0]));        
        if(sessionStorage.getItem('user') !== "undefined") {
          setSignedInStatus(true)
          closeModal(false)
        }
        
      }).catch((error) =>{
        console.log(error)
      })
      
    }

    catch(error) {
      console.log(error.message)
    }
  }

  const getUserCart = async () => {
    const user_id = JSON.parse(sessionStorage.getItem('user'))._id
    try {
        await axios.get(`${hostUrl}/api/cart/${user_id}`).then((response) => {
          if(response.data.cart){
            dispatch(getCart(response.data.cart))
          } 

            
        })
    } catch (err) {
        console.log(err)
    }
}

  useEffect(() => {
    if(sessionStorage.getItem('user')){
      getUserCart()
    }
})

  return (
    <div className='modal-background'>
      <div className='modal-container'>
        <div className='close-button'>
          <button style={{
            float: 'right',
            backgroundColor: 'transparent',
            color: '#6EBAF2',
            fontSize: '25px',
            border: 'none',
            cursor: 'pointer'
          }} onClick={() => closeModal(false)}>X
          </button>
        </div>
        <h2 style={{fontFamily: 'Waltograph, sans-serif', fontSize: '40px', textAlign: 'center'}}>Login</h2>
        <div className={'login-container'}>
          <input type="text" placeholder="email" defaultValue={emailInput}
                 onChange={(e) => setEmailInput(e.target.value)}/>
          <button className={'submit-btn'} onClick={loginUser}>Login with Email</button>
        </div>
      </div>
    </div>
  )
}

export default SignInModal