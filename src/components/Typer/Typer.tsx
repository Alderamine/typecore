import React from "react";

import { useSelector } from "react-redux";

import styles from "./Typer.module.scss";
import { Theme } from "../../data/themes";

import TyperSettings from "./TyperSettings/TyperSettings";
import TyperField from "./TyperField/TyperField";
import TyperHead from "./TyperHead/TyperHead";

function Typer() {
  return (
    <div className={styles.typer}>
      <TyperSettings />
      <TyperHead />
      <TyperField />
    </div>
  );
}

export default Typer;
