import React from 'react'
import "./Upcoming.css"

const Upcoming = () => {
  return (
    <div className='upcoming'>
        <h1>Our <div className='clr'> Upcoming </div>Events</h1>
        
        <p>Lorem ipsum dolor sit amet consectetur. Dolor at malesuada aliquet eget et nibh eu. Suspendisse purus eget vitae ac imperdiet tortar pallentesque vitae eu.</p>
        <div className='cardss'>
            
            <div className='boxx'>
            <img className='backk' style={{width: "250px" ,height: "250px"}} src='autorunReg.jpeg' alt=""  />
            <img className='frontt' style={{width: "250px", height: "250px"}} src='autorun.jpg' alt=""  />
            </div>
            <div className='boxx'>
            <img className='backk' style={{width: "250px" ,height: "250px"}} src='autorunReg.jpeg' alt=""  />
            <img className='frontt' style={{width: "250px", height: "250px"}} src='autorun.jpg' alt=""  />
            </div>
            <div className='boxx'>
            <img className='backk' style={{width: "250px" ,height: "250px"}} src='autorunReg.jpeg' alt=""  />
            <img className='frontt' style={{width: "250px", height: "250px"}} src='autorun.jpg' alt=""  />
            </div>
        
            </div>
        <br/>
    </div>
  )
}

export default Upcoming
