import React, { Component } from "react";
import { generateNumbers } from "../../addFunctions";
import DaysColumn from "./DaysColumn";

class CalendarTable extends Component {
  render() {
    const { today, events, handleDeleteEvent } = this.props;

    return (
      <div className="calendar-table">
        {generateNumbers(0, 6).map((tableColumn) => {
          const newDay = new Date(today);
          newDay.setDate(newDay.getDate() + tableColumn);
          const id = `${newDay.getDate()}/${newDay.getMonth()}/${newDay.getFullYear()}`;

          return (
            <DaysColumn
              key={tableColumn}
              tableColumn={tableColumn}
              id={id}
              events={events}
              handleDeleteEvent={handleDeleteEvent}
            />
          );
        })}
      </div>
    );
  }
}

export default CalendarTable;
