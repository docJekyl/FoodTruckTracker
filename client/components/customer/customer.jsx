import React from 'react';
import Map from './Map/Map.jsx';

class Customer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return(
      <div>Hello from Customer
        <Map ftData={this.props.ftData}/>
      </div>

    )
  }
}

export default Customer;