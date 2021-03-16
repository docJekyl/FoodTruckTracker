import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Button, Row, Col } from 'react-bootstrap';
import Header from './components/header.jsx'
import Customer from './components/customer/customer.jsx';
import Vendor from './components/vendor/Vendor.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: '',
      user: null,
      userLocation: null,
      foodTruckData: null
    }
    this.location = this.location.bind(this);
    this.setNavState = this.setNavState.bind(this);
  }

  setNavState(name) {
    this.setState({nav: name});
    console.log(this.state.nav)
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



  render() {
    return(
      <div>
        <Header fn={this.setNavState}/>
        <h1>Hello from the FTTracker App!</h1>
        <Container>
          <Row>
            <Col>
              <Button>I'm a Vendor!</Button>
            </Col>
            <Col>
              <Button>I'm Hungry!</Button>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));