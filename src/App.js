import React, { Component } from 'react';
import Button from './components/Button.js';
import Schedule from './components/Schedule.js';
import dropDownArrow from "./dropDownArrow.png";
import './css/App.css';
import Scheduler from "./js/Scheduler";
import Employee from "./js/Employee";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleAddEmployee = this.handleAddEmployee.bind(this);
    this.handleRemoveEmployee = this.handleRemoveEmployee.bind(this);
  }

  handleAddEmployee(e) {
    let name = prompt("Employee's name?: ", "Unnamed");
    Scheduler.selectedIndex = Scheduler.employees.length;
    Scheduler.employees.push(new Employee(name));
    document.getElementById("dropdown").innerHTML = name;
    Scheduler.loadEmployeeSchedule();
    this.setState({});
  }

  handleRemoveEmployee(e) {
    Scheduler.employees.splice(Scheduler.selectedIndex,1);
    if (Scheduler.employees.length > 0) {
      Scheduler.selectedIndex = 0;
      document.getElementById("dropdown").innerHTML = Scheduler.employees[0].name;
      Scheduler.loadEmployeeSchedule();
    } else {
      Scheduler.selectedIndex = -1;
      document.getElementById("dropdown").innerHTML = "";
      Button.pressClear(e);
    }
    this.setState({});
  }

  handleDropMenuClick(e) {
    document.getElementById("dropdown").innerHTML = e.target.getAttribute("name");
    Scheduler.selectedIndex = e.target.getAttribute("index");
    Scheduler.loadEmployeeSchedule();
  }

  handleClickButton(e) {
    if (e.target.getAttribute("class") === "enabled") {
      switch (e.target.getAttribute("name")) {
        case "Work Schedule":
          Button.pressWorkSchedule(e);
          break;
        case "Employee Schedules":
          Button.pressEmployeeSchedules(e);
          break;
        case "Set Unavailable":
          Button.pressSetUnavailable(e);
          break;
        case "Set Scheduled":
          Button.pressSetScheduled(e);
          break;
        case "Set Disabled":
          Button.pressSetDisabled(e);
          break;
        case "Clear Schedule":
          Button.pressClear(e);
          break;
        default:
          break;
      }
    }
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
              <button id="dropdown" className="dropbtn"/>
              <img src={dropDownArrow} alt=""/>
              <div className="dropdown-content">
                <ul id="dropmenu">
                  {employees}
                </ul>
              </div>
            </div>
            <Button id="clearButton" className="disabled" name="Clear Schedule" handler={this.handleClickButton}/>
          </div>

          <div className="main">
            <Schedule />
          </div>

          <div className="right-panel">
            <div className="buttons">
              <h2>Schedule:</h2>
              <Button id="workScheduleButton" className="disabled" name="Work Schedule"
                      handler={this.handleClickButton}/>
              <br/>
              <Button id="employeeSchedulesButton" className="enabled" name="Employee Schedules"
                      handler={this.handleClickButton}/>
              <div id="modeDiv">
                <h2 id="modeLabel">Mode:</h2>
                <Button id="setUnavailableButton" className="disabled" name="Set Unavailable"
                        handler={this.handleClickButton}/>
                <br/>
                <Button id="setScheduledButton" className="disabled" name="Set Scheduled"
                        handler={this.handleClickButton}/>
                <br/>
                <Button id="setDisabledButton" className="disabled" name="Set Disabled"
                        handler={this.handleClickButton}/>
              </div>
              <div id="staffDiv">
                <h2 id="StaffLabel">Staff:</h2>
                <Button id="addEmployeeButton" className="enabled" name="Add Employee"
                        handler={this.handleAddEmployee}/>
                <br/>
                <Button id="removeEmployeeButton" className="enabled" name="Remove Employee"
                        handler={this.handleRemoveEmployee}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
