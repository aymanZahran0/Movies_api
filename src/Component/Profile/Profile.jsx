import React, { useEffect } from 'react'

export default function Profile(props) {

console.log(props);
   
    // let {FullName, Email, Id, PhoneNumber, ExpiresAt} = props.myUserData

    // let userData =  props.myUserData
    // let {FullName, Email, Id, PhoneNumber, ExpiresAt} = userData 

   return (
    <>
   { props.myUserData ? 
   <div className='container pt-1 '>
      <div className=' mt-5'>
        <h4>Full Name : <span className='text-dark-emphasis'> {props.myUserData.FullName}</span></h4>
        <h4>Email : <span className='text-dark-emphasis'> {props.myUserData.Email}</span></h4>
        <h4>Id : <span className='text-dark-emphasis'> {props.myUserData.Id}</span></h4>
        <h4>Phone Number : <span className='text-dark-emphasis'> {props.myUserData.PhoneNumber}</span></h4>
        <h4>ExpiresAt : <span className='text-dark-emphasis'> {props.myUserData.ExpiresAt}</span></h4>
      </div>
   </div>
    : ''}
    
    
    </>
  )
}



