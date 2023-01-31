import React from "react";
import image from "./images/CoreTeam.jpeg";
import eventpic1 from "./images/event_pic1.jpg";
import eventpic2 from "./images/event_pic2.jpg";

function TeamCarousel() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-5 col-lg-9 w-100vw">
            <div id="teamCarouselCaptions" className="team-carousel carousel slide" data-bs-ride="true">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#teamCarouselCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#teamCarouselCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#teamCarouselCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={image} className="d-block w-100" alt="..."/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Core Team Members</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={eventpic2} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={eventpic1} className="d-block w-100" alt="..."/>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#teamCarouselCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#teamCarouselCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TeamCarousel;
