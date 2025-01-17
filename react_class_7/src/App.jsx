import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Component1 from './components/Component1'
import Component2 from './components/Component2'
import Component3 from './components/Component3'
import Component4 from './components/Component4'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Component1 />} />
        <Route path="/home" element={<Component2 />} />
        <Route path='/login' element={<Component3 />} />
        <Route path='/signup' element={<Component4 />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App