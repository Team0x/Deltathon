import React, { useState } from "react";
import Navbar from "./Navbar";
import { app } from "../firebase";
import { getDatabase, ref, set } from "firebase/database";
const db=getDatabase(app)

export default function Contract() {
  const [email ,setemail]=useState("")
  const [name ,setname]=useState("")
  const [information,setinformation]=useState("")
  const submitHandler=(e)=>{
    e.preventDefault()
                                                                                                                                                                                                                           
    set(ref (db,`user/${name}`),{
   email,email,information 
    
    })
  }
  return (
    <>
      <Navbar />
      <div className="right">
        <img
          src="https://thumbs.dreamstime.com/b/farmer-agronomist-shaking-hands-standing-wheat-field-agreement-agriculture-business-contract-concept-combine-farmer-192070985.jpg"
          className="contract-image"
        />
      </div>
      <div className="d-flex  contract-container">

 <div className="left">
 <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" className="contract-left"/>
 </div>
      

      <div className="card p-4 register-container">
        <h1 className="text-center"> Registration form</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={name}
              onChange={(e)=>{
                setname(e.target.value)
              }}
              required
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              className="form-control"
              onChange={(e)=>{
                setemail(e.target.value)
              }}
              required
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="password">password:</label>
            <input
              type="password"
              name="Password"
              className="form-control"
              
              

              required
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="email">Write something about you :</label>
            <input
              type="text"
              name="information"
              className="form-control information-form"
              value={information}
              onChange={(e)=>{
                setinformation(e.target.value)
              }}
              required
            ></input>
          </div>
          <button type="submit" className="btn btn-primary m-2" onClick={submitHandler}>
            Register
          </button>
        </form>
      </div>
      </div>
    </>
  );
}

