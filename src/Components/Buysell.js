import React from 'react'
import Navbar from './Navbar'
import './Css/style.css'
import banana_img from '../images/fruits/banana.jpg'
import ginger_img from '../images/fruits/ginger.jpg'
import millet_img from '../images/fruits/millet.jpeg'
import orange_img from '../images/fruits/oranges.jpg'
import pineapple_img from '../images/fruits/pineapple.jpg'
import potato_img from '../images/fruits/potato.jpg'
import rice_img from '../images/fruits/rice.jpeg'
import tomatoo_img from '../images/fruits/tomatoo.jpeg'
import watermelon_img from '../images/fruits/watermelon.jpeg'

import sell_img from '../images/images/sell.jpg'

export default function Buysell() {
  return (
    <>
    <Navbar />
    <div>
      <div className="container-fluid">
      <div className="section1">
        <div className="bg-image"></div>
        <div className="searchbar">
          <div className="seachbarfirst">
            <h2>BUY AND SELL YOUR AGRICULTURAL PRODUCE ONLINE</h2>
          </div>
     <div className="col-xs-4">
            <form action="backend ma ja">
              <label for="ex3"></label>
              <input className="form-control" id="ex3" type="text" />
            </form>
          </div>
          <form action="backend ma ja">
            <div className="mb-3">
              <label for="productkhoj" className="form-label">
                  <h3>Enter the name of product</h3></label
              >
              <input type="text" className="form-control" id="productkhoj" />
            </div>
          </form>

          <div className="locform">
            <h3>Select the district where you want to buy from?</h3>
            <select className="form-select" aria-label="Default select example">
              <option selected>All over Nepal</option>
              <option value="1">Kathmandu</option>
              <option value="2">Pokhara</option>
              <option value="3">Dharan</option>
              <option value="4">Sindhuli</option>
              <option value="5">Rampur</option>
              <option value="6">Chitwan</option>
              <option value="7">Others</option>
            </select>
          </div>
          <div className="submitbtn">
            <a href="#exploreitem"  >
                <button type="button" className="btn btn-lg btn-warning">
                Search
              </button></a>
          </div>
        </div>
      </div>

      <div className="section3">
       
        <div className="sell">
       
          <div className="selltop">
            <h3>If you want to sell your product ,click on the button below</h3>
            <img
              src={sell_img}
              className="img-fluid"
              width="200"
              alt="Error"
            />
          </div>
          <div className="sellbtm">
            <h2>sell</h2>
            <p>kdlfksldkfldkfodlkjlkfdjlkjfldfjlkdjfldkfjodfoilsdnfskdhfoiho</p>
            <a target="_blank" href="./sellsite.html"
              ><button className="btn bg-success text-white">Click Here</button></a
            >
          </div>
        </div>
      </div>
 
      <div className="section4" id="exploreitem">
        
        <div className="sec4content">
          <h2><strong>Our Recent Product</strong></h2>
          <br />
          <p>
            We change our menus every week to source what is freshest and in
            season, which means you receive the most delicious fruits and
            vegetables available with our produce delivery service.
          </p>
        </div>
        <div className="row justify-content-evenly">
          <div className="col-lg-3 box">
            <div className="item">
              <div className="itemtop">
            
                <h4 className="foodname"><span>Banana</span></h4>
                <img
                  src={banana_img}
                  alt=""
                  width="200"
                  className="img-fluid"
                />
              </div>
              <div className="itemmid mt-2">
                <p>
                
                  Location:Sindhuli <br />
                  Price:Rs.60/dozen <br />
                  <a href="#">Other Description</a>
                </p>
              </div>
              <div className="itembottom">
             

                <button className="btn btn-success">Buy Now</button>
              </div>
            </div>
          </div>
        
          <div className="col-lg-3 box">
            <div className="item">
              <div className="itemtop">
              
                <h4 className="foodname"><span>Ginger</span></h4>
                <img
                  src={ginger_img}
                  alt=""
                  width="150"
                  className="img-fluid itemphoto"
                />
              </div>
              <div className="itemmid mt-2">
                <p>
                
                  Location:Sindhuli <br />
                  Price:Rs.400/kg <br />
                  <a href="#">Other Description</a>
                </p>
              </div>
              <div className="itembottom">
            

                <button className="btn btn-success">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 box">
            <div className="item">
              <div className="itemtop">
              
                <h4 className="foodname"><span>Millet</span></h4>
                <img
                  src={millet_img}
                  alt=""
                  width="100  "
                  className="img-fluid"
                />
              </div>
              <div className="itemmid mt-2">
                <p>
                 
                  Location:Sindhuli <br />
                  Price:Rs.1200/kg <br />
                  <a href="#">Other Description</a>
                </p>
              </div>
              <div className="itembottom">
               
                <button className="btn btn-success">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      
        <div className="row justify-content-evenly mt-5">
          <div className="col-lg-3 box">
            <div className="item">
              <div className="itemtop">
            
                <h4 className="foodname"><span>Oranges</span></h4>
                <img
                  src={orange_img}
                  alt=""
                  width="200"
                  className="img-fluid"
                />
              </div>
              <div className="itemmid mt-2">
                <p>
            
                  Location:Sindhuli <br />
                  Price:Rs.100/kg <br />
                  <a href="#">Other Description</a>
                </p>
              </div>
              <div className="itembottom">
             
                <button className="btn btn-success">Buy Now</button>
              </div>
            </div>
          </div>
          
          <div className="col-lg-3 box">
            <div className="item">
              <div className="itemtop">
            
                <h4 className="foodname"><span>Pineapple</span></h4>
                <img
                  src={pineapple_img}
                  alt=""
                  width="200"
                  className="img-fluid"
                />
              </div>
              <div className="itemmid mt-2">
                <p>
               
                  Location:Sindhuli <br />
                  Price:Rs.600/kg <br />
                  <a href="#">Other Description</a>
                </p>
              </div>
              <div className="itembottom">

                <button className="btn btn-success">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 box">
            <div className="item">
              <div className="itemtop">
                <h4 className="foodname"><span>Potato</span></h4>
                <img
                  src={potato_img}
                  alt=""
                  width="200"
                  className="img-fluid"
                />
              </div>
              <div className="itemmid mt-2">
                <p>
                  Location:Sindhuli <br />
                  Price:Rs.30/kg <br />
                  <a href="#">Other Description</a>
                </p>
              </div>
              <div className="itembottom">
                <button className="btn btn-success">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
  
        <div className="row justify-content-evenly mt-5">
          <div className="col-lg-3 box">
            <div className="item">
              <div className="itemtop">
            
                <h4 className="foodname"><span>Rice</span></h4>
                <img
                  src={rice_img}
                  alt=""
                  width="150"
                  className="img-fluid"
                />
              </div>
              <div className="itemmid mt-2">
                <p>
              
                  Location:Sindhuli <br />
                  Price:Rs.700/kg<br />
                  <a href="#">Other Description</a>
                </p>
              </div>
              <div className="itembottom">
           
                <button className="btn btn-success">Buy Now</button>
              </div>
            </div>
          </div>
             <div className="col-lg-3 box">
            <div className="item">
              <div className="itemtop">
           
                <h4 className="foodname"><span>Tomato</span></h4>
                <img
                  src={tomatoo_img}
                  alt=""
                  width="200"
                  className="img-fluid"
                />
              </div>
              <div className="itemmid mt-2">
                <p>
                  Location:Sindhuli <br />
                  Price:Rs.60/kg <br />
                  <a href="#">Other Description</a>
                </p>
              </div>
              <div className="itembottom">
         

                <button className="btn btn-success">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 box">
            <div className="item">
              <div className="itemtop">
            
                <h4 className="foodname"><span>Watermelon </span></h4>
                <img
                  src={watermelon_img}
                  alt=""
                  width="200"
                  className=""
                />
              </div>
              <div className="itemmid mt-2">
                <p>
                
                  Location:Sindhuli <br />
                  Price:Rs.400/kg <br />
                  <a href="#">Other Description</a>
                </p>
              </div>
              <div className="itembottom">
             

                <button className="btn btn-success">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="morewalabtn mt-5 d-flex justify-content-center">
          <button className="btn btn-lg btn-success btn-more">
            Explore More Items
          </button>
        </div>
     </div>
     </div>
     </div>
     
     </>
   
    
  )
}
