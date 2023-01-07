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
        <div className={styles.parameters__ABC} style={{ color: accent }}>
          ABC
        </div>
        <TyperParameters name="Words" />
      </div>

      <div className={`${styles["parameters__group--punctuation"]}`}>
        <span style={{ color: accent }}>#</span>
        <TyperParameters name="Punctuation" />
      </div>

      <div className={styles["parameters__group--icon"]}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.33337 12.5C3.33337 12.5 4.16671 11.6667 6.66671 11.6667C9.16671 11.6667 10.8334 13.3334 13.3334 13.3334C15.8334 13.3334 16.6667 12.5 16.6667 12.5V2.50002C16.6667 2.50002 15.8334 3.33335 13.3334 3.33335C10.8334 3.33335 9.16671 1.66669 6.66671 1.66669C4.16671 1.66669 3.33337 2.50002 3.33337 2.50002V12.5Z"
            stroke={accent}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.33337 18.3333V12.5"
            stroke={accent}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <TyperParameters name="Difficulty" />
      </div>
    </div>
  );
}

export default TyperBasics;
