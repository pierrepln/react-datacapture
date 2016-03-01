/*
*		Made for Akkroo Code Task
*		Sun 21st February 2016
*
*		Made with <3 by Pierre Plantié
*/

import React from "react";

//
//Thanks  --- Displays a simple message to the user
//
export default class Thanks extends React.Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    this.props.onDone();
  }

  render() {
    return (
      <div>
        <div>
          {this.props.data.message}
        </div>
        <button onClick={this._handleClick} >
          Done
        </button>
      </div>
    );
  }
  
}
