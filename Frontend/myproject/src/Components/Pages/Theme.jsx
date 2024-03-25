import React from 'react'
import './Theme.css'
import pic1 from './pic1.jpg'
import pic2 from './pic2.jpg'
import pic3 from './pic3.jpg'
import pic4 from './pic4.jpg'
import pic5 from './pic5.jpg'
import pic6 from './pic6.jpg'
import pic7 from './pic7.jpg'
import pic8 from './pic8.jpg'
import pic9 from './pic9.jpg'
const Theme = () => {
  return (

    <div>
    
    <section className="event-details1">
    <br/>
    <br/>
    <h2 className='head'>Theme of Decorations</h2>
    </section>
    <main className='theme'>
    
  <section className="event-images-event">
    <img src={pic4} alt="Birthday Event 1" />
   
    <img src={pic5} alt="Birthday Event 2" />
    <img src={pic6} alt="Birthday Event 3" />
  </section>
  <section className="event-images-event">
    <img src={pic3} alt="Birthday Event 1" />
    <img src={pic7} alt="Birthday Event 2" />
    <img src={pic2} alt="Birthday Event 3" />
  </section>
  <section className="event-images-event">
    <img src={pic1} alt="Birthday Event 1" />
    <img src={pic8} alt="Birthday Event 2" />
    <img src={pic9} alt="Birthday Event 3" />
  </section>
  
  </main>
 
    </div>
  )
}

export default Theme
