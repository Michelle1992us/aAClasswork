class Clock {
    constructor() {
        const time = new Date();
        this.hours = time.getHours();
        this.minutes = time.getMinutes();
        this.seconds = time.getSeconds();
        // 1. Create a Date object.
        // 2. Store the hours, minutes, and seconds.
        // 3. Call printTime.
        // 4. Schedule the tick at 1 second intervals.
        this.printTime;
        setInterval(this._tick.bind(this), 1000)

    }

    printTime() {
        const formattedTime = [this.hours, this.minutes, this.seconds].join(":")
        console.log(formattedTime)
        // Format the time in HH:MM:SS
        // Use console.log to print it.
    }

    _tick() {

        // 1. Increment the time by one second.
        // 2. Call printTime.

        // console.log(setInterval(this.printTime(), 1000));

        // setInterval(incrementSecond(), 1000) 
     
        this.incrementSecond()
        this.printTime()
        
    }


    incrementSecond() {
        console.log(this.printTime)
        this.seconds += 1;
        if (this.seconds === 60) {
            this.seconds = 0;
            this.incrementMinute;
        }
    }

    incrementMinute() {
        this.minutes += 1;
        if (this.minutes === 60) {
            this.minutes = 0;
            this.incrementHour
        }
    }

    incrementHour() {
        this.hours += 1;
        if (this.hours === 24) {
            this.hours = 0;
        }
    }
}

const clock = new Clock();
// clock.printTime();
clock._tick()