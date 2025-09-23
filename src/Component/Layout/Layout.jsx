import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


export default function Layout({myUserData,userToken,setUserToken}) {
  let navigate = useNavigate();

  function LogOut() {

    localStorage.removeItem('myToken');
    localStorage.removeItem('myUserData');
    setUserToken(null); 
    setUserToken(null); 
    
    navigate('');

  }
  
  
  return (
    <>
    <Navbar userToken={userToken}  LogOut={LogOut}/>
    <Outlet></Outlet>
    
    <Footer/>
    </>
  )
}
