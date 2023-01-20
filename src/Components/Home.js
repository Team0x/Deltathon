import React, { useEffect } from "react";
import Navbar from "./Navbar";

export default function Home() {
  useEffect(() => {
    let textwalaEl = document.querySelector(".textwala");

    let list = [" WELCOME TO KRISI-SEWA"];
    let listIndex = 0;
    let charIndex = 0;
    text();
    function text() {
      if (charIndex == list[listIndex].length + 1) {
        charIndex = 0;
        listIndex++;
      }
      if (listIndex == list.length) {
        listIndex = 0;
      }

      setTimeout((e) => {
        // e.preventdefault()

        textwalaEl.innerText = `${list[listIndex].slice(0, charIndex)}`;

        charIndex++;
        text();
      }, 200);
    }
  });
  return (
    <div>
      <Navbar />
      <div className="imagewala">
        <h1 className="textwala"></h1>
        <div className="content">
          <span className="content-home"> we Get Food because of Farmer </span>
        </div>
      </div>
      <div className="card text-center">
 
  <div className="card-body card-background">
    <h1 className="card-title image-home-header"> Welcome To our home page </h1>
    <p className="card-text my-4 ">This page is used to solve thed problem of the farmers <br></br> and the main moto of the website  is <br></br>
  to  manage the transportation problem of the farmer<br></br> and to give them better market in order to sell their crops   </p>
    <a href="#" className="btn btn-primary my-6">Go somewhere</a>
  </div>
  
</div>

      <div className=" content1-home d-flex my-10 mx-3 p-10 align-items-center justify-content-center my-12">
        <div className="right my-12 px-3">
          <h1 className="image-home-header"> What is Sustainable farming ?</h1>
          <p className="right-text  fs-4">

            Sustainable agriculture is farming in sustainable ways meeting
            society's present food and textile needs, without compromising the
            ability for current or future generations to meet their needs. in
            simple words farming the crops without affecting the nature and the
            fertility of the soil
          </p>
          <br></br>
          <a
            href="https://en.wikipedia.org/wiki/Agriculture"
            className="btn btn-danger my-2"
          >
         
            Read More
          </a>
        </div>
        <div className="left">
          <img
            src="https://st.depositphotos.com/1018248/3979/i/600/depositphotos_39794851-stock-photo-sustainable-agriculture-business-for-protect.jpg"
            className="image-left"
          />
        </div>
      </div>
    </div>
  );
}
