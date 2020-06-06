import React from "react";
import { generateNumbers } from "../../addFunctions";
import Redline from "../Redline";

const SectionItem = (props) => {
  const { id } = props;
  const setRedline = (hour, id) => {
    if (
      id ===
        `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}` &&
      hour === new Date().getHours()
    )
      return <Redline />;
  };

  return generateNumbers(0, 23).map((tableLine) => (
    <div key={tableLine} className="calendar-section__item">
      {setRedline(tableLine, id)}
    </div>
  ));
};

export default SectionItem;
