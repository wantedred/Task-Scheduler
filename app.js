const TaskManager = require("./TaskManager");

console.log("Starting all side tasks");

var x = 0;

TaskManager.submitTask("Example Task", function() {

    if (x > 11) {
        return TaskManager.STATE.ERROR;
    } else if (x === 10) {
        return TaskManager.STATE.OFFLINE;
    }

    x ++;
    return TaskManager.STATE.ONLINE;

}, 1, TaskManager.TimeUnits.SECONDS);

console.log("Running all side tasks");