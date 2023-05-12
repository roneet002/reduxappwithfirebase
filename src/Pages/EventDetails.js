import React from 'react'
import { Link, useParams } from 'react-router-dom'

const EventDetails = () => {
  const params = useParams()
  
  return (
    <div style={{textAlign:'center'}}>
      EventDetails {params.eventsId}<br/>
      <Link className='btn' to={'/Events'}>Back to Previous Page</Link>
    </div>
  )
}

export default EventDetails
