import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "./Images/HongKong.jpeg";
import image2 from "./Images/Macao.jpeg";
import image3 from "./Images/Japan.jpeg";
import image4 from "./Images/LasVegas.jpeg";

import "./App.css";

function App() {
  return (
    <div>
      <h1>React Daily Challenge Responsive Carousel </h1>
      <Carousel>
        <div class="box">
          <img src={image1} alt="Hong Kong" title="Hong Kong" />
          <div className="caption">
            <h3>Hong Kong</h3>
            <p>Description of Hong Kong...</p>
          </div>
        </div>
        <div class="box">
          <img src={image2} alt="Macao" />
          <div className="caption">
            <h3>Macao</h3>
            <p>Description of Macao...</p>
          </div>
        </div>
        <div class="box">
          <img src={image3} alt="Japan" />
          <div className="caption">
            <h3>Japan</h3>
            <p>Description of Japan...</p>
          </div>
        </div>
        <div class="box">
          <img src={image4} alt="Las Vegas" />
          <div className="caption">
            <h3>Las Vegas</h3>
            <p>Description of Las Vegas...</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
