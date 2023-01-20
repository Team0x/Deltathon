import React from 'react'
import logo from '../images/logo.png'
export default function CHeck() {
  return (
    <div>
      <div className="footer-distributed">

<div className="footer-left">
    <h3>Agriculture<span> And technology</span></h3>

    <p className="footer-links">
        <a href="#">Home</a>
        |
        <a href="#">Buy and Sel l</a>
        |
        <a href="#">Contact</a>
        |
        <a href="#">Weather forecast</a>
    </p>

    <p className="footer-company-name">Copyright © 2023 <strong>Technology</strong> Art and skills </p>
</div>

<div className="footer-center">
    <div>
        <i className="fa fa-map-marker"></i>
        <p><span> IOE Purwanchal campus</span>
            Dharan-8-Sunsari</p>
    </div>

    <div>
        <i className="fa fa-phone"></i>
        <p> 9847581627</p><br></br>
        <i className="fa fa-phone"></i>
        <p> 9840114485</p><br></br>
       
    </div>
    <div>
        <i className="fa fa-envelope"></i>
        <p><a href="#">roshankc813@gmail.com</a></p>
    </div>
</div>
<div className="footer-right">
    <p className="footer-company-about">
        <span className='navbar-brand'><img src={logo}/> </span>
        
    </p>
    <div className="footer-icons">
    <div className='content2  mt-3'>
      <i className="fa-brands fa-tiktok fa-2x mx-3 "></i>
      <i className="fa-brands fa-facebook-f fa-2x mx-3"></i>
      <i className="fa-brands fa-instagram fa-2x mx-3"></i>
      <i className="fa-brands fa-twitter fa-2x mx-3"></i>
      <i className="fa-brands fa-youtube fa-2x mx-3 text-danger"></i>
      </div>
    </div>
</div>
</div>


    </div>
  )
}
