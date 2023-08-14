import React from 'react'

const Lunch = (props) => {
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
            <p>{props.lDesc}</p>

          </div>
        </div>
      </div>

    </div>
  </div>
  )
}

export default Lunch