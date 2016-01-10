
import React, { Component, PropTypes } from 'react';

import calc from '~/src/modules/use-worker';

class Counter extends Component {
  render() {
    const { increment, decrement } = this.props;
    const click = () => calc(1, (result) => console.log(result));
    return (
      <div onClick={click}>
        <div>Counter = <span id="cntr">{this.props.counter}</span></div>
        <button id="incr" onClick={increment}>+</button>
        <button id="decr" onClick={decrement}>-</button>
      </div>
    );
  }
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};

export default Counter;
