import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function Home() {


    const [users,setUsers]=useState([])

  const{id}=useParams()

    useEffect(()=> {
        loadUsers();
    },[]);

    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:8080/users")
        setUsers(result.data);
    }

    const deleteUser=async(id)=>{
      await axios.delete(`http://localhost:8080/user/${id}`)
      loadUsers()
    }

    const [stocks,setStocks]=useState([])

  useEffect(()=> {
      loadStocks();
  },[]);

  const loadStocks=async()=>{
      const result=await axios.get("http://localhost:8080/stocks")
      setStocks(result.data);
  }

  const deleteStock=async(id)=>{
    await axios.delete(`http://localhost:8080/stock/${id}`)
    loadStocks()
  }

  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
      <th scope="col">Payment</th>
      <th scope="col">Options</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index)=>(

    <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{user.name}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td>{user.payment}</td>
      <td>
        <Link className="btn btn-primary mx-2" to={`/viewuser/${user.id}`}>View</Link>
        <Link className="btn btn-outline-primary mx-2" to={`/edituser/${user.id}`}>Edit</Link>
        <button className="btn btn-danger mx-2" onClick={()=> deleteUser(user.id)}>Delete</button>
      </td>
    </tr>
    
        ))
    }
    
  </tbody>
</table>

<table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Product</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
      <th scope="col">Options</th>
    </tr>
  </thead>
  <tbody>
    {
        stocks.map((stock,index)=>(

    <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{stock.product}</td>
      <td>{stock.productQ}</td>
      <td>{stock.price}</td> 
      <td>
        <Link className="btn btn-primary mx-2" to={`/viewstock/${stock.id}`}>View</Link>
        <Link className="btn btn-outline-primary mx-2" to={`/editstock/${stock.id}`}>Edit</Link>
        <button className="btn btn-danger mx-2" onClick={()=> deleteStock(stock.id)}>Delete</button>
      </td>
    </tr>
    
        ))
    }
    
  </tbody>
</table>
        </div>
    </div>
  )
}
