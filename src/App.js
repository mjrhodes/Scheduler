import React, { Component } from 'react';
import Button from './components/Button.js';
import Schedule from './components/Schedule.js';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Scheduler</h1>
        </header>
        <div className="App-body">
          <div className="top-panel">
            <Button id="clearButton" className="enabled" name="Clear Schedule"/>
          </div>

          <div className="main">
            <Schedule />
          </div>

          <div className="right-panel">
            <div className="buttons">
              <h2>Schedule:</h2>
              <Button id="workScheduleButton" className="disabled" name="Work Schedule"/>
              <br/>
              <Button id="employeeSchedulesButton" className="enabled" name="Employee Schedules"/>
              <h2 id="modeLabel">Mode:</h2>
              <Button id="setUnavailableButton" className="disabled" name="Set Unavailable"/>
              <br/>
              <Button id="setScheduledButton" className="disabled" name="Set Scheduled"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
