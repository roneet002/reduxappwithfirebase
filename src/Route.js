import React from 'react'
import Navigation from './Navigation'
import { Outlet } from 'react-router-dom'

const RouteLayout = () => {
  return (
    <div>
      <Navigation />
      <main style={{ paddingTop: "100px" }}>
    <Outlet/>
      </main>
    </div>
  )
}

export default RouteLayout
