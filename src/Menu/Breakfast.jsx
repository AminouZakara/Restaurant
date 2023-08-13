import React from 'react'

const Breakfast = (props) => {
  return (<div className='Break'>
    
        <div className="breakfast">
            <div className="bContainer">
               <h3>{props.id}</h3>
               <img src={props.bImage} />
               <div className="details">
                  <h1> {props.bName} </h1>
                  <p> {props.bDesc} </p>
                 <h4> {props.bPrice} </h4>
              </div>
            
            </div>
           
        </div>
            

    </div>
  )
}

export default Breakfast