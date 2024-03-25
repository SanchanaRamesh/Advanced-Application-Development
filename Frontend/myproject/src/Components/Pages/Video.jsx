import React from 'react'
import vid from './Vid.mp4'
import './Video.css'
const Video = () => {
  return (
    <>
    <section className="video-section">
        <video autoPlay loop muted id='video'>
          <source src={vid} type="video/mp4" />
        </video>
        <div className="text-overlay">
          <h1>Join Us for a Birthday Bash!</h1>
          <h2>Celebrate a special day filled with joy, laughter, and memories.</h2>
          
        </div>
      </section>
    </>
  )
}

export default Video
