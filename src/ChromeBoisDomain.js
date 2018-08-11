import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    let x = event.clientX;
    let y = event.clientY;
    drawChromeBoiAtCoords(x, y);
  }

  handleOnClick = (event) => {
    toggleCycling();
  }

  handleOnKeyDown = (event) => {
    switch (event.which) {
      case 65: // "a"
        resize("+");
        break;
      case 83: // "s"
        resize("-");
        break;
      default:
        null;
    }
  }


  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={this.handleOnClick}
        onKeyDown={this.handleOnKeyDown}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
