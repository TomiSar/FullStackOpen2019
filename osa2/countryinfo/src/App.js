import React, { Component } from 'react';
import axios from 'axios';
import CountryFiltering from './components/CountryFiltering';
import CountryListing from './components/CountryListing';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filter: ''
    };
  }

  //Sovellus hakee tiedot endpointista all --> https://restcountries.eu/rest/v2/all
  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      console.log('response', response);
      this.setState({ data: response.data });
    });
  }

  addFilter = event => {
    this.setState({ filter: event.target.value });
  };

  showDetails = country => {
    this.setState({ country })
  }

  render() {
    return (
      <div>
        find countries <CountryFiltering output={this.state.filter} input={this.addFilter} />
        <CountryListing data={this.state.data} filter={this.state.filter} showDetails={this.showDetails} country={this.state.country} />
      </div>
    );
  }
}

export default App;