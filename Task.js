class Task {

    /**
     * This is the constructor to pass values to convert the timing to times such as:
     * Milliseconds, Seconds, Minutes, or Days
     * @param {Time} time - The amount of time to pass before firing the function
     * @param {Conversion} conversion - The time of conversion ex: seconds, minutes, or days. Leave blank for milliseconds
     */
    constructor (time, conversion) {
        this.time = time;
        this.conversion = conversion;
    }

    /**
     * Returns the time conversion - milliseconds, seconds, minutes, or days
     */
    returnTime() {
        switch (this.conversion) {
            case 'days':
                return (this.time * 1000 * 60 * 60 * 24);

            case 'hours':
                return (this.time * 1000 * 60 * 60);

            case 'minutes':
                return (this.time * 1000 * 60);

            case 'seconds':
                return (this.time * 1000);

            default:
                return this.time;
        }
    }
}

const PROPERTIES = {
    TIMES: {
        MILLISECONDS: 'milliseconds',
        SECONDS: 'seconds',
        MINUTES: 'minutes',
        HOURS: 'hours',
        DAYS: 'days'
    },
    FLAGS: {
        ONLINE: 'online',
        OFFLINE: 'offline',
        ERROR: 'error'
    }
}

module.exports = Task;
module.exports.times = PROPERTIES.TIMES;
module.exports.flags = PROPERTIES.FLAGS;