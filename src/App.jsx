import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './Component/Layout/Layout';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Contacts from './Component/Contacts/Contacts';
import NotFound from './Component/NotFound/NotFound';
import Gallery from './Component/Gallery/Gallery';
import Mobile from './Component/Mobile/Mobile';
import Web from './Component/Web/Web';
import Register from './Component/Register/Register';
import Login from './Component/Login/Login';
import { Offline, Online } from 'react-detect-offline';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import ItemDetails from './Component/ItemDetails/ItemDetails';
import Profile from './Component/Profile/Profile';
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute';





function App() {

useEffect(()=>{
  if(localStorage.getItem('myToken')!==null){

    saveUserToken();
  }

},[]);


  const [userToken, setUserToken] = useState(null);
  const [myUserData, setUserData] = useState(null);


  function saveUserToken(){
    let encodedToken= localStorage.getItem('myToken');
    // let decodedToken =  jwtDecode(encodedToken);
    setUserToken(encodedToken);

    let myUserData= JSON.parse( localStorage.getItem('myUserData'));
    setUserData(myUserData);
    console.log(myUserData);
  }
<ProtectedRoute>   </ProtectedRoute>

  let routers= createBrowserRouter([
    {path :'/' ,element : <Layout  setUserToken={setUserToken}   userToken={userToken}/> , children :[          //  , errorElement: <NotFound/>
    {path : 'home' , element: <ProtectedRoute userToken={userToken}> <Home/> </ProtectedRoute>},
    {path : 'about' , element:<ProtectedRoute  userToken={userToken}> <About/> </ProtectedRoute> },
    {path : 'contacts' , element:<ProtectedRoute  userToken={userToken}> <Contacts/> </ProtectedRoute> },
    {path : 'itemdetails/:id/:mediaType' , element: <ItemDetails/>},
    {path : 'register' , element: <Register/>},
    {path : 'profile' , element: <ProtectedRoute  userToken={userToken}> <Profile myUserData= {myUserData}/> </ProtectedRoute>},
    {index : true , element: <Login saveUserToken={saveUserToken} />},
    {path : 'gallery' , element: <ProtectedRoute  userToken={userToken}> <Gallery/> </ProtectedRoute>  , children :[
      {path: 'mobile' , element: <Mobile/>},
      {path:'' , element: <Web/>},
    ]},
    {path : '*' , element: <NotFound/>},
    ] },
  ]);
  


  return (
    <>
    <div className='position-fixed top-50 end-0 mx-1 z-3'>
      <Offline> <div className='text-bg-danger rounded p-2'>Sorry !, You're Offline.</div> </Offline>
    </div>

    <RouterProvider router ={routers}/>
    
    </>
  );
}

export default App;
