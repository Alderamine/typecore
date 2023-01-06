import React from "react";

import { useSelector } from "react-redux";

import styles from "./Spinner.module.scss";
import { Theme } from "../../../data/themes";

function Spinner(props: { hide?: boolean }) {
  const { accent, background } = useSelector(
    (state: { theme: Theme }) => state.theme.colors
  );

  return (
    <div className={`${styles.container} ${props.hide && styles.hide}`}>
      <div className={styles.spinner} style={{ borderColor: accent }}>
        <svg
          width="21"
          height="16"
          viewBox="0 0 21 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 7.30435L10.5 0L21 7.30435V16L10.5 9.73913L0 16V7.30435Z"
            fill={background}
          />
        </svg>

        <svg
          width="21"
          height="16"
          viewBox="0 0 21 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 8.69565L10.5 16L1.27176e-08 8.69565L7.72916e-07 -2.1339e-06L10.5 6.26087L21 -2.98023e-07L21 8.69565Z"
            fill={background}
          />
        </svg>
      </div>
    </div>
  );
}

export default Spinner;
