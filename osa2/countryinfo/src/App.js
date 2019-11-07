import React, { Component } from 'react';
import axios from 'axios';
import FilterCountry from './components/FilterCountry';
import CountryDetails from './components/CountryDetails';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      filter: ''
    }
  }

  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      this.setState({ data: response.data });
    })
  }

  addFilter = event => {
    this.setState({ filter: event.target.value })
  };

  render() {
    return (
      <div>
        find countries : <FilterCountry filter={this.state.filter} addFilter={this.addFilter} />
        <CountryDetails data={this.state.data} filter={this.state.filter} />
      </div>
    );
  }
}

export default App;
