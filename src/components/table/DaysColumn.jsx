import React from "react";
import { getEventDate } from "../../addFunctions";
import SectionItem from "./SectionItem";
import Event from "../Event";

const DaysColumn = (props) => {
  const { id, events, handleDeleteEvent } = props;

  return (
    <div id={id} className="calendar-section">
      <SectionItem id={id} />
      {events.map(
        (event) =>
          id === getEventDate(event.date, event.startTime) && (
            <Event
              key={event.id}
              id={event.id}
              title={event.title}
              date={event.date}
              startTime={event.startTime}
              endTime={event.endTime}
              comment={event.comment}
              color={event.color}
              deleteEvent={() => handleDeleteEvent(event.id)}
            />
          )
      )}
    </div>
  );
};

export default DaysColumn;
