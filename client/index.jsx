import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Button, Row, Col } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
    this.location = this.location.bind(this);
  }

  location() {
    // if ('geolocation' in navigator) {
    //   console.log('geolocator found')
    //   var loc = getCurrentPosition();
    //   console.log(loc);
    // } else {
    //   console.log('geolocation not available')
    // }
  }


  render() {
    return(
      <div>
        <h1>Hello from the FTTracker App!</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));