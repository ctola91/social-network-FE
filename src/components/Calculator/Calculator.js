import React, { Component } from 'react';

import './Calculator.css';

class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      result: 0,
    };
  }

  handleOnChange = (e) => {
    const {
      target: { value, name },
    } = e; // const value = e.target.value; (es5)
    this.setState({
      [name]: Number(value),
    });
  };

  handleResult = () => {
    this.setState((prevState) => ({
      result: prevState.number1 + prevState.number2,
    }));
  };

  render() {
    return (
      <div className="Calculator">
        <p>
          <input
            name="number1"
            type="text"
            value={this.state.number1}
            onChange={this.handleOnChange}
          />
          +
          <input
            name="number2"
            type="text"
            value={this.state.number2}
            onChange={this.handleOnChange}
          />
          <button type="button" onClick={this.handleResult}>
            =
          </button>
        </p>
        <p className="result">{this.state.result}</p>
      </div>
    );
  }
}

export default Calculator;
