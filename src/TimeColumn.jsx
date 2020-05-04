import React from 'react';
import generateNumbers from './generateNumbers';

const TimeColumn = () => 
    <div className="time-column">
        {generateNumbers(1, 23).map(timeItem => 
            (
                <div className="time-column__line"
                    data-line-number={timeItem}
                >
                    {timeItem <= 9 ?
                        `0${timeItem}:00` :
                        `${timeItem}:00`
                    }
                </div>
            )
        )}
    </div>

export default TimeColumn;