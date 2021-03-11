import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Result extends PureComponent {
  render() {
    return <li>{this.props.result}</li>;
  }
}

Result.propTypes = {
  result: PropTypes.number,
};

export default Result;
