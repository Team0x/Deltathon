import axios from 'axios'
import React, { useState } from 'react'
import './Css/Disease.css'
import Navbar from './Navbar'
import Footer from './Footer'
import DiseaseData from './Disease_Description.json'
const headersList = {
  "Accept": "*/*"
}





    const url = 'http://127.0.0.1:5000/api/classify/'
function Disease() {
  const[con,setCon] =useState('')
  const[cimg,setCimg] = useState()
  const [desc,setDesc]= useState('')
  const [treat, setTreat] = useState([])

  const SendData=(e)=>{
 
    
    const image = e.target.files[0]
    let formdata = new FormData()
    formdata.append("image", image)
   
    axios({
      method: 'post',
      url: url,
      data: formdata,
      headers: headersList
    })
    .then(res => {
      setCon(res.data)
      setCimg(URL.createObjectURL(image))
      setDesc(DiseaseData[res.data.prediction].desc)
      setTreat(DiseaseData[res.data.prediction].treatment)
     
    
    })
  }
  return (
    <>
    <Navbar />
      <div className="row">
  <div className="column">
    <div className="card">
    <h3>Select Image:-</h3>
      <form id='form'>
       <input type='file' id='image' onChange={SendData} accept='.jpg,.jpeg'/>
     </form>
     <h3>Your Crop condition:</h3>
     <h4>{con.prediction}</h4>
      <img src={cimg} alt='Crop Img' />
      <h3>Description of {con.prediction}:</h3>
      <p>{desc}</p>
      <h3>Treatment:</h3>
      {treat.map((val, index) => {
        return <li key={index}>{val}</li>
      })}
     
    </div>
  </div>
  </div>
  <Footer/>
  </>
  )
}

export default Disease
