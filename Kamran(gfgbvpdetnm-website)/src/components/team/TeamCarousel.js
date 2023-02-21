import React from "react";
import { Carousel } from "react-bootstrap";
import CoreTeam from "../../assets/CoreMembers/CoreTeam.jpeg";
import Team from "../../assets/Events/team.jpeg";
import eventpic_1 from "../../assets/Events/event_pic2.jpg";
import principal from "../../assets/Events/principal.jpeg";
import principal1 from "../../assets/Events/principal1.png";
import DS from "../../assets/Events/DS.jpg";
import Flutter from "../../assets/Events/Flutter.jpg";

function TeamCarousel() {
  return (
    <>
      <section className="section" style={{paddingTop: "0px"}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-5 col-lg-9 w-100vw">
              <Carousel fade>
                <Carousel.Item>
                  <img src={CoreTeam} className="d-block w-100" alt="..." />
                  <Carousel.Caption>
                    <h5>Core Team Members ( Foundation Team )</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={Team} className="d-block w-100" alt="..." />
                  <Carousel.Caption>
                    <h5>Team 2022</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={principal1} className="d-block w-100" alt="..." />
                  <Carousel.Caption>
                    <h5>Honarable principal of BVDU DET NM</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={principal} className="d-block w-100" alt="..." />
                  <Carousel.Caption>
                    <h5>Honarable principal of BVDU DET NM</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={DS} className="d-block w-100" alt="..." />
                  <Carousel.Caption>
                    <h5>Data Structure & Algortihm Session</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={eventpic_1} className="d-block w-100" alt="..." />
                  <Carousel.Caption>
                    <h5>Hacktober Event</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={Flutter} className="d-block w-100" alt="..." />
                  <Carousel.Caption>
                    <h5>Flutter Session</h5>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TeamCarousel;
