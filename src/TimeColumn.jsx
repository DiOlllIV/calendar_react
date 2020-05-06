import React from 'react';
import generateNumbers from './generateNumbers';

const TimeColumn = () => 
    <div className="time-column">
        {generateNumbers(1, 23).map(timeItem => 
            (
                <div key={timeItem}
                    className="time-column__line"
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