import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewStock() {



    const [stock,setStock]=useState({
        product:"",
        productQ:"",
        price:"",
    })

    const {id}=useParams();

    useEffect(()=>{
loadStock()
    },[])

    const loadStock=async ()=>{
        const result=await axios.get(`http://localhost:8080/stock/${id}`)
        setStock(result.data)
    }
    
  return <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">View Details</h2>

        <div className="card">
            <div className='card-header'>
                <b>Details of product with id: {stock.id}</b>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Product Name: </b>
                        {stock.product}
                    </li>
                    <li className='list-group-item'>
                        <b>Quanity: </b>
                        {stock.productQ}
                    </li>
                    <li className='list-group-item'>
                        <b>Price: </b>
                        {stock.price}
                    </li>
                
                </ul>
            </div>
        </div>
    <Link className='btn btn-primary my-2' to={"/"}>Back to Home</Link>
        </div>
    </div>
</div>
}
