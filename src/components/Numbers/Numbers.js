import React, { Component } from 'react';
import Result from './Result';

class Numbers extends Component {
  constructor() {
    super();
    this.state = {
      numbers: '',
      results: [],
    };
  }

  handleNumberChange = (e) => {
    const {
      target: { value },
    } = e;

    const numbers = Array.from(value);
    const result = numbers.reduce((a, b) => Number(a) + Number(b), 0);

    this.setState((prevState) => ({
      numbers: value,
      results: [...prevState.results, result],
    }));
  };

  render() {
    return (
      <div className="Numbers">
        <h1>Numbers</h1>
        <input type="number" value={this.state.numbers} onChange={this.handleNumberChange} />
        <ul>
          {this.state.results.map((result, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Result key={i} result={result} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Numbers;
