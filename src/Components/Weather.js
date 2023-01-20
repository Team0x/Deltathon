import React,{useReducer,useEffect, useState} from 'react'
import '../Components/Css/card.css'
import axios from 'axios'
import Navbar from './Navbar'


function Weather() {
 
 const[lat,setLat]= useState([])
 const [long,setLong] = useState([])
 const [data,setData] = useState('')
 const [weather,setweather] = useState()
 const [icon,seticon] = useState()
 const [disc,SetDisc] = useState('')
 
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos)=>{
      setLat(pos.coords.latitude)
      setLong(pos.coords.longitude)
      
    })
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=28.3949&lon=84.1240&appid=84243432f2ee19b35b4ffa1df3e4914c`)
       .then(res=>{
        setData(res.data.main.temp.toFixed())
        setweather(res.data.weather[0].main)
        let iconcode = res.data.weather[0].icon
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        seticon(iconurl)
        SetDisc(res.data.weather[0].description)
       })
       .catch(err=>{
        setData(err)
       })
   
  }, []);

  return (
    <div className='weather'>
        <Navbar />
        <div className="card-container1">
            <h2>Current Weather</h2>
      <div className="card-top">
        <img src={icon} alt="card icon" className="card-icon" />
        <h3 className="card-name">Temperature:{(data-273)}&deg;C</h3>
        <h3 className="card-name">Weather:{weather}</h3>
        <h3 className="card-name"></h3>
      </div>
      <p className="card-description">{disc}</p>
    </div>
    
    </div>
  );
}

export default Weather
