import React from 'react';
import { getEventTime } from '../addFunctions';

const Event = (props) => {
    const startTime = getEventTime(new Date(props.startDate));
    const endTime = getEventTime(new Date(props.endDate));
    const endEvent = new Date(props.endDate) - new Date(props.startDate);
    const eventHeight = endEvent / 1000 / 60;
    const startPos = (startTime === '00:00') ? 0 :
        (new Date(props.startDate).getHours() * 60) + new Date(props.startDate).getMinutes();
   
    const eventStyle = {
        top: `${startPos}px`,
        left: "4px",
        height: `${eventHeight}px`,
    };


    let btnVisibility = props.deleteVisible ? 
        {visibility:"visible", top: `${eventHeight + 2}px`} : 
        {visibility: 'hidden', top: `${eventHeight + 2}px`};

    return (
        <div className="event"
            style={eventStyle}
            onClick={props.btnVisibility}
        >
            <span>{props.title}</span>
            <span>{`${startTime} - ${endTime}`}</span>
            <span>{props.comment}</span>
            <div className="deleteBtn"
                style={btnVisibility}
                onClick={props.deleteEvent}
            >
                delete
            </div>
        </div>
    );
};

export default Event;