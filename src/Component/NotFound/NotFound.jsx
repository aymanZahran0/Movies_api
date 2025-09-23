import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

export default function NotFound() {
  return (
  <>
    {/* <Navbar/> */}

    <div className='d-flex vh-100 w-100 justify-content-center'>
        <div className='text-center align-content-center'>
            <h1 className='text-danger'>Sorry, Page Not Found </h1>
            <p className='text-muted' >We Could not find what you were Looking for</p>
        </div>
    </div>

    {/* <Footer/> */}

    </>
  )
}
