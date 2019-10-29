import React, { Component } from 'react';

class mycomponent extends Component {
  constructor() {
    super();
    this.state = {
        name: 'Paul',
    }
  }

  render() {
    return (
      <div>
          {this.state.name}
      </div>
    )
  };
}

export default mycomponent;