import React, {useState} from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
export default function AddStock() {

    let navigate = useNavigate();

    const [stock,setStock]=useState({
        product:"",
        productQ:"",
        price:"",
      })
    
      const{product,productQ,price}=stock
    
      const onInputChange=(e)=>{
        setStock({...stock,[e.target.name]: e.target.value});
      };

      const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/stock",stock)
        navigate("/")   
    };

  return <div className="container">
  <div className="row">
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
      <h2 className="text-center m-4">Register Product</h2>

      <form onSubmit={(e)=> onSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">Product Name</label>
          <input type={"text"}
          className="form-control"
          placeholder="Enter product name"
          name="product"
          onChange={(e)=>onInputChange(e)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="Last Name" className="form-label">Inventory</label>
          <input type={"text"}
          className="form-control"
          placeholder="Enter inventory quantity"
          name="productQ"
          onChange={(e)=>onInputChange(e)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="Email" className="form-label">Price</label>
          <input type={"text"}
          className="form-control"
          placeholder="Enter price product"
          name="price"
          onChange={(e)=>onInputChange(e)}/>
        </div>
        <button type="submit" className="btn btn-outline-primary">Submit</button>
        <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
        </form>
    </div> 
  </div>;
</div>
}
