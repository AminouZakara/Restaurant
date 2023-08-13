import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import '../App.css'
import Breakfast from './Breakfast'
import { breakfastMenu } from './Menu Data/Breakfast'

const Menu = () => {
  return (<div className="menu">

    <nav>
        <ul><li ><Link to={'breakfast'} className='menuLinks'>Breakfast</Link></li></ul>
        <ul><li><Link to={'lunch'} className='menuLinks'>Lunch</Link></li></ul>
        <ul><li><Link to={'diner'} className='menuLinks'>Diner</Link></li></ul>
    </nav>
    <Routes>
        <Route path='breakfast' element={breakfastMenu.map((bMenu)=>
            
            <Breakfast 
            id = {bMenu.id}
            bName = {bMenu.bName}
            bDesc = {bMenu.bDesc}
            bPrice ={bMenu.bPrice}
            
            />
            
            )}></Route>
        <Route path='lunch' element={<h4>this is the lunch page</h4>}></Route>
        <Route path='diner' element={<h4>this is the diner page</h4>}></Route>
    </Routes>
    <div>Menu</div>

  </div>
  )
}

export default Menu