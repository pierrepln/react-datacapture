/*
*		Made for React first app
*		Sun 21st February 2016
*
*		Made with <3 by Pierre Plantié
*/

import React from "react";

//
//  Instant Winner  --- call "Winner API” - if user is “winner” he get a voucher code
//
export default class InstantWinner extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      this.props.onNextStep();
  }

  render() {
    return (
      <div>Loading</div>
    );
  }

}
