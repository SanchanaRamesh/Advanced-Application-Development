
import React, { useState } from 'react';
import EventDetails from './EventDetails';
import './User.css';
import Theme from './Theme';
import { Link } from 'react-router-dom';
// import Navbar from './Components/Pages/Navbar'
function Bookevent() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Function to handle image click
  const handleImageClick = (event) => {
    setSelectedEvent(event);
  };

  return selectedEvent ? (
    <EventDetails event={selectedEvent} />
  ) : (
   

    <div className="book-event">
      <h1 className="event-title">Book Your Events</h1>
      <Theme/>
      <button><Link to = '/userdash'>Back</Link></button>
    </div>
  );
}

export default Bookevent;