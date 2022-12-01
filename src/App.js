import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    // local state
    this.state = {
      name: { firstName: 'Jeff', lastName: 'Grasso' },
      company: 'not actually at Columbia',
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}, I go to the university of {this.state.company}
          </p>
          <button
            onClick={() => {
              this.setState({ name: { firstName: 'Jeffrey', lastName: 'Grasso' } });
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
