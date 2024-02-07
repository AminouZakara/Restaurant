import React from 'react'
import { useState } from 'react'

const pStyle = {
  WebkitLineClamp: 5,
  webkitBoxOrient: 'vertical',
  overflow: 'hidden',
  display: '-webkit-box'
}
const Breakfast = (props) => {
  const [isOpen, setIsOpen] = useState(false)


  return (<div>
    <div className="breakfast-container">
      <div className="breakfast-Menu">
        <div className="id">
          <h1>{props.id}</h1>
        </div>
        <img src={props.img} alt="" />
        <div className="details">
          <div className="bName">
            <h2>{props.bName}</h2>

          </div>
          <div className="bDesc">
            <p style={isOpen ? null : pStyle}>{props.bDesc}</p>

            <div className="readMoreBtn">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Read Less' : 'Read More'}</button>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
  )
}

export default Breakfast