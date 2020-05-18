import React, {Component} from 'react';
import {render} from 'react-dom';
import Components from '../../src/index';

const {ExampleComp} = Components;

export default class Demo extends Component {
  render() {
    return (
      <div>
        <h1>nwb-boilerplate Demo</h1>
        <ExampleComp />
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
