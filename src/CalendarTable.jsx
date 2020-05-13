import React, {Component} from 'react';
import generateNumbers from './generateNumbers';
import Event from './Event';
import Redline from './Redline';

class CalendarTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deleteVisible: false,
        };
    }

    handleBtnVisible = () =>{
        this.setState({
            deleteVisible: !this.state.deleteVisible,
        });
    };

    setRedline = (hour, id) => {
        if (id === `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}` &&
            hour === new Date().getHours())
            return <Redline />;
    }

    render() {
        const {today, events, handleDeleteEvent} = this.props;

        return(
            <div className="calendar-table">
                {generateNumbers(0, 6).map((tableColumn) => {
                    const newDay = new Date(today);
                    newDay.setDate(newDay.getDate() + tableColumn);
                    const id = `${newDay.getDate()}/${newDay.getMonth()}/${newDay.getFullYear()}`;
                    return (
                            <div key={tableColumn}
                                id={id}
                                className="calendar-section" 
                            >
                                {generateNumbers(0, 23).map(tableLine =>
                                    (
                                        <div key={tableLine}
                                            className="calendar-section__item"
                                        >
                                            {this.setRedline(tableLine, id)}
                                        </div>
                                    ))}
                                {events.map(event => { 
                                    if(id === `${new Date(event.startDate).getDate()}/${new Date(event.startDate).getMonth()}/${new Date(event.startDate).getFullYear()}`)
                                        return (
                                            <Event 
                                            key={event.id}
                                            id={event.id}
                                            title={event.title}
                                            startDate={event.startDate}
                                            endDate={event.endDate}
                                            comment={event.comment}
                                            btnVisibility={this.handleBtnVisible}
                                            deleteVisible={this.state.deleteVisible}
                                            deleteEvent={() => handleDeleteEvent(event.id)}
                                        />);
                                        return null;
                                    })
                                }
                            </div>  
                        );
                    }
                )}
            </div>
        );
    }
};

export default CalendarTable;