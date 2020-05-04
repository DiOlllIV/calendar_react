import React, {Component} from 'react';
import generateNumbers from './generateNumbers';

class CalendarHead extends Component {
    constructor(props) {
        super(props);
        this.state = {
            week: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
            today: new Date(),
            monthDay: new Date().getDate(),
            weekDay: new Date().getDay() - 1,
            zeroDay: 0,
        }
    }
    render() {
        return (
            <div className="week-line">
                {generateNumbers(0, 6).map(day => {
                        const newDay = new Date(this.state.today);
                        newDay.setDate(newDay.getDate() + day);
                        return (
                            <div className="box-day"
                                key={day}>
                                <span className="box-day__week"
                                    data-day-number={day + this.state.zeroDay}
                                >
                                    {this.state.week[day]}
                                </span>
                                <span className="box-day__month"
                                    data-date-number={new Date(newDay).getDate()}
                                >
                                    {new Date(newDay).getDate()}
                                </span>
                            </div>
                        )
                    }
                )} 
            </div>    
        );
    }
};

export default CalendarHead;