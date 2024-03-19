import React from 'react'
import './Navbar.css'
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
        <li><Link to='/register'>Sign Up</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
    </nav>
    </section>  
    </>
  )
}

export default Navbar
