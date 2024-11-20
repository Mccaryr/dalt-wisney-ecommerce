import React from 'react'
import './Checkout.scss'
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setToastDetails} from "../../features/Toast/toastSlice";
import {emptyCart} from "../../features/Shop/shopSlice";

const Checkout = ({setCheckoutActive, getUserCart}) => {
    const userCart = useSelector(state => state.products.cart)
    const dispatch = useDispatch();


    let hostUrl = 'https://dalt-wisney-ecommerce.onrender.com'


    if(window.location.hostname === 'localhost'){
        hostUrl = 'http://localhost:5001'
    }

    const handleSubmit = (e) => {
        const {cardholderName, cardNumber, expMonth, expYear, cvv} = e.target
        e.preventDefault();
        try {
            axios.post(`${hostUrl}/api/payments/checkout`, {
                cardholderName: cardholderName.value,
                cart: userCart,
                user: JSON.parse(sessionStorage.getItem('user'))
            }).then((response) => {
                if(response.status === 201){
                    dispatch(setToastDetails({visible:true, status:"Success", message: "Payment Succeeded"}))
                    dispatch(emptyCart())
                } else {
                    dispatch(setToastDetails({visible:true, status:"Failed", message: "Payment Failed"}))
                }
            })
        } catch(error) {
            dispatch(setToastDetails({visible:true, status:"Failed", message: "Payment Failed"}))
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h2>Payment Details</h2>

            <label>
                <span>Cardholder Name</span>
                <input
                    type="text"
                    name="cardholderName"
                    placeholder="John Doe"
                    required
                />
            </label>

            <label>
                <span>Card Number</span>
                <input
                    type="text"
                    name="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    maxLength="16"
                    required
                />
            </label>

            <div style={{display:'flex', gap:'1rem'}}>
                <label>
                    <span>Expiration Month</span>
                    <select name="expMonth" required>
                        <option value="">MM</option>
                        {Array.from({length: 12}, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {String(i + 1).padStart(2, "0")}
                            </option>
                        ))}
                    </select>
                </label>

                <label>
                    <span>Expiration Year</span>
                    <select name="expYear" required>
                        <option value="">YYYY</option>
                        {Array.from({length: 10}, (_, i) => (
                            <option key={i} value={new Date().getFullYear() + i}>
                                {new Date().getFullYear() + i}
                            </option>
                        ))}
                    </select>
                </label>
            </div>

            <label>
                <span>CVV</span>
                <input
                    type="text"
                    name="cvv"
                    placeholder="123"
                    maxLength="4"
                    required
                />
            </label>
            <div style={{display:'flex', gap:'1rem', justifyContent:'space-between', paddingTop:'2rem'}}>
                <button
                    type="text"
                    onClick={() => setCheckoutActive(false)}
                    className="back-btn"
                >
                    Back
                </button>
                <button
                    type="submit"
                    className="submit-btn"
                >
                    Pay Now
                </button>
            </div>
        </form>
    );
};

export default Checkout
