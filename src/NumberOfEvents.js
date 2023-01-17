import React, { Component } from 'react';
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    noe: 10,
    errorText: ""
  }

  componentDidMount() {
    this.setState({ noe: this.props.noe || 10 });
  }

  changeNOE(value) {
    this.setState({ noe: value });
    this.props.updateNumberOfEvents(value);
    if (value < 1 || value > 32) {
      this.setState({ errorText: "Select number from 1 to 32" });
    } else this.setState({ errorText: "" });
  }

  render() {
    const { noe, errorText } = this.state;
    return (
      <div className="NumberOfEvents">
        <ErrorAlert text={errorText} />
        <h3>Number of Events:</h3>
        <input
          className="noe-input"
          type="number"
          value={noe}
          onChange={event => {
            this.changeNOE(event.target.value);
          }}
        >
        </input>
      </div>
    )
  }

}

export default NumberOfEvents;