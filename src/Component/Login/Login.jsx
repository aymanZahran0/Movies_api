import axios from 'axios';
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

      
     }
     else{
      setError(data.Error);
      setIsLoading(false);
     }
  
    }
  
  
    function submitLoginForm(e) {
      e.preventDefault();
      sendLoginDataToAPI();
  
      setIsLoading(true);
     
    }
     
    // localStorage.clear();
  
  
  
  
    return (
      <>
      <div className="container">
  
          {Errror?.length > 0 ? <div className="alert alert-danger my-3">{Errror}</div>:''}
  
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

  





// export default function Login() {

// let navigate = useNavigate();
// let registerArray = [];



//   const [user, setUser] = useState({
//     email: '',
//     password: '',
//   });



//   function getUserData(enfo) {

//     let mydata = {...user};
//     mydata[enfo.target.name] = enfo.target.value;
//     setUser(mydata); 
//     // console.log(user) ;
   
//   }
  

//   function getToken() {
//     localStorage.setItem('myToken' , 'token');
//   }


//   function sendRegisterDa(e ) {
//     e.preventDefault();
//     registerArray=( JSON.parse(localStorage.getItem('myUsers')));
//     console.log(registerArray) ;
  
//     for (var i = 0; i <= registerArray.length; i++) {  //to catch index
    
//       console.log(i);
    
//     if(registerArray[i]?.email == e.target.email.value && registerArray[i]?.password == e.target.password.value ){

     
//       console.log('true');
//       getToken();
//       navigate("home");

     

//     }
//     else{
//       console.log('fule')
//     }

//     }

//   }




//   return (
//     <>
//     <div className="container">

//         <form className="register"  onSubmit={sendRegisterDa} >
            
//             <label  htmlFor="email">email</label>
//             <input onChange={getUserData} className='input form-control  my-2 mb-4' type="email"  name='email'  id='email'/>

//             <label htmlFor="Password">Password</label>
//             <input onChange={getUserData} className='input form-control  my-2 mb-4' type="Password"  name='password'  id='Password'/>

//            <button className='btn btn-info'>Login</button> 
       
//         </form>
//     </div>

    
//     </>
//   )
// }
