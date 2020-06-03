import React, { Component } from 'react';
import { TextField, Container } from '@material-ui/core';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ username: e.target.value });
  }

  render() {
    const { username } = this.state;
    return (
      <Container>
        <TextField placeholder="Username" value={username} onChange={this.handleChange} />
        <pre>
          {JSON.stringify(this.state)}
        </pre>
      </Container>
    );
  }
}
export default App;
