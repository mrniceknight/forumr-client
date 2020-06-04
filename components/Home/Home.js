import React, { Component } from 'react';
import { Redirect } from 'react-router';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  /**
   * validates whether the user is allowed to visit the path
   */
  isRouteValid() {
    if (this.props.currentUser) {
      return false;
    }
    return true;
  }
  render() {
    if (!this.isRouteValid()) {
      return <Redirect to="/"></Redirect>
    }
    return (
      <div>Hello World</div>
    }
    );
}
}
