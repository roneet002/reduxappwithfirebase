import React from 'react'
import { useDispatch } from 'react-redux'
import { AuthAction } from './store/AuthStore'

const LoginForm = () => {
    const dispatch = useDispatch()

const sbtHandler = () =>{
    dispatch(AuthAction.LoginHandler())
}

    return (
    <div className='card'>
      <input type='text' placeholder='Enter Email' />
      <input type='text' placeholder='Enter Password' />
    <button onClick={sbtHandler}>Login</button>
    </div>
  )
}

export default LoginForm
