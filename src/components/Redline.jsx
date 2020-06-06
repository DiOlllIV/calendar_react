import React, { useState, useEffect } from "react";

const Redline = () => {
  const [redlinePos, moveRedline] = useState(new Date().getMinutes());

  let redlineStyle = {
    paddingTop: `${redlinePos}px`,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveRedline((redlinePos) => (redlinePos = new Date().getMinutes()));
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="redline" style={redlineStyle}>
      <span className="redline__ball"></span>
      <span className="redline__line"></span>
    </div>
  );
};

export default Redline;
