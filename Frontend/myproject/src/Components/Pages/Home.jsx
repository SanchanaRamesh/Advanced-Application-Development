import React from 'react';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Video from './Video';
import About from './About';
import Footer from './Footer';
import Theme from './Theme';
// import SlidingSection from './SlidingSection';
import Describtion from './Describtion';
import Contact from './Contact';
import Calc from './Calc';
import SlidingSection from './SlidingSection';


function Home() {
  return (
    <>
    <Navbar/>
    <Video/>
    <About/>
    <LandingPage/>
    <Describtion/>
    <Calc/>
    
    <Theme/>
    <Contact/>
    <Footer/>

    </>
    )
  }
  
  export default Home
  
