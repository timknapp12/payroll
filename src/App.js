import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="image-container" />
        <div className="image-container__text">Payroll For Dummies</div>
        <div className="parallax-border" />
        <div className="image-container">
          <div className="image-two" />
          <div className="paragraph-container">
            <p className="image-container__text" id="small-font">
              Random paragraph- Each Kindhood poncho is made from 70% sustainable bamboo fiber and
              30% cotton blend. Ponchos feature an ultra-soft, absorbent, and
              quick-drying terrycloth interior; a hood for warmth and
              protection; and a pouch pocket for your littles to keep their
              hands warm, snacks safe, and seashell collections secure.
            </p>
          </div>
        </div>
        <div className="parallax-border" />
        <div className="image-container">
          <div className="image-three" />
          <div className="paragraph-container">
            <form method="POST" className='image-container__text form'
                action="https://formspree.io/timknapp12@gmail.com">
              <input type="email" name="email" placeholder="Your email"/>
              <textarea name="message" placeholder="Your message"></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
