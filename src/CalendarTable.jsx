import React from 'react';
import generateNumbers from './generateNumbers';

const CalendarTable = () => {

    return(
        <div className="calendar-table">
            {generateNumbers(0, 6).map(tableColumn =>    
                (
                    <div className="calendar-section"
                        data-line-number={tableColumn}
                    >
                        {generateNumbers(0, 23).map(tableLine =>
                            (
                                <div className="calendar-section__item"
                                    data-line-number={tableLine}
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