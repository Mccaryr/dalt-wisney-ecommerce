import React, {useEffect} from 'react'
import './Toast.scss'
import {useDispatch} from "react-redux";
import {setToastDetails} from "../../features/Toast/toastSlice";

const Toast = ({toastDetails}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        if(toastDetails.visible) {
            const timer = setTimeout(() => {
                dispatch(setToastDetails({visible: false}))
            }, 3000)

            return () => clearTimeout(timer)
        }
    }, [toastDetails.visible, dispatch])

    return (
        <div className='toast-container'>
            <button className='toast-close' onClick={()=>dispatch(setToastDetails({visible:false}))}>&times;</button>
            <div style={{display:'flex', width:'100%', height:'100%', justifyContent:'center', alignItems: 'center', gap:'2rem'}}>
                <div
                    style={{
                        backgroundColor: toastDetails.status === "Success" ? "green" : "red",
                        width:'10%',
                        height:'100%',
                        position:'absolute',
                        left:0,
                        borderRadius:'1rem 0',
                    }}
                />
                <div><i className="fa-solid fa-check"></i></div>
                <div className='message'>{toastDetails.message}</div>
            </div>
        </div>
    )
}
export default Toast
