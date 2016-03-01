/*
*		Made for React first app
*		Sun 21st February 2016
*
*		Made with <3 by Pierre Plantié
*/

import React from "react";

//
//  Mail Dispatch --- Sends an email to the user if they have opted­in
//
export default class MailDispatch extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.data.optedIn)
      MockAPI.sendEmail(this.props.data.email, 'registrationEmail', this.props.data, this.props.onNextStep());
    else
      this.props.onNextStep();
  }

  render() {
    return (
      <div>Loading</div>
    );
  }

}
