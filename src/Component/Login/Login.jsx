import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Link} from "react-router-dom"
 




export default function Login({saveUserToken}) {
  let Navigate= useNavigate();

    const [user, setUser] = useState({
      email: '',
      password: '',
    });
  
   
    const [Errror, setError] = useState(null);
    const [errorValidate, setErrorValidate] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
  
    function getUserData(enfo) {
  
      let mydata = {...user};
  
      mydata[enfo.target.name] = enfo.target.value;
      
      setUser(mydata); 
      console.log(user);
    }
  
    async function sendLoginDataToAPI() {  
  
      let {data} = await axios.post(`https://www.quickpickdeal.com/api/auth/login` , user);
      console.log(data);
      // console.log(data);
  
  
     if(data.Success==true){
      setIsLoading(false);
      localStorage.setItem('myToken', data.Data.AccessToken );
      localStorage.setItem('myUserData', JSON.stringify(data.Data));   //D
      saveUserToken();
      Navigate('/home');
      setError(null);

      
     }
     else{
      setError(data.Error);
      setIsLoading(false);
     }
  
    }
  
  
    function validateRefisterForm(){

      let scheme = Joi.object({
  
        email: Joi.string().email().required(),
        password: Joi.string().pattern(/^[1-9]{5,9}/).required(),
      });
  
      console.log( scheme.validate(user,{abortEarly:false}) );
  
      return scheme.validate(user , {abortEarly:false});
  
      
      // setOutputValidate(myValidation);
      
    }
  



    
  function submitLoginForm(e) {
    e.preventDefault();
    setIsLoading(true);
    let myValidation = validateRefisterForm();

        if(myValidation.error){
        
          setIsLoading(false);
          setErrorValidate(myValidation.error.details);
          console.log(myValidation.error.details);
        
          
        } else{
          sendLoginDataToAPI();
          setErrorValidate([]);

        }
     
    
    
    
  }

     
    // localStorage.clear();
  
  
  
  
    return (
      <>
      {console.log(errorValidate)}
      <div className="container">
  
          {Errror?.length > 0 ? <div className="alert alert-danger my-3">{Errror}</div>:''}
          {errorValidate.map((err, index)=>
          {if(err.context.label === 'password'){
          return <div key= {index} className="alert alert-danger my-3">invalid! ..it must be 5 number or more </div>
          }
          else{
            return <div key= {index} className="alert alert-danger my-3">{ err.message } </div>
          }})}
  

          <form className="register"  onSubmit={submitLoginForm} >
          
              <label htmlFor="email">email</label>
              <input onChange={getUserData} className='input form-control  my-2 mb-4' type="email"  name='email'  id='email'/>
  
              <label htmlFor="Password">Password</label>
              <input onChange={getUserData} className='input form-control  my-2 mb-4' type="Password"  name='password'  id='Password'/>
              
              <button className='btn btn-info'>{isLoading==true ? <i className='fa fa-spinner fa-spin'></i> : 'Login'}</button>
  
          </form>
      </div>
  
      
      </>
    )
  }

