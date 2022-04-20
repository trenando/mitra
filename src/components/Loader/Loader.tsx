import React from "react";
import style from "./Loader.module.scss";

export const Loader = () => {
    return (
        <div className={style.preloader}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    margin: "auto",
                    background: "white",
                    display: "block",
                    shapeRendering: "auto",
                }}
                width="200px"
                height="200px"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
            >
                <circle
                    cx="50"
                    cy="50"
                    fill="none"
                    stroke="#212425"
                    strokeWidth="7"
                    r="30"
                    strokeDasharray="141.37166941154067 49.12388980384689"
                >
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        repeatCount="indefinite"
                        dur="1s"
                        values="0 50 50;360 50 50"
                        keyTimes="0;1"
                    ></animateTransform>
                </circle>
            </svg>
        </div>
    );
};
