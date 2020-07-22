import React, { useState, useEffect } from 'react';

// Function
// export default () => {} can work too
const Weather = () => {
  const [address, setAddress] = useState('');
  const [weather, setWeather] = useState();


  // Reload component on weather data change
  useEffect(() => {
  
  }, [weather]);

  // Handle text input onChange event
  const handleChange = (event) => {
    setAddress(event.target.value);
  };

  // Handle submit button onClick event
  const getWeather = (event) => {
    if(address.replace(/\s+/g, '') === '') {
      alert('Please Enter a Valid Address');
    }

    console.log(address);

    // Remove any excess spaces for url
    fetch(`http://wttr.in/${address.replace(/\s+/g, '')}?format=j1`)
      .then(res => res.json())
      .then(data => setWeather(data));

  };

  
  return (
    <div>
      <h1>Get Your Weather Today</h1>
      <br/>
      <input id="address" type="text" name="address" onChange={handleChange} />
      <button onClick={getWeather}>Get Weather!</button>

      <br/>
      <div>
        <p><b>Location:</b> {address}</p>
        <p><b>Max Temp:</b> &nbsp;
        {
          weather
            ? weather.weather[0].maxtempF
            : ''
        }
        &#176;
      </p>
        <p><b>Min Temp:</b> &nbsp;
        {
          weather
            ? weather.weather[0].mintempF
            : ''
        }
        &#176;
      </p>
      </div>
    </div>
  );
};

export default Weather;
