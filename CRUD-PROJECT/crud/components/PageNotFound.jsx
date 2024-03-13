import React from 'react'
import { Link } from 'react-router-dom' 

function PageNotFound() {
  return (
    <div className='pageNotFound'>
        <h1>PAGE NOT FOUND</h1>
        <img src="../src/assets/notFound.png" alt="" />
        <Link to="/">Back to Home Page</Link>
    </div>
  )
}

export default PageNotFound