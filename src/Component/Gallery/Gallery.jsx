import React from 'react'
import { Link, Outlet } from 'react-router-dom'




export default function Gallery() {
  return (
    <>
    <div className="container ">
      <div className="row w-50">
        <div className="navbar-nav  col-md-6">
          <Link to="mobile"  className='d-block'>mobile</Link> 
          
          <Link to="">web</Link>
        </div>

        <div className='col-md-6'>
          <Outlet></Outlet>
        </div>

      </div>

     

    </div>
    
    
    </>
  )
}
