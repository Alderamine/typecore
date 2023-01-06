import React from "react";

import { useSelector } from "react-redux";

import styles from "./TyperSettings.module.scss";
import { Theme } from "../../../data/themes";

import TyperParameters from "./TyperParameters";

function TyperBasics() {
  const { accent } = useSelector(
    (state: { theme: Theme }) => state.theme.colors
  );

  return (
    <div className={styles.parameters}>
      <div className={styles["parameters__group--icon"]}>
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_117_982)">
            <path
              d="M11 20.1666C16.0627 20.1666 20.1667 16.0626 20.1667 11C20.1667 5.93737 16.0627 1.83331 11 1.83331C5.93743 1.83331 1.83337 5.93737 1.83337 11C1.83337 16.0626 5.93743 20.1666 11 20.1666Z"
              stroke={accent}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 5.5V11L14.6667 12.8333"
              stroke={accent}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_117_982">
              <rect width="22" height="22" fill={accent} />
            </clipPath>
          </defs>
        </svg>

        <TyperParameters name="Time" />
      </div>

      <div className={styles["parameters__group--icon"]}>
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.1754 18.4121L22.1754 12.4121L16.1754 6.41211"
            stroke={accent}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.17542 6.41211L2.17542 12.4121L8.17542 18.4121"
            stroke={accent}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <TyperParameters name="Languages" extraSpace={true} />
      </div>
    </div>
  );
}

export default TyperBasics;
