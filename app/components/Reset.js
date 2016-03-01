/*
*		Made for React first app
*		Sun 21st February 2016
*
*		Made with <3 by Pierre Plantié
*/

import React from "react";

//
//  Reset --- Resets the application ready for the next user
//
export default class Reset extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onFlush();
  }

  render() {
    return (
      <div>Loading</div>
    );
  }

}
