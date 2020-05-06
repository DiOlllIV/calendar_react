import React from 'react';
import generateNumbers from './generateNumbers';

const CalendarTable = () => {

    return(
        <div className="calendar-table">
            {generateNumbers(0, 6).map(tableColumn =>    
                (
                    <div key={tableColumn}
                        className="calendar-section" 
                    >
                        {generateNumbers(0, 23).map(tableLine =>
                            (
                                <div key={tableLine}
                                    className="calendar-section__item"
                                >
                                </div>
                            ))}
                    </div>  
                )
            )}
        </div>
    );
};

export default CalendarTable;