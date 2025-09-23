import React from 'react'
import { Link , useNavigate } from 'react-router-dom'

export default function Navbar({userToken,LogOut}) {


// function LogOut() {
//   let navigate = useNavigate();
//   navigate('/login');
//   localStorage.removeItem('myToken');
// }

  return (<>

<div className="nav mb-5 pb-3">

<nav className="navbar navbar-expand-lg navbar-dark bg-dark position-fixed w-100 z-3">
    <div className="container-fluid">
      <Link className="navbar-brand" to="home">Movie4U</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="w-100 d-flex ">

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
       { userToken? <div className="navbar-nav">
          <Link className="nav-link" aria-current="page" to="home">Home</Link>
          <Link className="nav-link" to="about">About</Link>
          <Link className="nav-link" to="contacts">Contacts</Link>
          <Link className="nav-link" to="gallery">Gallery</Link>

        </div> :""}
      </div>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        {userToken ?  
         <div className="navbar-nav">
          <p onClick={LogOut}  className="nav-link cursor m-0">Logout</p>
          <Link className="nav-link" to="profile">Profile</Link>

          </div> 
          : 
          <div className="navbar-nav">
          <Link className="nav-link" to="register">Register</Link>
          <Link className="nav-link" to="register">Login</Link>
          </div>
             
        }

      

      </div>

      </div>
     

    </div>
  </nav>


</div>



    </>
   
  )
}
