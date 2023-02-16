import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <div className="container mt-5">
      <h1 className="mb-4">Favorite authors</h1>
        <Outlet />
      </div>
    </>
  )
}

export default Layout