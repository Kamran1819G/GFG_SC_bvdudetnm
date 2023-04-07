import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { NavLink } from "react-router-dom";
import CreatorCard from "./CreatorCard";
import "./Footer.css";
import Kamran from "../../assets/Developers/Kamran.jpg";
import Khushi from "../../assets/Developers/Khushi.png";
import Akash from "../../assets/Developers/Akash.png"; 
import Girish from "../../assets/Developers/Girish.png";  
import Raj from "../../assets/Developers/Raj.png";  
import Soham from "../../assets/Developers/soham.png";  
import Aditi from "../../assets/Developers/Aditi.png"; 
import Aryan from "../../assets/Developers/Aryan.png";  
import Gaurang from "../../assets/Developers/Gaurang.png";  
import Gauri from "../../assets/Developers/gauri.png";  


function Footer() {
  return (
    <>
      <footer>
        <div className="main-footer container">
          <div className="row">
            <div className="col-lg-12 mx-auto">
              <div className="footer-container d-flex flex-wrap justify-content-evenly text-center">
                <div className="col-lg-3">
                  <h3 className="footer-section-title">Follow Us</h3>
                  <ul className="social-links list-unstyled text-center pt-4">
                    <li className="list-inline-item">
                      <a href="https://github.com/GeeksForGeeksBVDUDETNM">
                        <i className="bi bi-github"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://www.linkedin.com/company/gfg-bvdu-det-nm-chapter/">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://www.instagram.com/gfg_bvdu_det_nm">
                        <i className="bi bi-instagram"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://linktr.ee/gfgbvdudetnm">
                        <i className="bi bi-tree"></i>
                      </a>
                    </li>
                  </ul>
                  <p className="bottom-line">!! GFG karlo Ho jayega !!</p>
                </div>
                <div className="col-lg-5">
                  <h3 className="footer-section-title">Contact Us</h3>
                  <ul className="contact-list list-unstyled">
                    <li className="list-item">
                      <i className="bi bi-envelope"></i>
                      <a href="mailto:gfgbvdudetdnm@gmail.com">
                        gfgbvdudetdnm@gmail.com
                      </a>
                    </li>
                    <li className="list-item">
                      <i className="bi bi-geo-alt-fill"></i>
                      <a href="https://www.google.com/search?q=bharati%20vidyapeeth%20deemed%20university%20navi%20mumbai&rlz=1C1CHBF_enIN1022IN1022&oq=bha&aqs=chrome.1.69i57j35i39l2j0i67j46i67j46i67i175i199l2j69i60.4777j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=AJOqlzVAkVQFAGfMSPH5N9rZ4jipRDLc7w:1676999490716&rflfq=1&num=10&rldimm=2392446290558875160&lqi=CjBiaGFyYXRpIHZpZHlhcGVldGggZGVlbWVkIHVuaXZlcnNpdHkgbmF2aSBtdW1iYWlIoLa-gdW2gIAIWkYQABABEAIQAxgAGAEYAhgDGAQYBSIwYmhhcmF0aSB2aWR5YXBlZXRoIGRlZW1lZCB1bml2ZXJzaXR5IG5hdmkgbXVtYmFpkgEKdW5pdmVyc2l0eZoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VSbGFYSlFOalozUlJBQqoBLBABKigiJGJoYXJhdGkgdmlkeWFwZWV0aCBkZWVtZWQgdW5pdmVyc2l0eSgA&ved=2ahUKEwi71Lr3jaf9AhURBt4KHXiSDIQQvS56BAgTEAE&sa=X&rlst=f#rlfi=hd:;si:2392446290558875160;mv:[[19.032192294255392,73.0626874537338],[19.029321984512368,73.0568348736633],null,[19.03075714558362,73.05976116369855],18]">
                        Bharati Vidyapeeth College of Engineering and
                        Technology, Off-Campus Navi Mumbai, Kharghar (410 210)
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3">
                  <h3 className="footer-section-title">Made By</h3>
                  <Carousel className="footer-carousel" fade indicators={false}>
                  <Carousel.Item>
                          <CreatorCard
                            img={Aryan}
                            title="Aryan Mahabhoi"
                            role="Web-Team Lead"
                          />
                  </Carousel.Item>
                  <Carousel.Item>
                          <CreatorCard
                            img={Gaurang}
                            title="Gaurang Manchekar"
                            role="Cordinator"
                          />
                    </Carousel.Item>
                  <Carousel.Item>
                          <CreatorCard
                            img={Raj}
                            title="Raj Naryan Mishra"
                            role="Website Coordinator"
                          />
                    </Carousel.Item>
                    <Carousel.Item>
                          <CreatorCard
                            img={Kamran}
                            title="Kamran  Khan"
                            role="Web Developer"
                          />
                    </Carousel.Item>
                    <Carousel.Item>
                          <CreatorCard
                            img={Khushi}
                            title="Khushi Raj"
                            role="Web Developer"
                          />
                    </Carousel.Item>
                    <Carousel.Item>
                          <CreatorCard
                            img={Akash}
                            title="Akash Aryan"
                            role="Web Developer"
                          />
                    </Carousel.Item>
                    <Carousel.Item>
                          <CreatorCard
                            img={Soham}
                            title="Soham Sahajwani"
                            role="Web Developer"
                          />
                    </Carousel.Item>
                    <Carousel.Item>
                          <CreatorCard
                            img={Girish}
                            title="Girish Shedge"
                            role="Web Designer"
                          />
                    </Carousel.Item>
                    <Carousel.Item>
                          <CreatorCard
                            img={Aditi}
                            title="Aditi Thakur"
                            role="Content coordinator"
                          />
                    </Carousel.Item>
                    <Carousel.Item>
                          <CreatorCard
                            img={Gauri}
                            title="Gauri Ghadge"
                            role="Content Writer"
                          />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
              <div className="copyright text-center">
                <p>
                  &copy; All rights reserved by
                  <NavLink to="#"> GFG BVDUDET-NM </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
