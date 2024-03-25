import React from 'react'
import './Sidebar.css'
const Sidebar = () => {
  return (
    <div>
    <div id="viewport">
    {/* Sidebar */}
    <div id="sidebar">
      <header>
        <a href="#">DreamDay</a>
      </header>
      <ul className="nav-side">
        <li>
          <a href="#">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#">
            Actions
          </a>
        </li>
        <li>
          <a href="#">
            Overview
          </a>
        </li>
        <li>
          <a href="#">
             Events
          </a>
        </li>
        <li>
          <a href="#">
             About
          </a>
        </li>
        <li>
          <a href="#">
            Services
          </a>
        </li>
        <li>
          <a href="#">
            Logout
          </a>
        </li>
      </ul>
    </div>
    {/* Content */}
    
  </div>
  
    </div>
  )
}

export default Sidebar
