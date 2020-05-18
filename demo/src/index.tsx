import React, {Component} from 'react';
import {render} from 'react-dom';
import {ExampleComp} from '../../src';

export default class Demo extends Component {
  render() {
    return (
      <div>
        <h1>foodcost-react Demo</h1>
        <ExampleComp />
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
