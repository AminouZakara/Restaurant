import React from 'react'
import { useState } from 'react'

const pStyle = {
  WebkitLineClamp: 5,
  webkitBoxOrient: 'vertical',
  overflow: 'hidden',
  display: '-webkit-box'
}

const Lunch = (props) => {

const [isOpen , setIsOpen] = useState(false)


  return (<div>
    <div>Lunch</div>
    <div className="lunch-container">
      <div className="lunch-Menu">
        <div className="id">
          <h1>{props.id}</h1>
        </div>
        <img src={props.img} alt="" />
        <div className="details">
          <div className="lName">
            <h2>{props.lName}</h2>
            
          </div>
          <div className="lDesc">
            <p style={isOpen ? null : pStyle}>{props.lDesc}</p>

            <div className="readMoreBtn">
              <button onClick={()=> setIsOpen(!isOpen) }>
                {isOpen ? 'Read Less' : 'Read More' }</button>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
  )
}

export default Lunch