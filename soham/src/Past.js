import React from 'react'
import "./Past.css"
import {Carousel} from '3d-react-carousal';
// npm install 3d-react-carousal --force

const Past = () => {

  let slides = [
    <img  src="autorun.jpg" style={{ width: "300px" }} alt="1" />,
    <img  src="autorun.jpg" style={{ width: "300px" }} alt="2" />  ,
    <img  src="autorun.jpg" style={{ width: "300px" }} alt="3" />  ,
    <img  src="autorun.jpg" style={{ width: "300px" }} alt="4" />  ,
    <img  src="autorun.jpg" style={{ width: "300px" }} alt="5" />  ,
    <img  src="autorun.jpg" style={{ width: "300px" }} alt="6" />,
    <img  src="autorun.jpg" style={{ width: "300px" }} alt="7" />  ,  ];

    const callback = function(index){
      console.log("callback",index)
  }

  return (
    <div className='past'>
      <h1>Our <div className='clrr'> Past Events</div></h1>
      <p>Lorem ipsum dolor sit amet consectetur. Dolor at malesuada aliquet eget et nibh eu. Suspendisse purus eget vitae ac imperdiet tortar pallentesque vitae eu.</p>
       <div className='carousal'> <Carousel slides={slides}  interval={1000} onSlideChange={callback}/>
       </div>
       <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>

    </div>
  )
}

export default Past
