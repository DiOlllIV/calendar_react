import React, { Component } from "react";
import { getEventTime } from "../addFunctions";

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: getEventTime(
        new Date(`${this.props.date} ${this.props.startTime}`)
      ),
      endTime: getEventTime(
        new Date(`${this.props.date} ${this.props.endTime}`)
      ),
      endEvent: Number(
        new Date(`${this.props.date} ${this.props.endTime}`) -
          new Date(`${this.props.date} ${this.props.startTime}`)
      ),
      startPos:
        this.startTime === "00:00"
          ? 0
          : new Date(`${this.props.date} ${this.props.startTime}`).getHours() *
              60 +
            new Date(`${this.props.date} ${this.props.startTime}`).getMinutes(),
      deleteVisible: false,
    };
  }

  setStyle = () => {
    const { startPos, endEvent } = this.state;

    const eventStyle = {
      top: startPos + "px",
      left: "4px",
      height: endEvent / 1000 / 60 + "px",
      backgroundColor: `${this.props.color}`,
    };

    return eventStyle;
  };

  handleBtnVisibility = () => {
    const { endEvent, deleteVisible } = this.state;
    const eventHeight = endEvent / 1000 / 60;

    const btnVisibility = deleteVisible
      ? { visibility: "visible", top: `${eventHeight + 2}px` }
      : { visibility: "hidden", top: `${eventHeight + 2}px` };

    return btnVisibility;
  };

  setBtnVisibility = () => {
    this.setState({
      deleteVisible: !this.state.deleteVisible,
    });
  };

  render() {
    return (
      <div
        className="event"
        style={{ ...this.setStyle() }}
        onClick={this.setBtnVisibility}
      >
        <span>{this.props.title}</span>
        <span>{`${this.state.startTime} - ${this.state.endTime}`}</span>
        <span>{this.props.comment}</span>
        <div
          className="deleteBtn"
          style={{ ...this.handleBtnVisibility() }}
          onClick={this.props.deleteEvent}
        >
          delete
        </div>
      </div>
    );
  }
}

export default Event;
