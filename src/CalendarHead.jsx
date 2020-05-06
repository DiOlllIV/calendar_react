import React from 'react';
import generateNumbers from './generateNumbers';

const CalendarHead = (props) => {
    const {week, today, getMonday} = props;
    
        return (
            <div className="week-line">
                {generateNumbers(0, 6).map(day => {
                        getMonday();
                        const newDay = new Date(today);
                        newDay.setDate(newDay.getDate() + day);
                        const currDayWeek = (week.indexOf(week[day]) === new Date().getDay() - 1) ?
                            (<span className="box-day__week-today">
                                {week[day]}
                            </span>) :
                            (<span className="box-day__week" >
                                {week[day]}
                            </span>);
                        const currDayMonth = (new Date(newDay).getDate() === new Date().getDate()) ?
                            (<span className="box-day__month-today" >
                                {new Date(newDay).getDate()}
                            </span>) :
                            (<span className="box-day__month" >
                                {new Date(newDay).getDate()}
                            </span>);
                        
                        return (
                            <div className="box-day"
                                key={day}>
                                {currDayWeek}
                                {currDayMonth}
                            </div>
                        )
                    }
                )} 
            </div>    
        );
    
};

export default CalendarHead;