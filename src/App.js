import React, { Component } from "react";
import "./App.css";

import office from "../src/assets/office.jpg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="image-container">
          {/* <img alt="office" src={office} className="main-image" /> */}
          <div className="image-container__title">Payroll For Dummies</div>
        </div>
        <div className="parallax-border" />
        <div className='paragrpah-container' >
          <p>
            Each Kindhood poncho is made from 70% sustainable bamboo fiber and
            30% cotton blend. Ponchos feature an ultra-soft, absorbent, and
            quick-drying terrycloth interior; a hood for warmth and protection;
            and a pouch pocket for your littles to keep their hands warm, snacks
            safe, and seashell collections secure.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
