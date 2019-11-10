import React from 'react';
import FilterSearching from './components/FilterSearching';
import PersonForm from './components/PersonForm';
import PersonList from './components/PersonList';
import phoneService from './services/Phonebook'

//https://reactjs.org/docs/hooks-state.html //...\osa2\puhelinluettelo\db.json
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      newId: '',
      filter: ''
    };
  }

  componentDidMount() {
    phoneService.getAll().then(response => {
      this.setState({ persons: response.data })
    })
  }

  addPerson = event => {
    event.preventDefault();
    const personObj = {
      name: this.state.newName,
      number: this.state.newNumber,
      id: this.state.newId
    };

    const isOnPhonebook = this.state.persons.map(person => person.name).includes(this.state.newName);

    if (!isOnPhonebook) {
      phoneService.create(personObj).then(response => {
        this.setState({
          persons: this.state.persons.concat(personObj),
          newName: ''
        })
      });
    } else {
      if (window.confirm(`${this.state.newName} is already added to phonebook, replace the old number with a new one?`)) {
        phoneService.getAll().then(response => {
          const oldNumber = response.data.find(person => person.name === this.state.newName)

          phoneService.update(oldNumber.id, personObj).then(response => {
            this.setState({
              persons: this.state.persons.map(person => (person.id !== oldNumber.id ? person : personObj)),
              newName: '',
              newNumber: '',
              newId: ''
            })
          })
        })
      }
    }
  }

  addNewName = event => {
    this.setState({ newName: event.target.value });
  };

  addNewNumber = event => {
    this.setState({ newNumber: event.target.value });
  };

  addFilter = event => {
    this.setState({ filter: event.target.value });
  };

  removePerdonPhonebook = (id, name) => {
    const message = `Delete ${name} ?`

    if (window.confirm(message)) {
      phoneService.remove(id).then(response => {
        phoneService.getAll().then(response => {
          this.setState({ persons: response.data })
        })
      })
        .catch(error => {
          console.log('Fail to remove number')
        })
    }
  }

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
        <PersonList persons={this.state.persons} filter={this.state.filter} remove={this.removePerdonPhonebook} />
      </div>
    );
  }
}

export default App;