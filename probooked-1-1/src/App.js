import React, { Component } from 'react';
import NavBar from './components/NavBar';
import SearchForm from './components/SearchForm';
import TextField from '@material-ui/core/TextField';
import './App.css';
/*import Radios from './Radios.js';
import Select from './Select.js';*/
import mapboxgl from 'mapbox-gl';
//import Text from './Text.js';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2hvc3RiZWFyIiwiYSI6ImNqcGJob2lnYjJ3NWIzc29iamtqM255a3EifQ.Rx5PqIIlZX47jOBgLjoD0A';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9'
});

/*const cityChoices = [
  'NYC',
  'ATL',
  'LA',
];

const cityRoutes = [
  'Bus',
  'Subway',
  'Trolley',
];*/
const PLU_CODE = /^\d\d\d\d$/; // four digits
const DESTINATION = /^\d+$/;
const computeSubmitEnabled = ({code, destination}) => PLU_CODE.test(code) && DESTINATION.test(destination);
const purchaseInital = {
  code: '',
  local: false,
  organic: false,
  destination: '',

}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitEnabled: false,
      destination: '',
      destinationResult: '',
      code: '',
      codeFeedback: '',
      cityRoute: '',
      local: false,
      organic: false,
      purchase: {...purchaseInital}
    };
  }
  onChangeDestination = event => {
    const {value} = event.target;
    const destination = value.trim(); // remove leading and trailing spaces
    const destinationResult = destination.length === 0 || DESTINATION.test(destination)
      ? ''
      : 'please type at least one digit'
    console.log(value, destinationResult);
    this.setState(({code}) => ({
      isSubmitEnabled: computeSubmitEnabled({code, destination}),
      destination,
      destinationResult
    }));
  }
  onChangeCity = event => {
    const {name, value} = event.target;
    this.setState(state => ({
      [name]: value
    }));
  }
  onChangeOption = event => {
    const {name, value} = event.target;
    this.setState(state => ({
      [name]: value
    }));
  }
  onChangeCheckbox = event => {
    const {name} = event.target;
    this.setState(state => ({
      [name]: !state[name]
    }));
  }
  onSubmit = event => {
    event.preventDefault();
    const {code, destination} = this.state;
    console.log(JSON.stringify({code, destination}, null, 2));
    this.setState({
      code: '',
      quantity: '',
    })
  }
  render() {
    const {isSubmitEnabled, destination, destinationResult, cityRoute, cityChoice} = this.state;
    return (
      <div>
      <NavBar />
      <form name="react3" onSubmit={this.onSubmit}>

      <SearchForm />

      
        <button type="submit" disabled={!isSubmitEnabled}>Submit</button>
      </form>
      </div>
    );
  }
}


export default App;
