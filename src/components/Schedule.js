import React from 'react';
import "../css/Schedule.css";
import Scheduler from "../js/Scheduler.js";

class TimeSlot extends React.Component {
    handleMouseDown(e) {
        if (Scheduler.currentSchedule === "employees") {
            let day = e.target.getAttribute("day");
            let index = e.target.getAttribute("index");
            Scheduler.currentlyModifying = day;

            if (Scheduler.days[day][index] === 1 && Scheduler.mode === "markScheduled") {
                Scheduler.mode = "markBlank";
            } else if (Scheduler.days[day][index] === 2 && Scheduler.mode === "markUnavailable") {
                Scheduler.mode = "markBlank";
            }

            TimeSlot.toggleTimeSlot(e);
            Scheduler.mouseDragging = true;
        }
    }

    handleMouseOver(e) {
        if (Scheduler.mouseDragging) {
            TimeSlot.toggleTimeSlot(e);
        }
    }

    handleMouseUp(e) {
        Scheduler.mouseDragging = false;
        console.log(Scheduler.days);
    }

    static toggleTimeSlot(e) {
        let day = e.target.getAttribute("day");
        let index = e.target.getAttribute("index");

        if (day === Scheduler.currentlyModifying) {
            if (Scheduler.mode === "markUnavailable") {
                e.target.setAttribute("style", "background-color: red");
                Scheduler.days[day][index] = 2;
            } else if (Scheduler.mode === "markScheduled") {
                e.target.setAttribute("style", "background-color: green");
                Scheduler.days[day][index] = 1;
            } else if (Scheduler.mode === "markBlank") {
                e.target.setAttribute("style", "background-color: white");
                Scheduler.days[day][index] = 0;
            }
        }
    }

    render() {
        return (
            <div day={this.props.day} index={this.props.index} className="timeSlot" onMouseDown={this.handleMouseDown}
                 onMouseOver={this.handleMouseOver} onMouseUp={this.handleMouseUp}/>
        );
    }
}

class Day extends React.Component {
    render() {
        const times = ["6-630", "630-7", "7-730", "730-8", "8-830", "830-9", "9-930", "930-10", "10-1030", "1030-11",
            "11-1130", "1130-12", "12-1230", "1230-13", "13-1330", "1330-14", "14-1430", "1430-15", "15-1530",
            "1530-16", "16-1630", "1630-17", "17-1730", "1730-18", "18-1830", "1830-19", "19-1930", "1930-20",
            "20-2030", "2030-21", "21-2130", "2130, 22"];
        const timeSlots = times.map((interval, i) => <li key={this.props.day+i}><TimeSlot day={this.props.day}
                                                                                          index={i} /></li>);

        return (
            <div className='day'>
                <h4>{this.props.day}</h4>
                <ul>
                    {timeSlots}
                </ul>
            </div>
        );
    }
}

class Schedule extends React.Component {
    render() {
        const times = ["6:00-6:30", "6:30-7:00", "7:00-7:30", "7:30-8:00", "8:00-8:30", "8:30-9:00", "9:00-9:30",
            "9:30-10:00", "10:00-10:30", "10:30-11:00", "11:00-11:30", "11:30-12:00", "12:00-12:30", "12:30-1:00",
            "1:00-1:30", "1:30-2:00", "2:00-2:30", "2:30-3:00", "3:00-3:30", "3:30-4:00", "4:00-4:30", "4:30-5:00",
            "5:00-5:30", "5:30-6:00", "6:00-6:30", "6:30-7:00", "7:00-7:30", "7:30-8:00", "8:00-8:30", "8:30-9:00",
            "9:00-9:30", "9:30-10:00"];
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        const labels = times.map((label, i) => <li className="label" key={"label_"+i}><h3>{label}</h3></li>);

        return (
            <div className="scheduler">
                <div className='day'>
                    <h4 className="corner">""</h4>
                    <ul>
                        {labels}
                    </ul>
                </div>
                <Day day={'Monday'}/>
                <Day day={'Tuesday'}/>
                <Day day={'Wednesday'}/>
                <Day day={'Thursday'}/>
                <Day day={'Friday'}/>
                <Day day={'Saturday'}/>
                <Day day={'Sunday'}/>
            </div>
        );
    }
}

export default Schedule;