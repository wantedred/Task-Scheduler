const ConvertTime = require("./convert-timing");

// import {sayHi} from "./convert-timing.js";

console.log("Starting all side cron jobs");

function test(test, delay, timeUnit = undefined) {
    setInterval(() => {
        test();
    }, new ConvertTime(delay, timeUnit).returnTime());
}

var x = 0;

test(function() {
    if (x == 10) {
        clearInterval(this);
    }
    x ++;
    console.log("Value of X: " + x);
}, 1, "seconds");


console.log("Running all side cron jobs");