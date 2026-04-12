import React from "react";

const Phone = () => {
  return (
    <div className="phone-container">
      <svg
        className="phone"
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M400 0H0V400H400V0ZM134 34C120.745 34 110 44.7452 110 58V318H290V66C290 48.3269 275.673 34 258 34H134Z"
          fill="white"
        />
        <rect
          x="112"
          y="36"
          width="176"
          height="328"
          rx="22"
          stroke="url(#paint0_linear_6491_3095)"
          stroke-width="4"
        />
        <path
          d="M110 318H290V342C290 355.255 279.255 366 266 366H134C120.745 366 110 355.255 110 342V318Z"
          fill="url(#paint1_linear_6491_3095)"
        />
        <g className="phone-shutter" opacity="0.5">
          <rect
            x="0.666667"
            y="-0.666667"
            width="30.6667"
            height="30.6667"
            rx="15.3333"
            transform="matrix(1 0 0 -1 183 356.667)"
            stroke="white"
            stroke-width="1.33333"
          />
          <circle
            cx="13.3333"
            cy="13.3333"
            r="13.3333"
            transform="matrix(1 0 0 -1 185.667 355.332)"
            fill="white"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_6491_3095"
            x1="200"
            y1="34"
            x2="200"
            y2="366"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#788187" />
            <stop offset="1" stop-color="#545B5F" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_6491_3095"
            x1="200"
            y1="366"
            x2="200"
            y2="318"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#3C4144" />
            <stop offset="1" stop-color="#60686C" />
          </linearGradient>
        </defs>
      </svg>

      {/*<div className="level-bar-top">
        <div className="level-bar-top-buble"></div>
      </div>
      <div className="level-bar-right">
        <div className="level-bar-right-buble"></div>
      </div>*/}

      <svg
        className="crosshair-level"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="crosshair-path"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9 11V20H11V11H20V9H11V0H9V9H0V11H9Z"
        />
      </svg>
      <svg
        className="crosshair-reference"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="crosshair-path"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9 11V20H11V11H20V9H11V0H9V9H0V11H9Z"
        />
      </svg>
    </div>
  );
};

export default Phone;
