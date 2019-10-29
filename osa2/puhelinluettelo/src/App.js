import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [{ name: 'Arto Hellas', number: '040-123456' }, { name: 'Ada Lovelace', number: '39-44-5323523' },
      { name: 'Dan Abramov', number: '12-43-234345' }, { name: 'Mary Poppendieck', number: '39-23-6423122' }],
      newName: '',
      newNumber: ''
    };
  }

  addPerson = event => {
    event.preventDefault()
    const personObj = {
      name: this.state.newName,
      number: this.state.newNumber
    }

    const isOnPhonebook = this.state.persons.map(person => person.name).includes(this.state.newName)

    if (isOnPhonebook) {
      this.setState({
        newName: '',
        newNumber: ''
      })
      alert(`${this.state.newName} is already added to phonebook`) //equivalent --> alert(this.state.newName + ' is already added to phonebook')
    } else {
      const persons = this.state.persons.concat(personObj)
      this.setState({
        persons,
        newName: '',
        newNumber: ''
      })
    }
  }

  addNewPerson = event => {
    this.setState({ newName: event.target.value })
  }

  addNewNumber = event => {
    this.setState({ newNumber: event.target.value })
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.addPerson}>
          <div>
            name: <input value={this.state.newName} onChange={this.addNewPerson} />
          </div>
          <div>
            number: <input value={this.state.newNumber} onChange={this.addNewNumber} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        <div> {this.state.persons.map(person =>
          <p key={person.name}> {person.name} {person.number} </p>)}
        </div>
      </div>
    )
  }
}

export default App