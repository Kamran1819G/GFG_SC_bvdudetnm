import './css/App.css';
import './css/Loader.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import $ from "jquery";
import "jquery-ui/dist/jquery-ui.min";
import { useEffect } from "react";

import Navbar from './components/navbar/NavbarComponent';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Team from './pages/Team';
import JoinCommunity from './pages/JoinCommunity';

import {Routes, Route,} from 'react-router-dom';
import ScrollToTop from './components/scrollToTop/ScrollToTop';

import loader_img from './assets/Images/gfglogo.png';

function App() {
  useEffect(() => {
    // loader Script
     $("body").prepend(
       <div className="loader_bg">
        <div className="pulse1"></div>
        <div className="pulse2"></div>
        <div className="loader d-flex justify-content-center">
          <img src={loader_img}alt="#"/>
        </div>
       </div>
     );
     $(window).on("load", function () {
      setTimeout(function () {
        $(".loader_bg").remove();
      }, 3500);
    });
  }, []);
  return (
    <>
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route  exact path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="team" element={<Team/>} />
      <Route path="joincommunity" element={<JoinCommunity/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
