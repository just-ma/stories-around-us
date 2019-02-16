import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Person.css';

class Person extends Component {
  render() {
    return (
      <div className='Person'>
        <Link to={this.props.page}>
          {this.props.name}
        </Link>
      </div>
    );
  }
}

export default Person;