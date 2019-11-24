This is the Task Schedular project inspired by Runescape Private Server design for node.js
It's very easy to start running tasks in the background of your node application

Here's how to run the task
First make sure to add this at the top

```javascript
const TaskManager = require('task-scheduler-background');
```

Then anywhere in your node application you can submit a task by doing this

```javascript
TaskManager.submitTask("Example Task", function() {

    if (x > 11) {
        return TaskManager.STATE.ERROR;
    } else if (x === 10) {
        return TaskManager.STATE.OFFLINE;
    }

    x ++;
    return TaskManager.STATE.ONLINE;

}, 1, TaskManager.TimeUnits.SECONDS);
```

If you ever need the name of the task inside your method you can specify it by doing this

```javascript
TaskManager.submitTask("Example Task", function() {

    if (x > 11) {
        return TaskManager.STATE.ERROR;
    } else if (x === 10) {
        return TaskManager.STATE.OFFLINE;
    }

    x ++;
    return TaskManager.STATE.ONLINE;

}, 1, TaskManager.TimeUnits.SECONDS);
```

There's five different mearsurements of time you can specify
```javascript
TaskManager.TimeUnits.MILLISECONDS
TaskManager.TimeUnits.SECONDS
TaskManager.TimeUnits.MINUTES
TaskManager.TimeUnits.HOURS
TaskManager.TimeUnits.DAYS
```

Also there's three different States the task can be in
```javascript
TaskManager.STATE.ONLINE - keeps running
TaskManager.STATE.OFFLINE - stops running
TaskManager.STATE.ERROR - stops the task and says which task ran into an error
```