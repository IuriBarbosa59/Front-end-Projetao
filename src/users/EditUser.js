
import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link,useNavigate, useParams } from "react-router-dom";

export default function EditUser() {

  let navigate = useNavigate();

  const{id}= useParams()

  const [user,setUser]=useState({
    name: "",
    lastName: "",
    email: "",
    payment: "",
  });

  const{ name, lastName, email, payment} = user;

  const onInputChange=(e)=>{
    setUser({...user,[e.target.name]: e.target.value});
  };

  useEffect(()=>{
    loadUser()
  },[])

  const onSubmit=async (e)=>{
      e.preventDefault();
      await axios.put(`http://localhost:8080/user/${id}`,user)
      navigate("/")   
  };

  const loadUser = async()=>{
    const result=await axios.get(`http://localhost:8080/user/${id}`)
    setUser(result.data)
  }

  return <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">Edit Employee</h2>

        <form onSubmit={(e)=> onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">Name</label>
            <input type={"text"} 
            className="form-control"
            placeholder="Enter name" 
            name="name"
            value={name}
            onChange={(e)=>onInputChange(e)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="Last Name" className="form-label">Last Name</label>
            <input type={"text"}
            className="form-control"
            placeholder="Enter Last Name"
            name="lastName" value={lastName}
            onChange={(e)=>onInputChange(e)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">Email</label>
            <input type={"text"}
            className="form-control"
            placeholder="Enter Email"
            name="email" value={email}
            onChange={(e)=>onInputChange(e)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="Payment" className="form-label">Payment</label>
            <input type={"text"}
            className="form-control"
            placeholder="Enter payment"
            name="payment" value={payment}
            onChange={(e)=>onInputChange(e)}/>
          </div>
          <button type="submit" className="btn btn-outline-primary">Submit</button>
          <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
          </form>
      </div> 
    </div>;
  </div>
}
