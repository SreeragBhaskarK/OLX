import React,{useState} from 'react';

import Logo from '../../olx-logo.png';
import './Signup.css';
import axios from '../../axios'
import {useNavigate ,Link} from 'react-router-dom'

export default function Signup() {
  const navigate = useNavigate()
  const [formData,setFormData]= useState({
    name:'',
    email:'',
    password:'',
    phone:''
  })

const handleChange=(e)=>{
  const {name,value} =e.target;
  setFormData((prevFormData)=>({
    ...prevFormData,
    [name]:value
  }))
}

  const handleSubmit=(e)=>{
    e.preventDefault()

    axios.post('/signup',formData).then((response)=>{
      if(response.data.success){
        navigate('/login')
      }
    }).catch((err)=>{
      console.log(err);
    })
  
  }


  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link to='/login'>Login</Link>
      </div>
    </div>
  );
}
