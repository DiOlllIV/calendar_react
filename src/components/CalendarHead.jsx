import React from "react";
import { generateNumbers } from "../addFunctions";

const CalendarHead = (props) => {
  const { getMonday, zeroDay, week, today } = props;
  getMonday();
  return (
    <div className="week-line">
      {generateNumbers(0, 6).map((day) => {
        const newDay = new Date(today);
        newDay.setDate(newDay.getDate() + day);
        const currDayWeek =
          week.indexOf(week[day + zeroDay]) === new Date().getDay() - 1 ? (
            <span className="box-day__week-today">{week[day]}</span>
          ) : (
            <span className="box-day__week">{week[day]}</span>
          );
        const currDayMonth =
          new Date(newDay).getDate() === new Date().getDate() &&
          zeroDay === 0 ? (
            <span className="box-day__month-today">
              {new Date(newDay).getDate()}
            </span>
          ) : (
            <span className="box-day__month">{new Date(newDay).getDate()}</span>
          );

        return (
          <div className="box-day" key={day}>
            {currDayWeek}
            {currDayMonth}
          </div>
        );
      })}
    </div>
  );
};

export default CalendarHead;
