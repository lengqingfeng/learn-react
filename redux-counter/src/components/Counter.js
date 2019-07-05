import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Counter extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    onIncrementClick: PropTypes.func.isRequired,
    onDecrementClick: PropTypes.func.isRequired
  };

  render() {
    const { value, onIncrementClick, onDecrementClick } = this.props;
    return (
      <div>
        <button onClick={onIncrementClick}> + </button>
        <span>{value}</span>
        <button onClick={onDecrementClick}> - </button>
      </div>
    );
  }
}
