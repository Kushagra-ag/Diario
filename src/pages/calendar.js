import React, { Component } from 'react';
import Calendar from 'react-calendar';

class CalendarClass extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange = date => this.setState({ date });

    render() {
        return (
            <div>
                <h1>
                    Calendar
                </h1>
                <br/>
                <center>
                    <Calendar
                        onChange={this.onChange}
                        value={this.state.date}
                    />
                </center>
            </div>
        );
    }
}

export default CalendarClass;