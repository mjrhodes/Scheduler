class Scheduler {
    static test = "Hello World";

    constructor() {
        this.mouseDragging = false;
        this.currentlyModifying = "";
        this.message = "Hello World";
        this.days = {   //0 = blank, 1 = scheduled, 2 = unavailable
            "Monday": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            "Tuesday": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            "Wednesday": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            "Thursday": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            "Friday": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            "Saturday": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            "Sunday": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        };
        this.mode = "markUnavailable";
    }

}

let scheduler = new Scheduler();

export default scheduler;