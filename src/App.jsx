import React from 'react'
import "./App.css"
import {Link, Route, Routes } from 'react-router-dom'
import Menu from './Menu/Menu'
import Home from './Home'

const App = () => {
  return (
    <div className="App">
      
      <nav>
        <ul>
          <li><Link className='appLinks' to={'/'}>Home</Link></li>
          <li><Link className='appLinks' to={'menu/*'}>Menu</Link></li>
          <li><Link className='appLinks' to={'contact'}>Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='menu/*' element={<Menu />}></Route>
        <Route path='contact' element={<h3>This is the Contact Page</h3>}></Route>
      </Routes>
    </div>
    
  )
}

export default App