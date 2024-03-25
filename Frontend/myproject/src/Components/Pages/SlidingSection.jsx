import React, { useState, useEffect } from 'react';
import './SlidingSection.css'; 
import birthday1 from './birthday1.jpg'
import birthday2 from './birthday2.jpg'
import birthday from './birthday.jpg'



const SlidingSection = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "John Doe",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: birthday,
    },
    {
      id: 2,
      name: "Jane Smith",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: birthday2,
    },
    {
      id: 3,
      name: "Alice Johnson",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image:birthday1,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === testimonialsData.length - 1 ? 0 : prevSlide + 1));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [testimonialsData.length]);

  return (
    <>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <div key={testimonial.id} className={`testimonial ${index === currentSlide ? 'active' : ''}`}>
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <div className="testimonial-details">
              <p className="testimonial-description">{testimonial.description}</p>
              <p className="testimonial-name">{testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SlidingSection;