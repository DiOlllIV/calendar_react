import React from "react";
import { generateNumbers, getTime } from "../../addFunctions";

const TimeColumn = () => (
  <div className="time-column">
    {generateNumbers(1, 23).map((timeItem) => (
      <div key={timeItem} className="time-column__line">
        {getTime(timeItem)}
      </div>
    ))}
  </div>
);

export default TimeColumn;
