import React from "react";
import logo from "./logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "./store/AuthStore";
import CartButton from "./CartButton";
import { NavLink } from "react-router-dom";


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
          <NavLink to={'/'} className={({isActive})=>isActive ? 'isActive' : ''} end>Home</NavLink>
          </li>
          <li>
          <NavLink to={'Aboutus'} className={({isActive})=>isActive ? 'isActive' : ''}>About Us</NavLink>
          </li>
          <li>
          <NavLink to={'Events'} className={({isActive})=>isActive ? 'isActive' : ''}>Events</NavLink>
          </li>
          <li>
          <NavLink to={'Service'} className={({isActive})=>isActive ? 'isActive' : ''}>Service</NavLink>
          </li>
          <li>
            <CartButton />

          </li>
          {loginState ?
            <li>
               <NavLink to={'/'} onClick={logoutHandler} className={({isActive})=>isActive ? 'isActive' : ''}>Logout</NavLink>
            </li>
            : ''
          }
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
