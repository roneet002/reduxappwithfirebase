import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='card'>
        <div style={{margin:'auto', display:'table'}}>

      <h1>something Went Wrong</h1>
      <p style={{textAlign:'left'}}>You are on wrong Page</p>
      <Link to={'/'} className='btn' style={{fontSize:'1.2rem'}}>Go to Home Page</Link>
        </div>
    </div>
  )
}

export default ErrorPage
