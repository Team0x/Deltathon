import React,{useReducer,useEffect, useState} from 'react'
import '../Components/Css/card.css'
import axios from 'axios'


function Weather() {
 const[lat,setLat]= useState([])
 const [long,setLong] = useState([])
 const [data,setData] = useState()
 const [weather,setweather] = useState()
 const [icon,seticon] = useState()

  useEffect(() => {
      axios.get("https://api.openweathermap.org/data/2.5/weather?lat=28.3949&lon=84.124&appid=84243432f2ee19b35b4ffa1df3e4914c")
       .then(res=>{
        setData(res.data.main.temp)
        setweather(res.data.weather[0].main)
        seticon(res.data.weather[0].icon)
        console.log(res.data.weather[0].icon)
       })
       .catch(err=>{
        setData(err)
       })
   
  }, []);

  return (
    <div>
    
        <div className="card-container">
            <h2>Current Weather</h2>
      <div className="card-top">
        <img src={icon} alt="card icon" className="card-icon" />
        <h3 className="card-name">Temperature:{(data-273)}&deg;C</h3>
        <h3 className="card-name">Weather:{weather}</h3>
        <h3 className="card-name"></h3>
      </div>
      <p className="card-description">Yadav</p>
    </div>
    
    </div>
  );
}

export default Weather
