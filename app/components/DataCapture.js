/*
*		Made for Akkroo Code Task
*		Sun 21st February 2016
*
*		Made with <3 by Pierre Plantié
*/

import React from "react";

// Task1 ----
//  B - Data Capture (Page 1)   ---   ● email
//  C - Data Capture (Page 2)   ---   ● postcode
//                                    ● optedIN (checkbox consent to receive emails)
//                                    ● CustomerID -- field stored on file
// Task2 ----
//  B - Data Capture Form	      ---   ● name
//  E - Data Capture Form (winner)--  ● email
//                                    ● prize
//  I - Data Capture Form (loser)	---	● email

export default class DataCapture extends React.Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
    this._handlePrize1 = this._handlePrize1.bind(this);
    this._handlePrize2 = this._handlePrize2.bind(this);
    this.state = {
      step: 'A',
      name: '',
      customerID: '',
      email: '',
      postcode: '',
      optedIn: false,
      prize: ''
    };
  }

  _handlePrize1() {
    this.setState({
      prize: 'prize 1'
    });
  }

  _handlePrize2() {
    this.setState({
      prize: 'prize 2'
    });
  }

  _handleClick() {
    this.props.onDataSubmit();
  }

  render() {
    return (
    <div>
      <div>
        <div>
          email ? <input name="email" placeholder="e.g. your email" type="text" />
        </div>
        <div>
          postcode ? <input name="postcode" placeholder="e.g. your postcode" type="text" />
        </div>
        <div>
          name ? <input name="optedIn" placeholder="e.g. your name" type="checkbox" />
        </div>
        <div>
          <div>ID:{this.props.data.customerID}</div>
        </div>
        <div>
          <input name="name" value="" placeholder="e.g. your name" type="text" />
        </div>
        <div>
          prize ?
          <div>
            <button onClick={this._handlePrize1} >
              prize 1
            </button>
          </div>
          <div>
            <button onClick={this._handlePrize2} >
              prize 2
            </button>
          </div>
        </div>
      </div>
      <div>
        <button onClick={this._handleClick} >
          Done
        </button>
      </div>
    </div>
    );
  }

}
