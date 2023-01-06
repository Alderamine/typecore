import React from "react";

import { useSelector } from "react-redux";

import { Theme } from "../../data/themes";
import styles from "./TyperKeys.module.scss";

function TyperKeys() {
  const { container, accentDarker } = useSelector(
    (state: { theme: Theme }) => state.theme.colors
  );

  return (
    <div className={styles.keys}>
      <div
        className={styles.keys__key}
        style={{ background: container, color: accentDarker }}
      >
        <span style={{}}>[CTRL + S]</span> - start
      </div>
      <div
        className={styles.keys__key}
        style={{ background: container, color: accentDarker }}
      >
        <span style={{}}>[CTRL + P]</span> - parameters
      </div>
      <div
        className={styles.keys__key}
        style={{ background: container, color: accentDarker }}
      >
        <span style={{}}>[CTRL + L]</span> - leadersboard
      </div>
      <div
        className={styles.keys__key}
        style={{ background: container, color: accentDarker }}
      >
        <span style={{}}>[CTRL + K]</span> - custom text
      </div>
    </div>
  );
}

export default TyperKeys;
