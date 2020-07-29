import React, {Component} from 'react';
import { SearchBox } from './components/Searchbox/SearchBox';
import { CardList } from './components/CardList/CardList';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: ''
    }

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users }))
  }

  searchChange = (event) => {
    this.setState({searchField: event.target.value})
    
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonster = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return(
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox searchChange={this.searchChange} placeholder={"search monsters"}/>
        <CardList monsters={filteredMonster} />
      </div>
    )
  }
}

export default App;
