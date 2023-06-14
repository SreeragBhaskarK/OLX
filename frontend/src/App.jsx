import React, { createContext, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import ViewPost from './Pages/ViewPost'

function App() {
  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/post' element={<Create />} />
      <Route path='/item/:id' element={<ViewPost />} />
    </Routes>
  )
}

export default App
