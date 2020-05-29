import React from 'react';
import { generateNumbers } from '../addFunctions';
import Event from './Event';
import Redline from './Redline';

const DaysColumn = (props) => {
    const { 
            id, 
            events, 
            handleDeleteEvent,
        } = props;

    const setRedline = (hour, id) => {
            if (id === `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}` &&
                hour === new Date().getHours())
                return <Redline />;
        }

    return (
        <div 
            id={id}
            className="calendar-section" 
        >
            {generateNumbers(0, 23).map(tableLine =>
                (
                    <div key={tableLine}
                        className="calendar-section__item"
                    >
                        {setRedline(tableLine, id)}
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
                        deleteEvent={() => handleDeleteEvent(event.id)}
                    />);
                    return null;
                })
            }
        </div>  
    );
};

export default DaysColumn;