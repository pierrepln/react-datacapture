/*
*		Made for React first app
*		Sun 21st February 2016
*
*		Made with <3 by Pierre Plantié
*/

import React from "react";

//
//  Conditional --- Separates winners and losers into different flows
//                  (hint: HOW TO re­use with other components than InstantWinner?)
//
export default class Conditional extends React.Component {
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
