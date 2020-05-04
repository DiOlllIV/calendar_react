import React from 'react';
import Header from './Header';
import CalendarHead from './CalendarHead';
import TimeColumn from './TimeColumn';
import CalendarTable from './CalendarTable';

const App = () => {
    return (
        <>
            <Header />
            <section className="calendar">
                <CalendarHead />
                <div className="calendar-column">
                    <TimeColumn />
                    <CalendarTable />
                </div>
            </section>
        </>
    );
};

export default App;