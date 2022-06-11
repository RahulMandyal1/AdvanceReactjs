import React, { Component } from "react";
import WithCounter from "./WithCounter";
class HoverCounter extends Component {
  render() {
    return (
      <>
        <button onMouseOver={this.props.incrementCount}>
          You hovered me {this.props.count}
        </button>
      </>
    );
  }
}

export default WithCounter(HoverCounter);
