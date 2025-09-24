
import axios from 'axios';
import Joi, { isSchema } from 'joi';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'




export default function Register() {
let Navigate= useNavigate();

  const [user, setUser] = useState({
    email: '',
    fullName: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [Errror, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorValidate, setErrorValidate] = useState([]);
  const [passNotMatch, setPassNotMatch] = useState(true);



  function getUserData(enfo) {

    let mydata = {...user};

    mydata[enfo.target.name] = enfo.target.value;
    
    setUser(mydata); 
    console.log(user);

  }





  async function sendRegisterDataToAPI() {  

    let {data} = await axios.post(`https://www.quickpickdeal.com/api/auth/registration` , user);
    console.log(data);

   if(data.Success==true){
    setIsLoading(false);
    setError('');

    Navigate('/');
   }
   else{
    setError(data.Error);
    setIsLoading(false);
   }

  }

  

  function submitRegisterForm(e) {
    e.preventDefault();
    setIsLoading(true);
    let myValidation = validateRefisterForm();

    if(user.password == user.confirmPassword){
      setPassNotMatch(true);

        if(myValidation.error){
        
          setIsLoading(false);
          setErrorValidate(myValidation.error.details);
          console.log(myValidation.error.details);
        
          
        } else{
          sendRegisterDataToAPI();
          setErrorValidate([]);

        }
     
    }else{
      setIsLoading(false);
      console.log('not path');
      setPassNotMatch(false);

    }
    
  }
   

  // localStorage.clear();



  function validateRefisterForm(){

    let scheme = Joi.object({

      fullName: Joi.string().min(2).required(),
      phoneNumber: Joi.number().min(0).required(),
      email: Joi.string().email().required(),
      password: Joi.string().pattern(/^[1-9]{5,9}/).required(),
      confirmPassword: Joi.string().pattern(/^[1-9]{5,9}/).required(), 
    });

    console.log( scheme.validate(user,{abortEarly:false}) );

    return scheme.validate(user , {abortEarly:false});

    
    // setOutputValidate(myValidation);
    
  }




  return ( <>
    {/* {console.log( outpoutValidate )} */}
    <div className="container">

        {Errror.length > 0 ? <div className="alert alert-danger my-3">{ Errror } </div>:''}
        {passNotMatch == false ?<div className="alert alert-danger my-3">password do not match ❌</div>:''}
        
        {errorValidate.map((err, index)=>{if(err.context.label === 'password' || err.context.label === 'confirmPassword' ){
          return <div key= {index} className="alert alert-danger my-3">invalid! ..it must be 5 number or more </div>
        }
        else{
          return <div key= {index} className="alert alert-danger my-3">{ err.message } </div>
        }})}
       

        <form className="register"  onSubmit={submitRegisterForm} >

            <label htmlFor="fullName">fullName</label>
            <input onChange={getUserData  } className='input form-control  my-2 mb-4' type="text"  name='fullName'  id='fullName'/>
            
            <label htmlFor="phoneNumber">phoneNumber</label>
            <input onChange={getUserData } className='input form-control  my-2 mb-4' type="number"  name='phoneNumber'  id='phoneNumber'/>
            
            <label htmlFor="email">email</label>
            <input onChange={getUserData } className='input form-control  my-2 mb-4' type="email"  name='email'  id='email'/>

            <label htmlFor="Password">Password</label>
            <input onChange={getUserData } className='input form-control  my-2 mb-4' type="Password"  name='password'  id='Password'/>
            
            <label htmlFor="confirmPassword">confirmPassword</label>
            <input onChange={getUserData } className='input form-control  my-2 mb-4' type="password"  name='confirmPassword'  id='confirmPassword'/>
            
          
            <button className='btn btn-info'>{isLoading==true  ? <i className='fa fa-spinner fa-spin'></i> : 'Register'}</button>

        </form>
    </div>

    
    </>
  )
}
