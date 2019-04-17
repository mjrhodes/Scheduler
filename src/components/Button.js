import React from "react";
import "../css/Button.css";
import Scheduler from "../js/Scheduler";

class Button extends React.Component {
    static pressWorkSchedule(e) {
        e.target.setAttribute("class", "disabled");
        document.getElementById("employeeSchedulesButton")
            .setAttribute("class", "enabled");
        document.getElementById("setUnavailableButton").setAttribute("class", "disabled");
        document.getElementById("setScheduledButton").setAttribute("class", "disabled");
        document.getElementById("clearButton").setAttribute("class", "disabled");
        document.getElementById("topPanel").setAttribute("style", "visibility: hidden");
        document.getElementById("modeDiv").setAttribute("style", "visibility: hidden");
        Scheduler.currentSchedule = "work";
    }

    static pressEmployeeSchedules(e) {
        e.target.setAttribute("class", "disabled");
        document.getElementById("workScheduleButton").setAttribute("class", "enabled");
        document.getElementById("setScheduledButton").setAttribute("class", "enabled");
        document.getElementById("clearButton").setAttribute("class", "enabled");
        document.getElementById("topPanel").setAttribute("style", "visibility: visible");
        document.getElementById("modeDiv").setAttribute("style", "visibility: visible");
        Scheduler.mode = "markUnavailable";
        Scheduler.currentSchedule = "employees";
    }

    static pressSetUnavailable(e) {
        e.target.setAttribute("class", "disabled");
        document.getElementById("setScheduledButton").setAttribute("class", "enabled");
        Scheduler.mode = "markUnavailable";
    }

    static pressSetScheduled(e) {
        e.target.setAttribute("class", "disabled");
        document.getElementById("setUnavailableButton").setAttribute("class", "enabled");
        Scheduler.mode = "markScheduled";
    }

    static pressClear(e) {
        let elements = document.getElementsByClassName("timeSlot");
        for (let element of elements) {
            element.setAttribute("style","background-color: white");
        }

        //TODO: change to clear employee's schedule as well
        for (let day in Scheduler.days) {
            for (let i = 0; i < Scheduler.days[day].length; i++) {
                Scheduler.days[day][i] = 0;
            }
        }
    }

    handleClick(e) {
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
                case "Clear Schedule":
                    Button.pressClear(e);
                    break;
            }
        }
    }

    render() {
        return (
            <button id={this.props.id} className={this.props.className} name={this.props.name}
                    onClick={this.handleClick}>{this.props.name}</button>
        );
    }
}

export default Button;