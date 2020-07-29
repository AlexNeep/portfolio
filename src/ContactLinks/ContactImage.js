import React, { Component } from "react";

export default class ContactImage extends Component {
  render() {
    let hover = false;
    if (this.props.class === "exiting") {
      hover = true;
    }
    return (
      <div>
        <img className={hover ? "hover" : null} src={this.props.src} />
      </div>
    );
  }
}
