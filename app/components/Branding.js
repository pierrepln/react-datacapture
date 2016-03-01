/*
*		Made for Akkroo Code Task
*		Sun 21st February 2016
*
*		Made with <3 by Pierre Plantié
*/

import React from 'react';

export default class Branding extends React.Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    this.props.onClick();
  }

  render() {
    return (
      <div onClick={this._handleClick}>
        touch to start
      </div>
    );
  }
 }
