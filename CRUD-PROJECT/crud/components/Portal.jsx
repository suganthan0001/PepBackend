import React from 'react'
import Topbar from './Topbar'
import { Outlet } from 'react-router-dom'

function Portal() {
  return (
    <>
        <div className='portal'>
            <Topbar />
            <Outlet />
        </div>
    </>
  )
}

export default Portal