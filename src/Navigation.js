import React from "react";
import logo from "./logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "./store/AuthStore";
import CartButton from "./CartButton";


const Navigation = () => {
  const loginState = useSelector((state) => state.auth.loginState);
const dispatch = useDispatch();

  const logoutHandler = () =>{
    dispatch(AuthAction.LogoutState())
  }
  return (
    <div>
  
      <div className="nav">
        <span style={{textAlign:'center', display:'table', fontSize:'2rem', color:'#fff'}}>
        <img src={logo} alt="logo" width="40px" style={{display:'block', margin:'auto'}} /> Redux App
        </span>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Aboutus">About Us</a>
          </li>
          <li>
            <a href="/Products">Product Us</a>
          </li>
          <li>
            <a href="/Service">Service</a>
          </li>
          <li>
            <CartButton />

          </li>
          {loginState ?
            <li>
              <a href="/" onClick={logoutHandler}>Logout</a>
            </li>
            : ''
          }
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
