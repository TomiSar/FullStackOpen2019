import React from 'react';
import axios from 'axios';
import FilterSearching from './components/FilterSearching';
import PersonForm from './components/PersonForm';
import PersonList from './components/PersonList';

//https://reactjs.org/docs/hooks-state.html
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //...\osa2\puhelinluettelo\db.json
      persons: [],
      newName: '',
      newNumber: '',
      filter: ''
    };
  }

  componentDidMount() {
    console.log('didmount!');
    axios.get('http://localhost:3001/persons/').then(response => {
      this.setState({ persons: response.data });
    });
  }

  addPerson = event => {
    event.preventDefault()
    const personObj = {
      name: this.state.newName,
      number: this.state.newNumber
    }

    const isOnPhonebook = this.state.persons.map(person => person.name).includes(this.state.newName);
    if (!isOnPhonebook) {
      const persons = this.state.persons.concat(personObj);
      this.setState({
        persons,
        newName: ''
      });
    } else {
      this.setState({
        newName: '',
        newNumber: '',
      })
      alert(`${this.state.newName} is already added to phonebook`)
    }
  };

  addNewName = event => {
    this.setState({ newName: event.target.value });
  };

  addNewNumber = event => {
    this.setState({ newNumber: event.target.value });
  };

  addFilter = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <FilterSearching filter={this.state.filter} addFiltering={this.addFilter} />
        <PersonForm
          addPerson={this.addPerson}
          newName={this.state.newName}
          addNewName={this.addNewName}
          newNumber={this.state.NewNumber}
          addNewNumber={this.addNewNumber}
        />
        <h2>Numbers</h2>
        <PersonList persons={this.state.persons} filter={this.state.filter} />
      </div>
    );
  }
}

export default App;