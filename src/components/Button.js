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
        // document.getElementById("setDisabledButton").setAttribute("class", "disabled");
        document.getElementById("clearButton").setAttribute("class", "disabled");
        document.getElementById("topPanel").setAttribute("style", "visibility: hidden");
        document.getElementById("modeDiv").setAttribute("style", "visibility: hidden");
        document.getElementById("staffDiv").setAttribute("style", "visibility: hidden");

        console.log(Scheduler.employees);

        Scheduler.currentSchedule = "work";
        Scheduler.selectedIndex = -1;
        let elements = document.getElementsByClassName("timeSlot");
        for (let element of elements) {
            element.setAttribute("style","background-color: white");
        }
        Scheduler.consolidateScheduledBlocks();

        console.log(Scheduler.employees);
    }

    static pressEmployeeSchedules(e) {
        e.target.setAttribute("class", "disabled");
        document.getElementById("workScheduleButton").setAttribute("class", "enabled");
        document.getElementById("setScheduledButton").setAttribute("class", "enabled");
        // document.getElementById("setDisabledButton").setAttribute("class", "enabled");
        document.getElementById("clearButton").setAttribute("class", "enabled");
        document.getElementById("topPanel").setAttribute("style", "visibility: visible");
        document.getElementById("modeDiv").setAttribute("style", "visibility: visible");
        document.getElementById("staffDiv").setAttribute("style", "visibility: visible");

        console.log(Scheduler.employees);

        Scheduler.mode = "markUnavailable";
        Scheduler.currentSchedule = "employees";
        if (Scheduler.employees.length > 0) {
            Scheduler.selectedIndex = 0
            document.getElementById("dropdown").innerHTML = Scheduler.employees[0].name;
            Scheduler.loadEmployeeSchedule();
        }

        console.log(Scheduler.employees);
    }

    static pressSetUnavailable(e) {
        e.target.setAttribute("class", "disabled");
        document.getElementById("setScheduledButton").setAttribute("class", "enabled");
        // document.getElementById("setDisabledButton").setAttribute("class", "enabled");
        Scheduler.mode = "markUnavailable";
    }

    static pressSetScheduled(e) {
        e.target.setAttribute("class", "disabled");
        document.getElementById("setUnavailableButton").setAttribute("class", "enabled");
        // document.getElementById("setDisabledButton").setAttribute("class", "enabled");
        Scheduler.mode = "markScheduled";
    }

    static pressSetDisabled(e) {
        e.target.setAttribute("class", "disabled");
        document.getElementById("setUnavailableButton").setAttribute("class", "enabled");
        document.getElementById("setScheduledButton").setAttribute("class", "enabled");
        Scheduler.mode = "markDisabled";
    }

    static pressClear(e) {
        let elements = document.getElementsByClassName("timeSlot");
        for (let element of elements) {
            element.setAttribute("style","background-color: white");
        }

        for (let day in Scheduler.days) {
            for (let i = 0; i < Scheduler.days[day].length; i++) {
                Scheduler.days[day][i] = 0;

                if (Scheduler.selectedIndex !== -1) {
                    Scheduler.employees[Scheduler.selectedIndex].schedule[day][i] = 0;
                }
            }
        }
    }

    render() {
        return (
            <button id={this.props.id} className={this.props.className} name={this.props.name}
                    onClick={this.props.handler}>{this.props.name}</button>
        );
    }
}

export default Button;