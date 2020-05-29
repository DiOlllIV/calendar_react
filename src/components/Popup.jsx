import React, {Component} from 'react';
import { createEvent , getEventsList} from '../EventsGateway';

class Popup extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            startDate: '',
            endDate: '',
            comment: '',
            color: '',
        };
    }
    
    handleFillForm = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value,
        });
    };

    render() {
        
        return (
            <div className="pop-up"
                style={{...this.props.setPopupVisibility()}}
            >
                <button className="exit-btn"
                    onClick={this.props.popupVisibility}
                >
                    <div className="exit-btn__icon" />
                </button>
                <input className="pop-up__title"
                    type="text" name="title"
                    placeholder="Add Title" 
                    onChange={this.handleFillForm}
                />
                <span className="pop-up__color">
                    Choose color: 
                <input 
                    type="color"
                    name="color"
                    onChange={this.handleFillForm} 
                /></span>
                <div className="time-set">
                    <input className="time-set__style time-set__start"
                        type="datetime-local" name="startDate"
                        onChange={this.handleFillForm}    
                    />
                    <input className="time-set__style time-set__end"
                        type="datetime-local" name="endDate"
                        onChange={this.handleFillForm}    
                    />    
                </div>
                <textarea className="pop-up__comment"
                    type="comment" name="comment"
                    onChange={this.handleFillForm}
                    placeholder="Add comments" 
                />
                <button className="save-btn" 
                    onClick={() => createEvent(this.state)
                        .then(getEventsList())
                        .then(this.props.popupVisibility)}
                >
                    Save
                </button>
            </div>
        );
    }
};

export default Popup