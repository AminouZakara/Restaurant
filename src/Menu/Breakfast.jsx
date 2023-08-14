import React from 'react'

const Breakfast = (props) => {
  return (<div className='Break'>
    
        <div className="breakfast">
            <div className="bContainer">
               <h3>{props.id}</h3>
               <img src="src/Menu/images/Yassa.jpg" alt="" />
               <div className="details">
                  <div className="bName">
                    <h1> {props.bName} </h1>
                  </div>
                  <div className="bDesc">
                    <p> {props.bDesc} </p>

                  </div>
                  <div className="bPrice">
                    <h4> {props.bPrice} </h4>
                  </div>
              </div>
            
            </div>
           
        </div>
            

    </div>
  )
}

export default Breakfast