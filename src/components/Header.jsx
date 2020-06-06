import React from "react";

const Header = (props) => {
  const { currMonth, currDay, nextWeek, prevWeek, popupVisibility } = props;

  return (
    <header className="header">
      <button className="create-btn" onClick={popupVisibility}>
        <svg
          className="create-btn__icon"
          width="24"
          height="24"
          viewBox="0 0 36 36"
        >
          <line
            strokeLinecap="undefined"
            strokeLinejoin="undefined"
            id="svg_8"
            y2="18"
            x2="18"
            y1="0.045313"
            x1="18"
            strokeWidth="4"
            stroke="#dae544"
            fill="none"
          />
          <line
            stroke="#00ff83"
            strokeLinecap="undefined"
            strokeLinejoin="undefined"
            id="svg_9"
            y2="18"
            x2="18"
            y1="36"
            x1="18"
            fillOpacity="null"
            strokeWidth="4"
            fill="none"
          />
          <line
            stroke="#ff00ff"
            strokeLinecap="undefined"
            strokeLinejoin="undefined"
            id="svg_11"
            y2="18.1"
            x2="15.994723"
            y1="18.1"
            x1="-0.1"
            fillOpacity="null"
            strokeWidth="4"
            fill="none"
          />
          <line
            stroke="#00e5ff"
            strokeLinecap="undefined"
            strokeLinejoin="undefined"
            id="svg_12"
            y2="18.055264"
            x2="20.015805"
            y1="18.055264"
            x1="36"
            fillOpacity="null"
            strokeWidth="4"
            fill="none"
          />
          <path
            id="svg_23"
            d="m20.309476,15.225199"
            opacity="0.5"
            fillOpacity="null"
            strokeWidth="1.5"
            stroke="#007fff"
            fill="none"
          />
          <path
            id="svg_24"
            d="m18.734456,17.269963"
            opacity="0.5"
            fillOpacity="null"
            strokeWidth="1.5"
            stroke="#007fff"
            fill="none"
          />
          <path
            id="svg_25"
            d="m19.093671,17.104171"
            opacity="0.5"
            fillOpacity="null"
            strokeWidth="1.5"
            stroke="#007fff"
            fill="none"
          />
          <path
            stroke="#00e5ff"
            id="svg_27"
            d="m19.259462,17.850234l-1.492124,1.464493l1.492124,0l0,-1.464493z"
            fillOpacity="null"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            id="svg_28"
            d="m21.580546,13.290963"
            opacity="0.5"
            fillOpacity="null"
            strokeOpacity="null"
            strokeWidth="1.5"
            stroke="#007fff"
            fill="none"
          />
          <path
            id="svg_29"
            d="m17.988393,17.988393"
            opacity="0.5"
            fillOpacity="null"
            strokeOpacity="null"
            strokeWidth="1.5"
            stroke="#007fff"
            fill="none"
          />
          <path
            id="svg_30"
            d="m18.154185,19.287095"
            opacity="0.5"
            fillOpacity="null"
            strokeOpacity="null"
            strokeWidth="1.5"
            stroke="#007fff"
            fill="none"
          />
          <path
            stroke="#dae544"
            id="svg_31"
            d="m16.772588,18.181818c0,0 0.013818,-1.008751 0,-1.022382c0.013818,0.013631 1.008709,0.054527 0.994892,0.040895c0.013818,0.013631 -0.994892,0.981487 -0.994892,0.981487z"
            fillOpacity="null"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
        <span className="create-btn__text">Create</span>
      </button>
      <button className="today-btn" onClick={currDay}>
        Today
      </button>
      <button className="btn-left" onClick={prevWeek}>
        <i className="arrow arrow__left" />
      </button>
      <button className="btn-right" onClick={nextWeek}>
        <i className="arrow arrow__right" />
      </button>
      <span className="title">{currMonth}</span>
    </header>
  );
};

export default Header;
