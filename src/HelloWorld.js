import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

import style from './HelloWorld.useable.css';

class HelloWorld extends Component {
  componentDidMount() {
    style.use();
  }

  componentWillUnmount() {
    style.unuse();
  }

  render() {
    return (
      <Panel>
        <b className="helloworld">Hello World!</b>
      </Panel>
    );
  }
}

export default HelloWorld;
