import "./styles.css";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
import { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickCounter />
        <HoverCounter />
      </div>
    );
  }
}
