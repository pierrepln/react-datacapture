/*
*		Made for React first app
*		Sun 21st February 2016
*
*		Made with <3 by Pierre Plantié
*/

import React from 'react';
import Branding from '../components/Branding';
import DataCapture from '../components/DataCapture';
import InstantWinner from '../components/InstantWinner';
import Conditional from '../components/Conditional';
import MailDispatch from '../components/MailDispatch';
import Thanks from '../components/Thanks';
import Save from '../components/Save';
import Reset from '../components/Reset';

/*
  A - Branding					---	A simple logo/image representing a hypothetical consumer brand e .g. Apple or BMW. When the user clicks on the image, they will progress to the next component/step
  B - Data Capture Form	---	A simple data capture form that collects the name from the user
  C - Instant Winner		---	Calls the “Pick a Winner API” to determine if this user is a “winner”, and if they are, get a voucher code
  D - Conditional				---	Separates winners and losers into different flows (hint: remember we want flexibility, how would this component be re­used with components other than the Instant Winner one?)
  E - Data Capture Form (instant win: winner)	---	A data capture form that collects ● email ● preferred prize
  I - Data Capture Form (instant win: loser)	---	A data capture form that collects an email only ● email
  F - Mail Dispatch			---	Same component as previous flow, but sends a “Congratulations!” message in the email body
  G - Thanks						---	Shows a thank you message, and congratulates the user if they are a winner. Displays “Better luck next time!” to any losers.
  X - Save							---	Same as previous process
  H - Reset							---	Same as previous process
*/

export default class Task2 extends React.Component {
  constructor(props) {
    super(props);
    this.handleDataSubmit = this.handleDataSubmit.bind(this);
    this.handleFlush = this.handleFlush.bind(this);
    this.next_step = this.next_step.bind(this);
    this.state = {
      data: [],
      step: 'A',
      winner: false,
      message: 'Better luck next time!'
    };
  }

  next_step() {
    switch(this.state.step) {
      case 'A':
        this.setState({step: 'B'});
        break;
      case 'B':
        this.setState({step: 'C'});
        break;
      case 'C':
        this.setState({step: 'D'});
        break;
      case 'D':
        if (this.state.winner)
          this.setState({step: 'E'});
        else
          this.setState({step: 'I'});
        break;
      case 'E':
        this.setState({step: 'F'});
        break;
      case 'F':
        this.setState({step: 'G'});
        break;
      case 'I':
        this.setState({step: 'G'});
        break;
      case 'G':
        this.setState({step: 'X'});
        break;
      case 'X':
        this.setState({step: 'H'});
        break;
      case 'H':
        this.setState({step: 'A'});
        break;
    }
  }

  handleDataSubmit() {
    // this.setState({
    //   email: '',
    //   postcode: '',
    //   optedIn: false
    // });
    this.next_step();
  }

  handleFlush() {
    this.setState({
      step: 'A',
      name: '',
      customerID: '',
      email: '',
      postcode: '',
      optedIn: false
    });
    this.next_step();
  }

  currentStepView() {
    switch(this.state.step) {
      case 'A':
        return (<Branding onClick={this.next_step} />);
        break;
      case 'B':
        return (<DataCapture data={this.state} onDataSubmit={this.handleDataSubmit} />);
        break;
      case 'C':
        return (<InstantWinner onNextStep={this.next_step} />);
        break;
      case 'D':
        return (<Conditional onNextStep={this.next_step} />);
        break;
      case 'E':
        return (<DataCapture data={this.state} onDataSubmit={this.handleDataSubmit} />);
        break;
      case 'I':
        return (<DataCapture data={this.state} onDataSubmit={this.handleDataSubmit} />);
        break;
      case 'F':
        return (<MailDispatch data={this.state} onNextStep={this.next_step} />);
        break;
      case 'G':
        return (<Thanks data={this.state} onDone={this.next_step} />);
        break;
      case 'X':
        return (<Save data={this.state} onNextStep={this.next_step} />);
        break;
      case 'H':
        return (<Reset data={this.state} onFlush={this.handleFlush} />);
        break;
    }
  }

  render() {
    return (
      <div>
        {this.currentStepView()}
      </div>
    );
  }

}
