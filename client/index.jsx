import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Button, Row, Col } from 'react-bootstrap';
import Header from './components/header.jsx';
import Customer from './components/customer/Customer.jsx';
import Vendor from './components/vendor/Vendor.jsx';
import UserSelect from './components/userSelection/UserSelection.jsx';


// handles api calls, manages which components are rendered to the screen.

// in dev, manually render, then build conditional render functionality.
var position = [
  {
    coords: GeolocationCoordinates,
    accuracy: 1952,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: 35.478426,
    longitude: -97.518800,
    speed: null
  },
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: 'home',
      user: null,
      userLocation: null,
      foodTruckData: position
    }
    this.location = this.location.bind(this);
    this.setNavState = this.setNavState.bind(this);
    this.setUser = this.setUser.bind(this);
    this.getLocation = this.getLocation.bind(this);
  }


  setNavState(name) {
    this.setState({nav: name});
  }

  setUser(e) {
    e.preventDefault();
    this.setState({user: e.target.name})
    console.log(this.state.user)
  }

  location() {
    if ('geolocation' in navigator) {
      console.log('geolocator found')
      var loc = getCurrentPosition();
      console.log(loc);
    } else {
      console.log('geolocation not available')
    }
  }

  getLocation() {
    if(navigator.geolocation) {
      console.log('location accessible')
      navigator.geolocation.getCurrentPosition(position => {console.log(position)})
    }
  }


  render() {
    return(
      <div>
        <Container className="mainContainer">
        <Header fn={this.setNavState} className="header"/>
          {/* <UserSelect setUser={this.setUser} /> */}
          <Customer ftData ={this.state.foodTruckData}/>
          <button onClick={this.getLocation}>location</button>

        </Container>

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));



