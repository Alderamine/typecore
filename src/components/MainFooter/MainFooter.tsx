import React from "react";

import { useSelector } from "react-redux";

import styles from "./MainFooter.module.scss";
import { Theme } from "../../data/themes";

import TyperKeys from "../TyperKeys/TyperKeys";
import MainTheme from "../MainTheme/MainTheme";

function MainFooter() {
  const { background } = useSelector(
    (state: { theme: Theme }) => state.theme.colors
  );
  return (
    <div className={styles.footer} style={{ background }}>
      <TyperKeys />
      <MainTheme />
    </div>
  );
}

export default MainFooter;
