import { Component } from 'react';

import CardList from './components/card-list/card-list.component';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    // local state
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  onSearchChange = e => {
    const searchField = e.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    console.log('render');

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter(monster => monster.name.toLocaleLowerCase().includes(searchField));

    return (
      <div className="App">
        <input className="search-box" type="search" placeholder="search monsters" onChange={onSearchChange} />
        {/* {filteredMonsters.map(monster => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))} */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
