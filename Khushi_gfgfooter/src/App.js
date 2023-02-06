import "./App.css";
import React from "react";
import { Image } from "./components/Image";

function App() {
  return (
    <div className="foot">
      <div className="follow">
        <b> Follow Us</b>
        <div className="insta">
          <img src="instagram.png" alt=".." />

          <a href="/" className="stretched-link  ">
            www.instagram/gfg_bvudet-nm
          </a>
        </div>
        <div className="link">
          <img src="linkedin.png" alt=".." />

          <a href="/" className="stretched-link">
            www.linkedin/gfg_bvudet-nm
          </a>
        </div>
      </div>

      <div className="contact">
        Contact Us
        <div className="mail">
          <img src="mail.png" alt=".." />

          <a href="/" className="stretched-link">
            geeksforgeeksbvudetnm@gmail.com
          </a>
        </div>
        <div className="add">
          <img src="pin.png" alt=".." />
          <text className="add2 ">
           <text> Bharati VidyaPeeth College Of Engineering & 
             Technology,OffCampus
           Navi Mumbai, Kharghar(40000).</text>
          </text>
        </div>
      </div>
      <div className="made">Made By</div>
      <div className="made1">
        <Image />
      </div>

      <div className="copy">&copy;All rights reserved by GFG BVDUDETNM</div>
    </div>
  );
}

export default App;
