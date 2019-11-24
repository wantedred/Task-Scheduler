This is the Task Schedular project inspired by Runescape Private Server design for node.js
It's very easy to start running tasks in the background of your node application

Here's how to run the task
First make sure to add this at the top

```
const TaskManager = require('TaskManager');
```

Then anywhere in your node application you can submit a task by doing this

```
TaskManager.submitTask("Task Name", function() {
    doSomething();

    return TaskManager.STATE.ONLINE;
}, 1, TaskManager.TimeUnits.SECONDS);
```

If you ever need the name of the task inside your method you can specify it by doing this

```
TaskManager.submitTask("Task Name", function(name) {
    console.log('Task Name: ' + name);

    return TaskManager.STATE.ONLINE;
}, 1, TaskManager.TimeUnits.SECONDS);
```

There's five different mearsurements of time you can specify
```
TaskManager.TimeUnits.MILLISECONDS
TaskManager.TimeUnits.SECONDS
TaskManager.TimeUnits.MINUTES
TaskManager.TimeUnits.HOURS
TaskManager.TimeUnits.DAYS
```

Also there's three different States the task can be in
```
TaskManager.STATE.ONLINE - keeps running
TaskManager.STATE.OFFLINE - stops running
TaskManager.STATE.ERROR - stops the task and says which task ran into an error
```