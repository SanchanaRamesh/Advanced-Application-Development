import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Home from './Components/Pages/Home';
import {Routes,Route, BrowserRouter as Router} from "react-router-dom";
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import AdminPage from './Components/Pages/AdminPage';
import Crud from './Components/Pages/Crud';
import Theme from './Components/Pages/Theme';
import UserDashboard from './Components/Pages/Userdash';
import EventForm from './Components/Pages/EventForm';
import Userdash from './Components/Pages/Userdash';
import User from './Components/Pages/User';
import React from 'react';
import LoadingIndicator from './LoadingIndicator';
import { Suspense } from 'react';
import Footer from './Components/Pages/Footer';
import Sidebar from './Components/Pages/Sidebar';
import Nav from './Components/Pages/Nav';
import Navbar from './Components/Pages/Navbar';
import Food from './Components/Pages/Food';
import FoodCrud from './Components/Pages/FoodCrud';

const Admin = React.lazy(() => import('./Components/Pages/AdminPage'));

function App() {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  

  return (
    <>
      
      <Router>
      <Suspense fallback={<LoadingIndicator/>}>
      <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/admin' element={<AdminPage/>}/>
      <Route path='/crud' element={<Crud/>}/>
      <Route path='/theme' element={<Theme/>}/>
      <Route path='/user' element={<User/>}/>
      <Route path='/side' element={<Sidebar/>}/>
      <Route path='/nav' element={<Navbar/>}/>
      <Route path='/food' element={<Food/>}/>
      <Route path='/foodcrud' element={<FoodCrud/>}/>
      <Route path='/eventform' element={<EventForm addEvent={addEvent}/>} />
      <Route path='/userdash' element={<Userdash events={events}/>} />
      </Routes>
      </Suspense>
      </Router>
      
    
      
    </>
  )
}

export default App
