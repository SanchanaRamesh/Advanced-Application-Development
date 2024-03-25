import React, { useState , useEffect} from 'react';
import './Calc.css';
import birthday1 from './birthday1.jpg';
import birthday from './birthday.jpg';
import birthday2 from './birthday2.jpg';
import './SlidingSection.css'; 

const Calc = () => {
  const [eventType, setEventType] = useState('');
  const [themeType, setThemeType] = useState('');
  const [date, setDate] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [foodType, setFoodType] = useState('');
  const [additionalServices, setAdditionalServices] = useState({
    cocktailBar: false,
    musicProgram: false,
    photographer: false,
    transportServices: false,
    staffForEvent: false,
    decor: false,
  });

  const eventOptions = ['Birthday Party', 'Family Function', 'Corporate Meeting'];
const themeOptions = {
    ThemeBlue:250,
    ThemeGreen:250,
    OutStation:600,
    Kids:500,
    Circus:700,
};
  const foodOptions = {
    Veg: 300,
    'Non-Veg': 600,
  };

  const serviceOptions = {
    cocktailBar: 100,
    musicProgram: 200,
    photographer: 300,
    transportServices: 150,
    
  };

  const handleAdditionalServiceChange = (serviceName) => {
    setAdditionalServices({
      ...additionalServices,
      [serviceName]: !additionalServices[serviceName],
    });
  };

  const calculateTotal = () => {
    let total = 0;
    
    // Calculate based on the number of people
    total += numberOfPeople * 10; // Placeholder cost per person

    // Add food cost
    total += foodOptions[foodType] || 0;
    total += themeOptions[foodType] || 0;

    // Add additional services cost
    Object.keys(additionalServices).forEach((service) => {
      if (additionalServices[service]) {
        total += serviceOptions[service];
      }
    });

    return total;
  };
    
  
    

  return (
    <div className="container-calc">
      <div className="calculator">
        <h2>Budget Calculator</h2>
        <label>
          Event Type:
          <select value={eventType} onChange={(e) => setEventType(e.target.value)}>
            <option value="">Select</option>
            {eventOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <br/>
        <label>
          Theme Type:
          <select value={themeType} onChange={(e) => setThemeType(e.target.value)}>
            <option value="">Select</option>
            {eventOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
          </select>
        </label>
        
        <br />
        <label>
          Number of People:
          <input
            type="number"
            value={numberOfPeople}
            onChange={(e) => setNumberOfPeople(e.target.value)}
          />
        </label>
        <br />
        <label>
          Food Type:
          <select value={foodType} onChange={(e) => setFoodType(e.target.value)}>
            <option value="">Select</option>
            {Object.keys(foodOptions).map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <br />
                
        <br />
        <div className='total'>
          <h3>Total Cost: ${calculateTotal()}</h3>
        </div>
      </div>
      
    </div>
  );
};

export default Calc;