import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'



export default function ProtectedRoute(props) {

    let navigate = useNavigate();

      
    if(!localStorage.getItem('myToken')){
        return <Navigate to='/'/>
    }
    else{
        return props.children;
    }


  return (
    <>
   
    
    </>
  )
}
