import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import '../App.css'
import Breakfast from './Breakfast'
import { breakfastMenu } from './Menu Data/Breakfast'
import Lunch from './Lunch'
import { lunchMenu } from './Menu Data/Lunch'

const Menu = () => {
  return (<div className="menu">

    <nav>
        <ul><li ><Link to={'breakfast'} className='menuLinks'>Breakfast</Link></li></ul>
        <ul><li><Link to={'lunch'} className='menuLinks'>Lunch</Link></li></ul>
        <ul><li><Link to={'diner'} className='menuLinks'>Diner</Link></li></ul>
    </nav>
    <Routes>
        <Route path='breakfast' element={<div className='breakfast-Wrapper' > 

          {breakfastMenu.map((bMenu)=>
            
            <Breakfast 
            id = {bMenu.id}
            bName = {bMenu.bName}
            bDesc = {bMenu.bDesc}
            bPrice ={bMenu.bPrice}
            
            />
            
            )}
        </div>}></Route>
        <Route path='lunch' element={<div className='lunch-Wrapper'>

          {lunchMenu.map((lMenu) =>
            <Lunch 
            
              id = {lMenu.id}
              img = {lMenu.img}
              lName = {lMenu.lName}
              lDesc = {lMenu.lDesc}
            
            />
          )}
        </div>}></Route>
        <Route path='diner' element={<h4>this is the diner page</h4>}></Route>
    </Routes>
    <div>Menu</div>

  </div>
  )
}

export default Menu