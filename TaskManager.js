const task = require("./Task");

/**
 * Submit Task - submits a task to run in the background
 * @param {name} name - The name the task will specify by 
 * @param {function} func - A method that you specify the task will run can also include name as param for task name
 * @param {delay} delay - The delay at which you want the task to run 
 * @param {timeUnit} timeUnit - The units of time the task will run 
 */
function submitTask(name, func, delay, timeUnit = undefined) {
    let interval = setInterval(() => {
        var state = func(name);

        if (state === task.flags.OFFLINE) {
            console.log('task: ' + name + ' has been stopped.');
            clearInterval(interval);
        } else if (state === task.flags.ERROR) {
            console.log('task: ' + name + ' has ran into an error.');
            clearInterval(interval);
        }
    }, new task(delay, timeUnit).returnTime());
}

module.exports.submitTask = submitTask;
module.exports.TimeUnits = task.times;
module.exports.STATE = task.flags;