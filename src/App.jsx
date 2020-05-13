import React, {Component} from 'react';
import Header from './Header';
import CalendarHead from './CalendarHead';
import TimeColumn from './TimeColumn';
import CalendarTable from './CalendarTable';
import Popup from './Popup';
import {getEventsList} from './EventsGateway';

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
            visible: false,
            events: [],
        }
    }

    componentDidMount() {
        this.fetchEvents();   
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.events === this.state.events) 
            this.fetchEvents();
    }

    fetchEvents = () => 
        getEventsList()
            .then((events) =>
                this.setState({
                    events,
            }));

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
            zeroDay: zeroDay + 7,
        });   
    };

    handlePrevWeek = () => {
        const {today, zeroDay} = this.state;
        this.setState({
            today: new Date(today.setDate(today.getDate() - 7)),
            zeroDay: zeroDay - 7,
        });    
    };
    
    handlePopupVisibility = () => {
        this.setState({
            visible: !this.state.visible,
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
                    popupVisibility={this.handlePopupVisibility}
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
                        <CalendarTable 
                            events={this.state.events}
                            today={this.state.today}
                        />
                    </div>
                    <Popup visible={this.state.visible}
                        popupVisibility={this.handlePopupVisibility}
                    />
                </section>
            </>
        );
    }
};
export default App;