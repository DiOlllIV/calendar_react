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

    setCurrMonth = () => {
        let currMonth = this.state.months[this.state.today.getMonth()];
        return `${currMonth} ${this.state.today.getFullYear()}`;
    }

    handleCurrDay = () => {
        this.setState({
            today: new Date(),
            zeroDay: 0,
        });  
    };

    handleNextWeek = () => {
        const {today, zeroDay} = this.state;
        this.setState({
            today: new Date(today.setDate(today.getDate() + 7)),
            zeroDay: new Date(zeroDay + 7),
        });   
    };

    handlePrevWeek = () => {
        const {today, zeroDay} = this.state;
        this.setState({
            today: new Date(today.setDate(today.getDate() - 7)),
            zeroDay: new Date(zeroDay - 7),
        });    
    };

    render() {
        return (
            <>
                <Header 
                    currMonth={this.setCurrMonth()}
                    nextWeek={this.handleNextWeek}
                    prevWeek={this.handlePrevWeek}
                    currDay={this.handleCurrDay}
                />
                <section className="calendar">
                    <CalendarHead 
                        week={this.state.week}
                        today={this.state.today}
                        getMonday={this.getMonday}  
                        zeroDay={this.state.zeroDay} 
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