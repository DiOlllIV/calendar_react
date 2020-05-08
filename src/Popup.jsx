import React from 'react';

const Popup = (props) => {
    const visibility = props.visible ? {visibility:"visible"} : {visibility: 'hidden'};
    return (
        <div className="pop-up"
            style={visibility}
        >
            <button className="exit-btn"
                onClick={props.popupVisibility}
            >
                <div className="exit-btn__icon" />
            </button>
            <input className="pop-up__title"
                type="text" placeholder="Add Title" />
            <div className="time-set">
                <input className="time-set__style time-set__date"
                    type="date" />
                <input className="time-set__style time-set__start"
                    type="time" />
                <input className="time-set__style time-set__end"
                    type="time" />    
            </div>
            <textarea className="pop-up__comment"
                type="comment"
                placeholder="Add comments" />
            <button className="save-btn" >
                Save
            </button>
        </div>
    );
};

export default Popup