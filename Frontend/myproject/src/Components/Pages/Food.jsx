import React from 'react'
import './Food.css'
import Nav from './Nav'
import { Link } from 'react-router-dom'
const Food = () => {
  return (
    <div>
    <Nav/>
    <br/>
    <br/>
    <br/>
    <section className="event-details1">
    <br/>
    <br/>
    <h2 className='head'>Veg Food</h2>
    </section>
    <main className='theme'>
    <section className="event-images">
      <img src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Birthday Event 1" />
      <img src="https://images.pexels.com/photos/941869/pexels-photo-941869.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Birthday Event 2" />
      <img src="https://images.pexels.com/photos/4611424/pexels-photo-4611424.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Birthday Event 3" />
    </section>
    </main>
    <main className='theme'>
    <section className="event-images">
      <img src="https://images.pexels.com/photos/12843145/pexels-photo-12843145.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Birthday Event 1" />
      <img src="https://images.pexels.com/photos/5827618/pexels-photo-5827618.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Birthday Event 1" />
      <img src="https://images.pexels.com/photos/6183640/pexels-photo-6183640.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Birthday Event 3" />
      </section>
      <button ><Link to ='/foodcrud'>Select</Link></button>
      </main>
      <section className="event-details1">
      <br/>
      <br/>
      <h2 className='head'>Non-Veg</h2>
      </section>
      <main className='theme'>
      <section className="event-images">
      <img src="https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Birthday Event 3" />
      <img src="https://images.pexels.com/photos/9738985/pexels-photo-9738985.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Birthday Event 2" />
      <img src="https://images.pexels.com/photos/9809033/pexels-photo-9809033.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Birthday Event 2" />
    </section>
    
  </main>
    <main className='theme'>
    <section className="event-images">
      <img src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=6000" alt="Birthday Event 1" />
      <img src="https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Birthday Event 2" />
      <img src="https://images.pexels.com/photos/6605299/pexels-photo-6605299.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Birthday Event 3" />
    </section>
    <button ><Link to ='/foodcrud'>Select</Link></button>
  </main>
    </div>
  )
}

export default Food
