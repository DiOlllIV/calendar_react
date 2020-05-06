import React, {Component} from 'react';
import Header from './Header';
import CalendarHead from './CalendarHead';
import TimeColumn from './TimeColumn';
import CalendarTable from './CalendarTable';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            week: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
            today: new Date(),
            monthDay: new Date().getDate(),
            weekDay: new Date().getDay() - 1,
            zeroDay: 0,
            currMonth: '',
            monthElem: '',
            popupMonth: '',
            checkMonthInWeek: false,
        }
    }

    getMonday = () => {
        while (this.state.today.getDay() !== 1) {
            this.state.today.setDate(this.state.today.getDate() - 1);
        }
    };

    render() {
        return (
            <>
                <Header />
                <section className="calendar">
                    <CalendarHead 
                        week={this.state.week}
                        today={this.state.today}
                        getMonday={this.getMonday}
                    />
                    <div className="calendar-column">
                        <TimeColumn />
                        <CalendarTable />
                    </div>
                </section>
            </>
        );
    }
};
export default App;