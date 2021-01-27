import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
        }
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
       this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick() {
        this.setState({time: new Date()});
    }

    render() {
        return (
            <div className="clock-widget">
                <h1>Clock</h1>
                <div className="full-clock">
                    <div className="time">
                        <h2>Time</h2>
                        <h3>{this.state.time.getHours()} : {this.state.time.getMinutes()} : {this.state.time.getSeconds()}</h3>
                    </div>
                    <div className="date">
                        <h2>Date</h2>
                        <h3>{this.state.time.getMonth() + 1}/{this.state.time.getDate()}/{this.state.time.getFullYear()}</h3>
                    </div>
                </div>
            </div>
        )
    }



}



export default Clock;