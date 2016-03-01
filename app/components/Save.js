/*
*		Made for React first app
*		Sun 21st February 2016
*
*		Made with <3 by Pierre Plantié
*/

import React from "react";

//
//  Save  --- console.log ‘email’, ‘postcode’, ‘optedIn’
//
export default class Save extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(
      " ###############################\n",
      "#\n",
      "#\t\tSAVE\n",
      "#\n",
      "# email\t:\t" + this.props.data.email + "\n",
      "# postcode\t:\t" + this.props.data.postcode + "\n",
      "# optedIn\t:\t" + this.props.data.optedIn + "\n",
      "###############################\n"
    );
    this.props.onNextStep();
  }

  render() {
    return (
      <div>Loading</div>
    );
  }

}
