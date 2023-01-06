import React from "react";

import { useSelector } from "react-redux";

import styles from "./TyperSettings.module.scss";
import { Theme } from "../../../data/themes";

import TyperParameters from "./TyperParameters";

function TyperModes() {
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
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 4.5H8.99998V10.7382C8.99998 11.1132 8.90628 11.4822 8.72739 11.8117L5.14269 18.415C4.50968 19.5811 5.35388 20.9999 6.68068 20.9999H17.3193C18.6461 20.9999 19.4903 19.5811 18.8573 18.415L15.2726 11.8117C15.0937 11.4822 15 11.1132 15 10.7382V4.5H16C16.4142 4.5 16.75 4.16421 16.75 3.75C16.75 3.33579 16.4142 3 16 3H8C7.58579 3 7.25 3.33579 7.25 3.75C7.25 4.16421 7.58579 4.5 8 4.5ZM10.5 10.7382V4.5H13.5V10.7382C13.5 11.3631 13.6561 11.9781 13.9543 12.5273L14.7537 14H9.24621L10.0457 12.5273C10.3438 11.9781 10.5 11.3631 10.5 10.7382ZM8.43192 15.5H15.568L17.539 19.1307C17.6294 19.2973 17.5088 19.4999 17.3193 19.4999H6.68068C6.49114 19.4999 6.37054 19.2973 6.46097 19.1307L8.43192 15.5Z"
            fill={accent}
          />
        </svg>

        <TyperParameters name="Modes" extraSpace={true} />
      </div>
    </div>
  );
}

export default TyperModes;
