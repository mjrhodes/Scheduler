class Scheduler {
    static mouseDragging = false;
    static currentlyModifying = "";
    static days = {   //0 = blank, 1 = scheduled, 2 = unavailable
        "Monday": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        "Tuesday": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        "Wednesday": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        "Thursday": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        "Friday": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        "Saturday": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        "Sunday": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    };
    static mode = "markUnavailable";
    static currentSchedule = "work";
    static employees = [];
    static selectedIndex = -1;

    static loadEmployeeSchedule() {
        if (Scheduler.selectedIndex < Scheduler.employees.length && Scheduler.selectedIndex !== -1) {

            Scheduler.days = Scheduler.employees[Scheduler.selectedIndex].schedule;

            let elements = document.getElementsByClassName("timeSlot");
            for (let element of elements) {
                let day = element.getAttribute("day");
                let index = element.getAttribute("index");

                if (Scheduler.days[day][index] === 0) {
                    element.setAttribute("style", "background-color: white");
                } else if (Scheduler.days[day][index] === 1) {
                    element.setAttribute("style", "background-color: green");
                } else if (Scheduler.days[day][index] === 2) {
                    element.setAttribute("style", "background-color: red");
                }
            }
        }
    }

    static consolidateScheduledBlocks() {
        let elements = document.getElementsByClassName("timeSlot");
        for (let element of elements) {
            let day = element.getAttribute("day");
            let index = element.getAttribute("index");

            for (let i = 0; i < Scheduler.employees.length; i++) {
                if (Scheduler.employees[i].schedule[day][index] === 1) {
                    element.setAttribute("style", "background-color: green");
                }
            }
        }
    }
}

export default Scheduler;