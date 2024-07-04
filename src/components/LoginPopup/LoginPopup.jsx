import React, { useState } from 'react'
import './LoginPopup.css'
import CrossIcon from "../../assets/cross.png";

const LoginPopup = ({setShowLogin}) => {

    const [cuurrState,setCuurrState]= useState("Sign up")
  return (
    <div className='login-popup'>
        <form  className="login-popup-container">
            <div className="login-popup-title">
                <h2>{cuurrState}</h2>
                <img onClick={()=>setShowLogin(false)} src={CrossIcon} alt=""  />
            </div>
            <div className="login-popup-inputs">
                {cuurrState==="Login"?<></>:<input type="text" placeholder='Your name' required />}
                <input type="email" placeholder='Your email' required />
                <input type="password" placeholder='Your password' required />
            </div>
            <button>{cuurrState==="Sign up"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>I agree to term of use and privacy policy.</p>
            </div>
            {cuurrState==="Login"
            ?<p>Create new account? <span onClick={()=>setCuurrState("Sign up")}>Click here</span></p>
            :<p>Already have an account? <span onClick={()=>setCuurrState("Login")}>Login here</span></p> }     
        </form>
    </div>
  )
}

export default LoginPopup