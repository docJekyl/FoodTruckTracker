import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
  }

  render() {
    return(
      <div>hello from the FTTracker App!</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));