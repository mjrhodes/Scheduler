import React from "react";
import "../css/Button.css";
import scheduler from "../js/Scheduler";

class Button extends React.Component {
    static pressWorkSchedule(e) {
        e.target.setAttribute("class", "disabled");
        document.getElementById("employeeSchedulesButton")
            .setAttribute("class", "enabled");
        document.getElementById("setUnavailableButton").setAttribute("class", "disabled");
        document.getElementById("setScheduledButton").setAttribute("class", "disabled");
    }

    static pressEmployeeSchedules(e) {
        e.target.setAttribute("class", "disabled");
        document.getElementById("workScheduleButton").setAttribute("class", "enabled");
        document.getElementById("setScheduledButton").setAttribute("class", "enabled");
        scheduler.mode = "markUnavailable";
    }

    static pressSetUnavailable(e) {
        e.target.setAttribute("class", "disabled");
        document.getElementById("setScheduledButton").setAttribute("class", "enabled");
        scheduler.mode = "markUnavailable";
    }

    static pressSetScheduled(e) {
        e.target.setAttribute("class", "disabled");
        document.getElementById("setUnavailableButton").setAttribute("class", "enabled");
        scheduler.mode = "markScheduled";
        alert(scheduler.mode);
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