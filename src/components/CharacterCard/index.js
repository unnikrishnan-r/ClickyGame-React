import React from "react";
import "./style.css";

class CharacterCard extends React.Component {
  render() {
    return (
      <div className="card click-item">
        <button
          onClick={this.props.onClick}
          id={this.props.value.id}
          className="img-container"
        >
          <img alt={this.props.value.name} src={this.props.value.image} />
        </button>
      </div>
    );
  }
}

export default CharacterCard;
