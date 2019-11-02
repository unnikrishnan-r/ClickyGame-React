import React from "react";
import "./style.css";

class Title extends React.Component {
  render() {
    return (
      <div>
        <div>
          <ul className="navbar">
            <li>
              <a href="/">Clicky Game</a>
            </li>
            <li>
              <p>{this.props.messageAtClick}</p>
            </li>
            <li>
              <p>
                Score: {this.props.currentScore} | Top Score:{" "}
                {this.props.totalScore}
              </p>
            </li>
          </ul>
        </div>

        <header className="header">
          <h1>Clicky Game!</h1>
          <h2>
            Click on an image to earn points, but don't click on any more than
            once!
          </h2>
        </header>
      </div>
    );
  }
}

export default Title;
