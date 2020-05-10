import React from 'react';

const Redline = () => {
    const minutes = Number(new Date().getMinutes());
    let redlineStyle = {
       paddingTop: `${minutes}px`,
    }
    return (
        <div className="redline"
            style={redlineStyle}
        >
            <span className="redline__ball"></span>
            <span className="redline__line"></span>
        </div>
    );
}

export default Redline;