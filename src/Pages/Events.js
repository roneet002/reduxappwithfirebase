import React from 'react'
import { Link } from 'react-router-dom'

  const DUMMY_EVENTS = [
{id:1,title:'First Event'},
{id:2,title:'Second Event'}

  ]

const Events = () => {
  return (
    <div style={{textAlign:'center'}}>
{DUMMY_EVENTS.map(item=><Link className='btn' to={`/Events/${item.id}`} key={item.id}>{item.title}</Link>)}
    </div>
  )
}

export default Events
