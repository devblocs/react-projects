import React, {Component, Fragment} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import CountryCard from './components/CountryCard';
import SearchCard from './components/SearchCard';
import DashboardCard from './components/DashboardCard';

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      allStats: [],
      countries: [],
      filterCountries: [],
      searchCountries: ""
    }
  }

  componentDidMount(){
    axios.all([
      axios.get('https://disease.sh/v2/all'),
      axios.get('https://disease.sh/v2/countries')
    ])
    .then((response) => {
      const [allData, countries] = response;

      this.setState({
          allStats: allData.data,
          countries: countries.data
      });

    })
    .catch(function(error){
      console.log(error);
    }.bind(this))
  }

  searchCountry = (value) => {
    const filterCountry = this.state.countries.filter(item => {
      return item.country.includes(value.charAt(0).toUpperCase() + value.slice(1));
    });

    this.setState({
      filterCountries : filterCountry,
      searchCountries: value
    })
  }

  renderCountries(){
    const {countries, filterCountries} = this.state;
    const countriesData = filterCountries.length === 0 ? countries : filterCountries;
    
    const numberOfRows = Math.ceil(countriesData.length/4);

    const countryElement = Array(numberOfRows).fill().map((_, rowIndex) => (

        <Row key={rowIndex} className="mt-5">
        {
          countriesData.slice(rowIndex * 4, (rowIndex *4) + 4).map(country => {
              return (
                <Col sm="3" md="3" key={country.countryInfo._id == null ? country.country.split(" ").join("_") : country.countryInfo._id}>
                  <CountryCard country={country} />
                </Col>
              );
          })
        }
      </Row>
    ));

    return countryElement;
  }

  render(){  
    return (
      <Fragment>
        <Container fluid={true} className="mt-5">
          <Row>
            <Col md={12}>
              <h1 className="text-center">COVID-19 Tracker</h1>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col md={12}>
              <DashboardCard allStats={this.state.allStats} />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={12}>
              <SearchCard onSearchCountry={this.searchCountry} countryName={this.state.searchCountries} />
            </Col>
          </Row>
          {this.renderCountries()}
        </Container>
      </Fragment>
    );
  }
}

export default App;
