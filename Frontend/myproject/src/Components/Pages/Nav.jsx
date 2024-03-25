import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <section className='nav'>
    <nav>
      <ul className='logo'>
      
        <li>Dream Day</li>
        
      </ul>
      <ul>
        <li><Link to='/userdash'>Profile</Link></li>
        
        <li><Link to='/food'>Food</Link></li>
        <li><Link to='/user'>Event</Link></li>
        <li><Link to='/login'>Images</Link></li>
      </ul>
    </nav>
    </section>  
    </>
  )
}

export default Navbar
