import React, {useState} from 'react';
import { BrowserRouter  } from 'react-router-dom';
import { Routes } from './routes/routes';
import './App.css';
import SignIn from './pages/login';
import Home from './pages/home';




export default function App() {
  
  const [user, setUser] = useState(null);

  const actionLoginDataGoogle = async (u) => 
  { 
      let newUser = 
      {
        id: u.uid,
        name: u.displayName,
        avatar: u.photoURL,
        email: u.email
      }

      setUser(newUser);
  }
       
    if(user === null)
    {
      return (
        <SignIn onReceiveGoogle={actionLoginDataGoogle}/>
      )
    }


    return (

      <BrowserRouter>

        <Home/>
        <Routes/>

      </BrowserRouter>  
  );
}

