import React, { Component } from 'react';
import './LandingPage.css';
import Person from '../../Components/Person/Person';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="Logo">
          stories around us
        </div>
        <div className="Person-container">
          <Person name="Brandon" page='/brandon'/>
          <Person name="Melissa" page='/melissa'/>
          <Person name="Zachary" page='/zachary'/>
        </div>
      </div>
    );
  }
}

export default LandingPage;