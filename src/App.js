import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState({ searchField });
  }

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input type="search" placeholder="search monsters" className='search-box' onChange={onSearchChange}/>
        <CardList>
          {filteredMonsters.map(monster => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))
          }
        </CardList>
      </div>
    );
  }
}

export default App;
