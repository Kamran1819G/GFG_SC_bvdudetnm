import React from 'react'

 export const Image = () => {
  return (
    <div >
     <div id="carouselExampleAutoplaying" className="carousel slide"  data-bs-interval="2000" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active img ">
      <img src="Aditi_Thakur.jpg" className="d-block w-100 img-fluid"  style={{height:200,width:80}} alt="..."/>
      <h6>Aditi Thakur</h6>
      <h6>Pr Mangement</h6>
    </div>
    <div className="carousel-item">
      <img src="Amaan_Shaikh.jpg" className="d-block w-100 img-fluid" style={{height:200,width:80}} alt="..."/>
      <h6>Amaan Shaikh</h6>
      <h6>Content Writer</h6>
    </div>
    <div className="carousel-item">
      <img src="Raj_Mishra.jpg" className="d-block w-100 img-fluid" style={{height:200,width:80}} alt="..."/>
      <h6>Raj Naryan Mishra</h6>
      <h6>Technical Lead</h6>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}



