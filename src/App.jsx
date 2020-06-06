import React, { Component } from "react";
import Header from "./components/Header";
import CalendarHead from "./components/CalendarHead";
import TimeColumn from "./components/table/TimeColumn";
import CalendarTable from "./components/table/CalendarTable";
import Popup from "./components/Popup";
import { getEventsList, deleteEvent } from "./EventsGateway";
import { months, week } from "./addFunctions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      today: new Date(),
      zeroDay: 0,
      visible: false,
      events: [],
    };
  }

  componentDidMount() {
    this.fetchEvents();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.events === this.state.events) this.fetchEvents();
  }

  fetchEvents = () =>
    getEventsList().then((events) =>
      this.setState({
        events,
      })
    );

  getMonday = () => {
    while (this.state.today.getDay() !== 1) {
      this.state.today.setDate(this.state.today.getDate() - 1);
    }
  };

  setCurrMonth = () => {
    let currMonth = months[this.state.today.getMonth()];
    return `${currMonth} ${this.state.today.getFullYear()}`;
  };

  handleCurrDay = () => {
    this.setState({
      today: new Date(),
      zeroDay: 0,
    });
  };

  handleNextWeek = () => {
    const { today, zeroDay } = this.state;
    this.setState({
      today: new Date(today.setDate(today.getDate() + 7)),
      zeroDay: zeroDay + 7,
    });
  };

  handlePrevWeek = () => {
    const { today, zeroDay } = this.state;
    this.setState({
      today: new Date(today.setDate(today.getDate() - 7)),
      zeroDay: zeroDay - 7,
    });
  };

  handlePopupVisibility = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  handleFillForm = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleDeleteEvent = (id) => {
    deleteEvent(id).then(() => this.fetchEvents());
  };

  setPopupVisibility = () => {
    const visibility = this.state.visible
      ? { visibility: "visible" }
      : { visibility: "hidden" };

    return visibility;
  };

  render() {
    return (
      <>
        <Header
          currMonth={this.setCurrMonth()}
          nextWeek={this.handleNextWeek}
          prevWeek={this.handlePrevWeek}
          currDay={this.handleCurrDay}
          popupVisibility={this.handlePopupVisibility}
        />
        <section className="calendar">
          <CalendarHead
            week={week}
            today={this.state.today}
            getMonday={this.getMonday}
            zeroDay={this.state.zeroDay}
          />
          <div className="calendar-column">
            <TimeColumn />
            <CalendarTable
              events={this.state.events}
              today={this.state.today}
              handleDeleteEvent={this.handleDeleteEvent}
            />
          </div>
          <Popup
            visible={this.state.visible}
            popupVisibility={this.handlePopupVisibility}
            setPopupVisibility={this.setPopupVisibility}
          />
        </section>
      </>
    );
  }
}
export default App;
