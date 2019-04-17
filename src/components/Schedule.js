import React from 'react';
import "../css/Schedule.css";
import scheduler from "../js/Scheduler.js"

class TimeSlot extends React.Component {
    handleMouseDown(e) {
        let day = e.target.getAttribute("day");
        let index = e.target.getAttribute("index");
        scheduler.currentlyModifying = day;

        if (scheduler.days[day][index] === 0) {
            scheduler.mode = "markUnavailable";
        } else if (scheduler.days[day][index] === 2) {
            scheduler.mode = "markBlank";
        }

        TimeSlot.toggleTimeSlot(e);
        scheduler.mouseDragging = true;
    }

    handleMouseOver(e) {
        if (scheduler.mouseDragging) {
            TimeSlot.toggleTimeSlot(e);
        }
    }

    handleMouseUp(e) {
        scheduler.mouseDragging = false;
        console.log();
        console.log(scheduler.days);
    }

    static toggleTimeSlot(e) {
        let day = e.target.getAttribute("day");
        let index = e.target.getAttribute("index");

        if (day === scheduler.currentlyModifying) {
            if (scheduler.mode === "markUnavailable") {
                e.target.setAttribute("style", "background-color: red");
                scheduler.days[day][index] = 2;
            } else if (scheduler.mode === "markScheduled") {
                e.target.setAttribute("style", "background-color: green");
                scheduler.days[day][index] = 1;
            } else if (scheduler.mode === "markBlank") {
                e.target.setAttribute("style", "background-color: white");
                scheduler.days[day][index] = 0;
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
        const times = ["7-8", "8-9", "9-10", "10-11", "11-12", "12-13", "13-14", "14-15", "15-16", "16-17", "17-18",
            "18-19", "19-20", "20-21", "21-22"];
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
        const times = ["7:00-8:00", "8:00-9:00", "9:00-10:00", "10:00-11:00", "11:00-12:00", "12:00-1:00", "1:00-2:00",
            "2:00-3:00", "3:00-4:00", "4:00-5:00", "5:00-6:00", "6:00-7:00", "7:00-8:00", "8:00-9:00", "9:00-10:00"];
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