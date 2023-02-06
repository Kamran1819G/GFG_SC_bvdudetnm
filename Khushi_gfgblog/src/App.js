import React from "react";
import "./App.css";
import { Blog } from "./components/Blog";
//import {GridExample} from "./components/Header";
function App() {
  return (
    <>
      <h1 className="blank">
        Our{" "}
        <span className="blank" style={{ color: "green" }}>
          {" "}
          Blog
        </span>
      </h1>
      <p className="app-link">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
        delectus eius porro explicabo inventore quas alias! Adipisci dolorum
        maiores accusantium, ipsa in nisi quas provident perferendis consequa
        tur, iste, rerum iure nemo aut tenetur laborum.
      </p>

      <Blog/>
    </>
  );
}

export default App;
