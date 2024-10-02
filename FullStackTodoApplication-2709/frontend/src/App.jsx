import React from 'react'
import Home from './pages/Home'
import  {BrowserRouter, Route, Routes } from "react-router-dom"
import Add from './pages/Add'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}  />
      <Route path='/add' element={<Add />}  />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App