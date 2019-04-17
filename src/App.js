import React, { Component } from 'react';
import Button from './components/Button.js';
import Schedule from './components/Schedule.js';
import dropDownArrow from "./dropDownArrow.png";
import './css/App.css';
import Scheduler from "./js/Scheduler";

class App extends Component {
  handleDropMenuClick(e) {
    document.getElementById("dropdown").innerHTML = e.target.getAttribute("name");
    Scheduler.selectedIndex = e.target.getAttribute("index");
    console.log(Scheduler.selectedIndex);
  }

  render() {
    let employees = Scheduler.employees.map((employee, i) =>
        <li key={"employee_"+i} name={employee.name} index={i} onClick={this.handleDropMenuClick}>{employee.name}</li>);

    return (
      <div className="App">
        <header className="App-header">
          <h1>Scheduler</h1>
        </header>
        <div className="App-body">
          <div id="topPanel" className="top-panel">
            <div className="dropdown">
              <h2>Schedule for:</h2>
              <button id="dropdown" className="dropbtn"></button>
              <img src={dropDownArrow} />
              <div className="dropdown-content">
                <ul>
                  {employees}
                </ul>
              </div>
            </div>
            <Button id="clearButton" className="disabled" name="Clear Schedule"/>
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
              <div id="modeDiv">
                <h2 id="modeLabel">Mode:</h2>
                <Button id="setUnavailableButton" className="disabled" name="Set Unavailable"/>
                <br/>
                <Button id="setScheduledButton" className="disabled" name="Set Scheduled"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
