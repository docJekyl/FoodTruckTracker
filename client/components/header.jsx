import React, { Component } from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test:''
    }
    this.set = this.set.bind(this);
  }
  set(e) {
    e.preventDefault()
    this.props.fn(e.target.name)
  }

  render() {
    return(
      <div className="headerDiv">
        <nav className="navBar">
          <a className="navLink" name="Home" onClick={this.set}>Home</a>
          <a className="navLink"name="About" onClick={this.set}>About</a>
          <a className="navLink"name="Contact Us" onClick={this.set}>Contact Us</a>
        </nav>
      </div>
    );
  }
}

export default Header;