/*
*		Made for Akkroo Code Task
*		Sun 21st February 2016
*
*		Made with <3 by Pierre Plantié
*/

import React from "react";

//
// Event Attendee List ---	A list of the attendees (from the sample data)
//
export default class EventAttendeeList extends React.Component {
  constructor(props) {
    super(props);
    this._handleNameSelection = this._handleNameSelection.bind(this);
  }

  _handleNameSelection(e) {
    this.props.onNameSelection(e);
  }

  render() {
    var AttendeeNodes = this.props.data.map(
      (attendees) => <div className="exampleGuestListView">
      <Attendee data={attendees} onNameSelection={this._handleNameSelection}/>
      </div>
    );
    return (
      <div className="guestList">
        {AttendeeNodes}
      </div>
    );
  }

}

class Attendee extends React.Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    this.props.onNameSelection(this.props.data);
  }

  render() {
    return (
      <button onClick={this._handleClick} >
        {this.props.data.name}
      </button>
    );
  }

}
