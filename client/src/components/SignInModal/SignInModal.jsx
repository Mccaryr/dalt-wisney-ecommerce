import DisneyAccount from '../../assets/disney_account.png'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { getCart } from '../../features/Shop/shopSlice'
import './SignInModal.scss'
import axios from 'axios'

const SignInModal = ({closeModal, setSignedInStatus}) => {
  const [emailInput, setEmailInput] = useState('')
  const dispatch = useDispatch();



  const loginUser = async () => {

    try {
      await axios.get(`http://localhost:5000/user/${emailInput}`).then((response) => {
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
        await axios.get(`http://localhost:5000/api/cart/${user_id}`).then((response) => {
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